<template>
	<div class="search-wrap">
		<van-search placeholder="搜索银行" v-model="bankname" background="#fff" />
	</div>
</template>

<script>
export default {
	data () {
		return {
			bankname: ''
		}
	},
	methods: {
	}
}
</script>

<style lang="scss">
.search-wrap {
	.van-search__content {
		height: 66px;
		align-items: center;
	}
}
</style>
