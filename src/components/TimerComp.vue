<template>
  <h3>Timer</h3>
  <p>
    <input type="text" placeholder="hours" v-model="hours">
    <input type="text" placeholder="minutes" v-model="minutes">
    <input type="text" placeholder="seconds" v-model="seconds"><br>
    <button @click="start">Start</button> || <button @click="stop">Stop</button>
  </p>
  <!-- <p>
    <span v-if="hours != null">{{ hours }}</span><span v-else>0</span>
    : <span v-if="minutes != null">{{ minutes }}</span><span v-else>0</span>
    : <span v-if="seconds != null">{{ seconds }}</span><span v-else>0</span>
  </p> -->
</template>

<script>
export default {
    name: 'TimerComp',
    data() {
      return {
        hours: null,
        minutes: null,
        seconds: null,
        intervalId: null,
        totalSeconds: 0
      }
    },
    methods: {
      start() {
        clearInterval(this.intervalId)

        // to make sure it's all '0'
        if (this.hours == null) {
          this.hours = 0
        } else {
          let h = this.hours*3600
          this.totalSeconds = this.totalSeconds + h
        }
        if (this.minutes == null) {
          this.minutes = 0
        } else {
          let m = this.minutes*60
          this.totalSeconds = this.totalSeconds + m
        }
        if (this.seconds == null) {
          this.seconds = 0
        } else {
          this.totalSeconds = this.totalSeconds + this.seconds
        }


        this.intervalId = setInterval(() => {
          this.totalSeconds = this.totalSeconds - 1
          console.log(this.totalSeconds);
          if(this.totalSeconds == 0) {
            // finished msg
            console.log(this.totalSeconds);
            clearInterval(this.intervalId)
          }
        }, 1000)
      },
      stop() {
        // updated time
        // cleared totalSeconds and interval
        this.totalSeconds = 0
        clearInterval(this.intervalId)
      }
    }

}
</script>

<style>

</style>