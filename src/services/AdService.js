import { api } from './AxiosService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'

class AdService {
  async getAll() {
    const res = await api.get('api/ads')
    logger.log(res.data)
    AppState.ads = res.data
  }
}

export const adService = new AdService()
