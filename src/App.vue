<template>
  <main>
    <div class="col-3 p-1">
      <InfoCard />
    </div>
    <div class="col-9 p-1">
      <Navbar />
      <router-view />
    </div>
  </main>
  <footer>
    <div class="text-light text-center p-4">
      Made with 🍷 by Samantha Bullington
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

footer{
  background-color: #972699;
}
col {
  padding: 0;
}
</style>
