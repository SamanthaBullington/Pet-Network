<template>
  <div class="card">
    <div class="card-body text-center">
      <img class="mb-2 small-img info-img" @click="location.href = ads.linkURL" :src="ads.tall" :alt="'No images found'">
      <h4 class="card-title">
        {{ ads.title }}
      </h4>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { adService } from '../services/AdService'

export default {
  name: 'Ad',
  props: {
    ad: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      profile: computed(() => AppState.ads),
      async getAll() {
        try {
          await adService.getAll()
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

.info-img {
  border-radius: 50%;
  height: 150px;
  width: 200px;
}
</style>
