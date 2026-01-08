// backend/src/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const { connectMQTT } = require('./services/mqttService');
const sensorRoutes = require('./routes/sensorRoute');
const userRoutes = require('./routes/UserRoute')
const deviceRoutes = require('./routes/deviceRoute');
const startAutoMail = require('./utils/autoMail');
const chatRoutes = require('./routes/chatRoute');
const predictRoutes = require('./routes/predictRoute');

dotenv.config(); 
const app = express();

app.use(cors()); 
app.use(express.json());

connectDB();
const mqttClient = connectMQTT();

app.use('/api/chat', chatRoutes);
app.use('/api/sensors', sensorRoutes);
app.use('/api/user', userRoutes);
app.use('/api/devices', deviceRoutes);
app.use('/api/predict', predictRoutes);
app.use('/api/sensor-data', predictRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  startAutoMail();
});

const gracefulShutdown = async (signal) => {
  console.log(`\n[${signal}] Đang tắt server sạch sẽ...`);

  if (server) {
    server.close(() => {
      console.log('HTTP Server đã đóng.');
    });
  }

  if (mqttClient && mqttClient.connected) {
    mqttClient.end(true, () => {
      console.log('MQTT đã ngắt kết nối.');
    });
  }

  try {
    await mongoose.connection.close();
    console.log('MongoDB đã đóng kết nối.');
  } catch (err) {
    console.error('Lỗi đóng MongoDB:', err);
  }
  
  if (signal === 'SIGUSR2') {
    process.kill(process.pid, 'SIGUSR2');
  } else {
    process.exit(0);
  }
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));   
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.once('SIGUSR2', () => gracefulShutdown('SIGUSR2'));

module.exports = app;