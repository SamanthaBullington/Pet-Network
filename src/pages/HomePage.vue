<template>
  <div class="home container">
    <div class="row">
      <div class="col-9">
        <PostThread :posts="posts" />
      </div>
      <div class="col-3">
        <!-- <Ad /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
// import { profileService } from '../services/ProfileService'

export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getAll()
        // await profileService.getById(AppState.user.id)
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

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
