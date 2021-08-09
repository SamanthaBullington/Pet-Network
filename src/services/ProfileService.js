// imports
// name/class (ProfileService)
// methods
// get profile by id
// get profile by searchbar
// export
import { api } from './AxiosService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
class ProfileService {
  async getById(id) {
    const res = await api.get('api/profiles/' + id)
    logger.log(res.data)
    AppState.profile = res.data
  }

  // async edit(id) {
  //   await api.put('account')
  // }
}

export const profileService = new ProfileService()
