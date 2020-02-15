<template>
	<div>
        <img :src="acfData.image.url" />
	</div>
</template>

<script>
export default {
	props: ['acfData']
}
</script>