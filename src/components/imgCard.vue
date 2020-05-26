<template>
	<div>
		<h5 class="title">{{title}}</h5>
		<div class="add-pic">
			<span v-for="(item, index) in src" :key="index">
				<img :src="item" class="link-pic">
				<input type="hidden" name="legalCertificateUrl" value="">
			</span>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		src: Array
	}
}
</script>

<style lang="scss">
	h5 {
		&.title {
			padding: 20px 30px 6px 30px;
			font-size: 28px;
			line-height: 44px;
			color: #818D9D;
			margin-top: 10px;
			margin-bottom: 10px;
			font-weight: 400;
		}
	}
	.add-pic {
		padding: 35px;
		background-color: #fff;
		text-align: center;
		img {
			width: 240px;
			height: 170px;
			margin: 0 20px;
		}
	}
</style>
