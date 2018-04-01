import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App.vue';
import * as components from './components';

// Stylesheet
import 'vuetify/dist/vuetify.min.css';

// Plugin
Vue.use(Vuetify);

// Component
Object.keys(components).forEach(key => {
	let component = components[key];
	Vue.component(component.name, component);
});

new Vue({
	el: '#app',
	render: h => h(App)
});
