import { api } from './AxiosService'
import { convertToQuery } from '../utils/Query'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'

class PostsService {
  async getAll(query = {}) {
    const res = await api.get('api/posts' + convertToQuery(query))
    logger.log(res.data)
    AppState.posts = res.data
  }

  async createPost(newPost) {
    await api.post('api/posts', newPost)
    await this.getAll()
  }

  async destroy(id) {
    await api.delete('api/posts/' + id)
    AppState.posts.posts = AppState.posts.posts.filter(p => p.id !== id)
  }
}

export const postsService = new PostsService()
