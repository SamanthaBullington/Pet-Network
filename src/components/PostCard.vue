<template>
  <div class="card card-style">
    <div class="row line w-100 align-items-center">
      <small class="col-2 d-flex ml-3">
        <router-link :to="{ name: 'Profile', params: {id:post.creatorId}}" class="nav-link">
          <img class="mb-2 small-img" :src="post.creator.picture" :alt="'No images found'">{{ post.creator.name }}
        </router-link>
      </small>
      <p class=" col-6 body-wrap">
        {{ post.body }}
      </p>
      <div class="col-1 justify-content-end">
        <div class="w-50 h-50 justify-content-end btn btn-danger mb-5" v-if="account.id === post.creatorId" button type="button" @click.stop="destroy">
          X
        </div>
        <br>
        <span class="likes">
          {{ post.likes.length || 'No one likes this' }}
          <span class="mdi mdi-heart-outline"></span>
        </span>
      </div>
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
            Pop.toast('error', 'success')
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

.body-wrap{
overflow-wrap: auto;
}
.card-style{
  min-width: 100em;
}
.line{
 border-bottom: 1px solid black
}
.small-img{
  border-radius: 50%;
  min-width: 150px;
  max-width: 150px;
  height: 150px;
  object-fit: cover;
}
</style>
