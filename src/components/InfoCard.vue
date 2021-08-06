<template>
  <div class="my-1 col-md-8 d-flex align-items-start p-2 bg-light">
    <div class="d-flex flex-column">
      <div class="card-body">
        <img class="mb-2 small-img" :src="account.picture" :alt="'No image found'">
        <h4 class="">
          {{ account.name }}
        </h4>
        <p class="">
          {{ account.bio }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { accountService } from '../services/AccountService'
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
            await accountService.destroy(props.post.id)
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
</style>
