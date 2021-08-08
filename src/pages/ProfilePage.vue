<template>
  <div class="profile container-fluid">
    <PostThread :posts="posts" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService'
import { profileService } from '../services/ProfileService'
import { accountService } from '../services/AccountService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'

export default {
  name: 'ProfilePage',
  setup() {
    logger.log('this is the account' + JSON.stringify(AppState.account))
    const router = useRoute()
    onMounted(async() => {
      try {
        await postsService.getAll({ creatorId: router.params.id })
        await profileService.getById(router.params.id)
        await accountService.getAccount(router.params.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
