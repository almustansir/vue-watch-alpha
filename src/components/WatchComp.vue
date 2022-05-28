<template>
  <h3>Watch</h3>
  <p>{{ localTime }}</p>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
// import { onMounted } from '@vue/runtime-core'

export default {
    name: 'WatchComp',
    data() {
      return {
        localTime: null
      }
    },

    mounted() {
      setInterval(() => {
          let time = new Date()
          this.localTime = time.toLocaleTimeString()
        }, 1000)
    }
}
</script>

<style>

</style>