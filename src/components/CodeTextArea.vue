<template lang="pug">
v-card(color='pink lighten-5', raised, height='100%').code-textarea
	v-container(fill-height)
		v-layout(column)
			v-flex(md1): strong.label {{ label }}:
			v-flex(md11)
				codemirror(
					:options='options'
					:value='value'
					@input='onInput'
				)
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
		},
		mode: {
			type: String,
			default: 'text/plain'
		},
		useTab: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			options: {
				mode: this.mode,
				indentWithTabs: this.useTab
			}
		};
	},
	methods: {
		onInput(newValue) {
			this.$emit('input', newValue);
		}
	}
};
</script>

<style lang="scss">
.code-textarea {
	strong.label {
		vertical-align: middle;
	}
	.vue-codemirror {
		height: 100%;

		.CodeMirror {
			min-height: 100%;
		}
		&, .CodeMirror {
			width: 100%;
		}
	}
}
</style>
