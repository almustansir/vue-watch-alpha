<template>
  <h3>Stop Watch</h3>
  <p>
    <button @click="start">Start</button> || <button @click="stop">Stop</button> || <button @click="reset">Reset</button>
  </p>
  <p>{{ hours }}:{{ minutes }}:{{ seconds }}</p>
</template>

<script>
export default {
    name: "StopWatchComp",
    data() {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        intervalId: null
      }
    },

    methods: {
      start() {
        // defines 'intervalId'
        clearInterval(this.intervalId)

        // increment starts
        this.intervalId = setInterval(()=>{

          // seconds increment
          this.seconds = this.seconds + 1

          // minutes increment
          if (this.seconds == 60) {
            this.seconds = 0
            this.minutes = this.minutes + 1
          }

          // hours increment
          if (this.minutes == 60) {
            this.minutes = 0
            this.hours = this.hours + 1
          }
        }, 1000)
      },
      stop() {
        // interval stops
        clearInterval(this.intervalId)
      },
      reset() {
        // timer resets
        this.hours = 0
        this.minutes = 0
        this.seconds = 0

        // increment stops
        clearInterval(this.intervalId)
      }
    }
}
</script>

<style>

</style>