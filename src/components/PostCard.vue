<template>
  <div class="line w-100 d-flex align-items-center">
    <small class="d-flex ml-3">
      <router-link :to="{ name: 'Profile', params: {id:post.creatorId}}" class="nav-link">
        <img class="mb-2 small-img img-icon" :src="post.creator.picture" :alt="'No images found'">{{ post.creator.name }}
      </router-link>
    </small>
    <p>
      {{ post.body }}
    </p>
    <div class="w-100 d-flex justify-content-end" v-if="account.id === post.creatorId">
      <button type="button" class="btn btn-danger h-25" @click.stop="destroy">
        X
      </button>
    </div>
    <div class="w-100 d-flex justify-content-end">
      <span class="likes" v-if="posts">
        {{ post.likes || 'No one likes this' }}
      </span>
    </div>
    <!-- <PostModal :post="post" /> -->
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async destroy() {
        try {
          if (await Pop.confirm()) {
            await postsService.destroy(props.post.id)
            Pop.toast('Deleted!', 'Success!')
          }
        } catch (error) {
          Pop.toast(error, 'error')
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
.img-icon {
  border-radius: 50%;
  height: 150px;
  width: 100px;
}
</style>
