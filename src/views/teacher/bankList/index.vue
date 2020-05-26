<template>
	<div class="mui-content" @click="unfocus">
		<div id="list" class="mui-indexed-list" style="height: 667px;">
			<Search ref="search"/>
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
				<van-cell v-for="item in list" :key="item" :title="item" />
			</van-list>
		</div>
	</div>
</template>

<script>
import Search from '@/components/search'

export default {
	components: { Search },
	data() {
		return {
			list: [],
			loading: false,
			finished: false
		}
	},
	methods: {
		onLoad () {
			// 异步更新数据
			setTimeout(() => {
				for (let i = 0; i < 10; i++) {
					this.list.push(this.list.length + 1)
				}
				// 加载状态结束
				this.loading = false

				// 数据全部加载完成
				if (this.list.length >= 40) {
					this.finished = true
				}
			}, 500)
		},
		unfocus() {
			if (!this.$refs['search'].bankname) {
				this.$refs['search'].selected = false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.mui-content {
	background: #fff;
}
</style>
