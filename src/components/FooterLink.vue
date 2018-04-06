<template lang="pug">
a(:href='url', target='_blank').yellow--text
	slot
</template>


<script>
export default {
	name: 'FooterLink',
	props: {
		url: {
			type: String,
			required: true
		}
	}
};
</script>
