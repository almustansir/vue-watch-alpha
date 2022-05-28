<template>
  <h3>Home</h3>
  <p>
        <router-link to="/watch" class="btn watch-btn">Watch</router-link>
        <router-link to="/stopwatch" class="btn stopwatch-btn">Stop Watch</router-link>
        <router-link to="/timer" class="btn timer-btn">Timer</router-link>
  </p>
</template>

<script>
export default {
    name: 'HomeComp'
}
</script>

<style>

</style>