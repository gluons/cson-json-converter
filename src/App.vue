<template lang="pug">
v-app#app
	v-toolbar(color='purple', dark)
		v-toolbar-title
			a(href='.').mainlink CSON - JSON Converter
	v-content
		Home
	v-footer(color='purple', dark, :height='60', app): v-layout(fill-height, align-center)
		v-flex(xs12).text-xs-center
			div Made with ❤️ by #[footer-link(url='https://gitlab.com/gluons') Saran Tanpituckpong]
			div: footer-link(url='https://gitlab.com/gluons/cson-json-converter') View on GitLab
</template>

<script>
import Home from './views/Home';

export default {
	name: 'App',
	components: {
		Home
	}
};
</script>

<style scoped>
a.mainlink {
	color: inherit;
	text-decoration: none;
}
</style>
