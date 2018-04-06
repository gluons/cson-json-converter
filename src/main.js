import Vue from 'vue';
import Vuetify from 'vuetify';
import VueCodemirror from 'vue-codemirror';

// Codemirror
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/coffeescript/coffeescript.js';

import App from './App.vue';
import * as components from './components';

// Stylesheet
import 'vuetify/dist/vuetify.min.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';

// Plugin
Vue.use(Vuetify);
Vue.use(VueCodemirror, {
	options: {
		theme: 'dracula',
		lineNumbers: true
	}
});

// Component
Object.keys(components).forEach(key => {
	let component = components[key];
	Vue.component(component.name, component);
});

new Vue({
	el: '#app',
	render: h => h(App)
});
