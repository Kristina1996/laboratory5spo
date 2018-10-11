<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <HelloWorld/>
    <button @click="changeHandler">Publish</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import VueMqtt from 'vue-mqtt';

export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted () {
		this.$mqtt.subscribe('vlsu/sensorkris')
    },
	methods: {
		// обработчик выбора цвета (публикует его в топик)
		changeHandler: function(event) {
			this.$mqtt.publish('vlsu/sensorkris', this.color);
	  }
	},
	data () {
		return {
		  color: '#A463BF'
		}
	},
	mqtt: {
		// обработчик сработает когда в топик опубликовали значение
		'vlsu/sensorkris'(data, topic) {
			console.log(topic + ': ' + String.fromCharCode.apply(null, data))
		}
	}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
