<template>
  <div class="card">
    <div class="card-body text-center">
      <img class="mb-2 small-img info-img" :src="profile.picture" :alt="'No images found'">
      <h4 class="card-title">
        {{ profile.name }}
      </h4>
      <p class="card-text">
        {{ profile.email }}
        {{ profile.class }}
        {{ profile.bio }}
      </p>
      <div class="w-100 d-flex justify-content-end" v-if="account.id === profile.id">
        <button type="button" class="btn btn-danger h-25" @click.stop="edit">
          X Edit Profile
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { profileService } from '../services/ProfileService'
import { accountService } from '../services/AccountService'

export default {
  name: 'InfoCard',
  props: {
    currentProfile: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      profile: computed(() => AppState.profile),
      async getbyId() {
        try {
          await profileService.getbyId(props.currentProfile.id)
        } catch (error) {
          logger.log(error, 'error')
        }
      },
      account: computed(() => AppState.account),
      async getAccount() {
        try {
          await accountService.getAccount()
        } catch (error) {
          logger.log(error, 'error')
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.line{
 border-bottom: 2px solid black
}
.small-img{
  min-width: 150px;
  max-width: 150px;
  height: 150px;
  object-fit: cover;
}

.info-img {
  border-radius: 50%;
  height: 150px;
  width: 200px;
}
</style>
