<template>
	<div>
		<img src="/static/image/pay/pic_o_1.png" />
		<img src="/static/image/pay/pic_o_2.png" />
		<img src="/static/image/pay/pic_o_3.png" />
		<a id="addlink" @click="applyNow">立即申请</a>
	</div>
</template>

<script>

export default {
	name: 'applyIndex',
	data() {
		return {

		}
	},
	methods: {
		applyNow() {
			console.log(11)
		}
	}
}
</script>
<style lang="scss">
	img {
		display: block;
		width: 100%;
	}
	#addlink {
		background-color: #ff5252;
		color: #fff;
		font-size: 38px;
		display: block;
		padding: 30px 0;
		position: fixed;
		bottom: 30px;
		width: 90%;
		text-align: center;
		left: 5%;
		border-radius: 10px;
		line-height: 48px;
	}
</style>
