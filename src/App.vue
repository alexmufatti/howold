<template>
  <div id="app">
    <howold class="person" v-bind:person="fiammi" v-bind:now="now"></howold>
    <howold class="person" v-bind:person="alice" v-bind:now="now"></howold>
  </div>
</template>

<script>
import howold from './components/howold'
import moment from 'moment'

export default {
  name: 'App',
  components: {
    howold
  },
    data: function () { return {
        fiammi: { date: new moment('2015-12-23 17:58:00', 'YYYY-MM-DD HH:mm:SS'), name: 'Fiammi' },
        alice: { date: new moment('2020-5-22 16:58:00', 'YYYY-MM-DD HH:mm:SS'), name: 'Alice' },
        now: new moment()
    }
  },
    mounted: function () {
      window.setInterval(() => { this.now = new moment() }, 1000)
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .person {
    width: 50%;
    display: inline-block;
  }
</style>
