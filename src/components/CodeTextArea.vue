<template lang="pug">
v-card(color='pink lighten-5', raised, height='100%')
	v-container(fill-height)
		v-text-field(
			:label='label'
			color='purple accent-3'
			textarea
			no-resize
			:value='value'
			@input='onInput'
		).txt-area-full-height
</template>

<script>
export default {
	name: 'CodeTextArea',
	props: {
		label: {
			type: String,
			required: true
		},
		value: {
			type: String,
			default: ''
		}
	},
	methods: {
		onInput(newValue) {
			this.$emit('input', newValue);
		}
	}
};
</script>

<style lang="scss">
.txt-area-full-height {
	&, .input-group__input, textarea {
		height: 100%;
	}
}
</style>
