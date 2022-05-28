<template>
  <h3>Timer</h3>
  <p>
    <input type="text" placeholder="hours" v-model="hours"><br>
    <input type="text" placeholder="minutes" v-model="minutes"><br>
    <input type="text" placeholder="seconds" v-model="seconds"><br>
    <button @click="start">Start</button>
  </p>
  <p>
    <span v-if="hours != null">{{ hours }}</span><span v-else>0</span>
    : <span v-if="minutes != null">{{ minutes }}</span><span v-else>0</span>
    : <span v-if="seconds != null">{{ seconds }}</span><span v-else>0</span>
  </p>
</template>

<script>
export default {
    name: 'TimerComp',
    data() {
      return {
        hours: null,
        minutes: null,
        seconds: null,
        intervalId: null
      }
    },
    methods: {
      start() {
        clearInterval(this.intervalId)
        setInterval(() => {
          this.seconds = this.seconds - 1
          if (this.seconds == 0) {
            console.log('done')
            stop()
            clearInterval(this.intervalId)
          }
        }, 1000)
      },
      stop() {
        clearInterval(this.intervalId)
      }
    }

}
</script>

<style>

</style>