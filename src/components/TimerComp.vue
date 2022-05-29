<template>
  <h3>Timer</h3>
  <p>
    <!-- <input type="text" placeholder="minutes" v-model="minutes"> -->
    <input type="text" placeholder="seconds" v-model="seconds"><br>
    <button @click="start">Start</button> || <button @click="stop">Stop</button>
  </p>
  <p v-if="msg">Time's Up!</p>
</template>

<script>
export default {
    name: 'TimerComp',
    data() {
      return {
        // minutes: null,
        seconds: null,
        intervalId: null,
        totalSeconds: 0,
        msg: false
      }
    },
    methods: {
      start() {
        clearInterval(this.intervalId)

        // to make sure it's all '0'
        if (this.seconds == null) {
          this.seconds = 0
        } else {
          this.totalSeconds = this.totalSeconds + this.seconds
        }


        this.intervalId = setInterval(() => {
          this.totalSeconds = this.totalSeconds - 1
          this.seconds = this.totalSeconds
          console.log(this.totalSeconds);
          if(this.totalSeconds == 0) {
            // finished msg
            this.msg = true
            console.log(this.totalSeconds);
            clearInterval(this.intervalId)
          } else {
            this.msg = false
          }
        }, 1000)
      },
      stop() {
        // updated time
        // cleared totalSeconds and interval
        this.totalSeconds = this.seconds
        this.totalSeconds = 0
        clearInterval(this.intervalId)
      }
    }

}
</script>

<style>

</style>