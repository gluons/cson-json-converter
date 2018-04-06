<template lang="pug">
v-layout(
	id='home'
	row
	wrap
	fill-height
	align-center
	justify-space-around
)
	v-snackbar(v-model='snackbar', bottom, multi-line, color='red darken-4')
		| {{ errMsg }}
		v-btn(dark, flat, @click.native='closeSnackbar') Close
	v-flex(xs5).flex-col
		CodeTextArea(
			label='CSON',
			v-model='csonContent'
			mode='text/coffeescript'
		)
	v-flex(xs1).flex-col
		v-layout(column, fill-height, justify-center, align-center)
			v-flex(xs1): v-tooltip(top)
				v-btn(
					fab
					large
					dark
					color='pink'
					slot='activator'
					@click='convertCSON2JSON'
				)
					v-icon(dark) keyboard_arrow_right
				span Convert CSON to JSON
			v-flex(xs1): v-tooltip(bottom)
				v-btn(
					fab
					large
					dark
					color='pink'
					slot='activator'
					@click='convertJSON2CSON'
				)
					v-icon(dark) keyboard_arrow_left
				span Convert JSON to CSON
	v-flex(xs5).flex-col
		CodeTextArea(
			label='JSON',
			v-model='jsonContent'
			mode='application/json'
			use-tab
		)
</template>

<script>
import cson2json from '../lib/cson2json';
import json2cson from '../lib/json2cson';

export default {
	name: 'Home',
	data() {
		return {
			csonContent: '',
			jsonContent: '',
			snackbar: false,
			errMsg: ''
		};
	},
	methods: {
		showError(msg) {
			this.errMsg = `Error: ${msg}`;
			this.snackbar = true;
		},
		convertCSON2JSON() {
			try {
				if (!this.csonContent) {
					throw new Error('CSON code is empty.');
				}
				this.jsonContent = cson2json(this.csonContent);
			} catch (err) {
				this.showError(err.message);
			}
		},
		convertJSON2CSON() {
			try {
				if (!this.jsonContent) {
					throw new Error('JSON code is empty.');
				}
				this.csonContent = json2cson(this.jsonContent);
			} catch (err) {
				this.showError(err.message);
			}
		},
		closeSnackbar() {
			this.snackbar = false;
			this.errMsg = '';
		}
	}
};
</script>

<style scoped>
.flex-col {
	height: 95%;
}
</style>
