import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, Navigate, useNavigate } from 'react-router-dom';
import { FaHome, FaChartBar, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import FloatingChat from './components/chatbox/floatingChat';
const MainLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const TOAST_ID = "logout-confirmation";
    if (toast.isActive(TOAST_ID)) return;

    const ConfirmLogout = ({ closeToast }) => (
      <div className="w-[340px] px-2">
        
        <div className="mb-6 text-center">
          <h3 className="text-lg font-bold text-gray-800">Xác nhận đăng xuất</h3>
          {/* <p className="text-gray-500 text-sm mt-1">Bạn có chắc chắn muốn thoát phiên làm việc?</p> */}
        </div>

        <div className="flex gap-3">
          <button 
            onClick={closeToast}
            className="flex-1 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
          >
            Hủy bỏ
          </button>
          
          <button 
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              
              closeToast(); 
              navigate("/login"); 
              
              toast.info("Đã đăng xuất thành công", { autoClose: 2000 });
            }} 
            className="flex-1 py-2.5 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg shadow-md transition-colors"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    );

    toast(<ConfirmLogout />, {
      toastId: TOAST_ID,
      position: "top-center",
      autoClose: false,
      closeOnClick: false,
      icon: false,
      style: { minWidth: '320px', borderRadius: '12px' }
    });
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      
      <aside className="w-64 bg-emerald-900 text-white flex flex-col shadow-xl transition-all">
        <div className="h-16 flex items-center justify-center border-b border-emerald-800 font-bold text-xl tracking-wider">
          🌱 PlantCare
        </div>
        
        <nav className="flex-1 px-3 py-6 space-y-2">
          
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => 
              `flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition duration-200 font-medium
              ${isActive ? 'bg-emerald-700 text-white shadow-md' : 'hover:bg-emerald-800 text-emerald-100'}`
            }
          >
            <FaHome /> 
            <span>Tổng quan</span>
          </NavLink>
          
            <NavLink 
            to="/history" 
            className={({ isActive }) => 
              `flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition duration-200 font-medium
              ${isActive ? 'bg-emerald-700 text-white shadow-md' : 'hover:bg-emerald-800 text-emerald-100'}`
            }
          >
            <FaChartBar /> 
            <span>Giám sát dữ liệu</span>
          </NavLink>

          <NavLink 
            to="/profile" 
            className={({ isActive }) => 
              `flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition duration-200 font-medium
              ${isActive ? 'bg-emerald-700 text-white shadow-md' : 'hover:bg-emerald-800 text-emerald-100'}`
            }
          >
            <FaUser /> 
            <span>Người dùng</span>
          </NavLink>

        </nav>
        
        <div className="p-4 border-t border-emerald-800">
           <button 
             onClick={handleLogout}
             className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-emerald-200 hover:text-white hover:bg-red-600/80 transition-colors duration-200"
           >
             <FaSignOutAlt />
             <span className="text-sm font-medium">Đăng xuất</span>
           </button>
           <div className="mt-4 text-xs text-emerald-500 text-center">
              IoT System v1.0
           </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto bg-gray-50">
        <Outlet />
      </main>
      <FloatingChat />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover={false} 
        theme="light"
      />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} /> 
          <Route path="history" element={<History />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;