import api from './api'

export const contactService = {
  submitContact: async (data) => {
    return await api.post('/contact', data)
  },

  getAllContacts: async () => {
    return await api.get('/contact')
  }
}