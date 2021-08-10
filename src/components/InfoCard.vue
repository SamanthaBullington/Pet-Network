<template>
  <div class="card">
    <div class="card-body text-center" v-if="profile">
      <img class="mb-2 small-img info-img" :src="profile.picture">
      <h4 class="card-title">
        {{ profile.name }}
      </h4>
      <p class="card-text">
        {{ profile.email }}
        {{ profile.class }}
        {{ profile.bio }}
      </p>
      <!-- <div class="action hoverable d-flex justify-content-end pr-5" v-if="account.id === profile.id" data-toggle="modal" data-target="#edit-profile" @click.stop="edit">
        <span>X Edit Profile</span>
      </div> -->
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
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: #972699;
}
.img-icon {
  border-radius: 50%;
}
</style>
