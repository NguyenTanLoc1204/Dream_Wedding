import api from './api'

export const galleryService = {
  getAllGallery: async (category = null) => {
    const url = category ? `/gallery?category=${category}` : '/gallery'
    return await api.get(url)
  },

  getGalleryByCategory: async (category) => {
    return await api.get(`/gallery/${category}`)
  }
}
