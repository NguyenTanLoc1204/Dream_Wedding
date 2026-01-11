import api from './api'

export const blogService = {
  getAllBlogs: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString()
    return await api.get(`/blog?${queryString}`)
  },

  getBlogBySlug: async (slug) => {
    return await api.get(`/blog/${slug}`)
  }
}