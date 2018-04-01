<template lang="pug">
v-app#app
	v-toolbar(color='purple', dark)
		v-toolbar-title
			a(href='.').mainlink CSON - JSON Converter
	v-content
		Home
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
