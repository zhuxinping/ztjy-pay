<template>
	<div class="ali-oauth-sur">
        <div class="ali-oauth-sur-wrap">
            <img src="../../../assets/images/icon_empower.png" />
            <h5>恭喜您，退费授权成功</h5>
            <p>您可以现在使用退费功能了！</p>
        </div>
	</div>
</template>

<script>
export default {
	name: 'aliOauthSur',
	data () {
		return {
		}
	},
	created () {
	},
	methods: {
	}
}
</script>

<style scoped lang="scss">
@import '../../../assets/css/parent.scss';
.ali-oauth-sur {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #fff;
    .ali-oauth-sur-wrap {
        text-align: center;
        img {
						width: 240px;
        }
        h5 {
						font-size: 25px;
						padding-top: 23px;
            color: #333;
            font-weight: normal;
        }
        P {
						padding-top: 15px;
						font-size: 21px;
            color: #8e8d9d;
        }
    }
}
</style>
