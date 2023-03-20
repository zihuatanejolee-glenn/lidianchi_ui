<template>
	<view class="page-c">

		<!-- 顶部自定义导航 -->
		<tn-nav-bar :isBack="false" :bottomShadow="false" backgroundColor="none">
			<view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left" @click="tn('/minePages/message')">
				<view class="custom-nav__back">
					<text class="tn-text-bold tn-text-xl tn-color-black">每日推荐</text>
				</view>
			</view>
		</tn-nav-bar>

		<!-- 每日推荐 -->
		<view class="swiper tn-margin-left tn-margin-right" style="height:100vh"
			:style="{paddingTop: vuex_custom_bar_height + 'px'}">
			<tn-stack-swiper :list="list" direction="vertical" height="100%" :switchRate="20" :scaleRate="0.05"
				:translateRate="7.2"></tn-stack-swiper>
		</view>
		<!-- 效果二 -->
		<!-- <view class="swiper tn-margin-left tn-margin-right" style="height:85vh" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <tn-stack-swiper ref="stackSwiper" :list="list" direction="vertical" height="100%" :switchRate="10" :scaleRate="0.20" :translateRate="6.5" :autoplay="true"></tn-stack-swiper>
    </view> -->



		<!-- <view class='tn-tabbar-height'></view> -->

	</view>
</template>

<script>
	export default {
		name: 'PagesC',
		data() {
			return {
				// swiper内容
				list: [],
				autoplay: false
			}
		},
		onReady() {
			this.$nextTick(() => {
				this.initSwiperContainer()
			})
		},
		onShow() {
			this.autoplay = true
		},
		onHide() {
			this.autoplay = false
		},
		onLoad() {
			this.initPhotos()
		},
		methods: {
			// 跳转
			tn(e) {
				uni.navigateTo({
					url: e,
				});
			},
			// 初始化轮播图容器
			initSwiperContainer() {
				// 获取底部tabbar信息
				this._tGetRect('.tabbar').then((res) => {
					console.log("底部tabbar高度为：" + res.height)
					if (!res.height) {
						setTimeout(() => {
							this.initSwiperContainer()
						}, 10)
						return
					}
					// 获取系统信息
					const systemInfo = uni.getSystemInfoSync()
					this.swiperContainerHeight = systemInfo.safeArea.height - res.height - 10
				})
			},
			initPhotos(){
				uni.request({
					url: 'https://www.99db.cn/outapi/li/photo',
					method: 'POST',
					data:{
						info: ''
					},
					success: (res) => {
						var photovos = res.data.data
						// 2.这里把视频添加到视频列表
						for (let i = 0; i < photovos.length; i++) {
							this.list.push(photovos[i]);
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-c {
		max-height: 100vh;
	}

	/* 自定义导航栏内容 start */
	.custom-nav {
		height: 100%;

		&__back {
			margin: auto 30rpx;
			font-size: 40rpx;
			margin-right: 10rpx;
			flex-basis: 5%;
			width: 100rpx;
			position: absolute;
		}
	}

	/* 自定义导航栏内容 end */

	/* 底部安全边距 start*/
	.tn-tabbar-height {
		min-height: 20rpx;
		height: calc(40rpx + env(safe-area-inset-bottom) / 2);
		height: calc(40rpx + constant(safe-area-inset-bottom));
	}

	/* 轮播图 start */
	.swiper {
		border-radius: 10rpx;
		overflow: hidden;
	}

	/* 轮播图 end */

	/* 底部固定按钮*/
	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: calc(130rpx + env(safe-area-inset-bottom));
		z-index: 1024;
	}

	/* 图标容器4 start */
	.tn-cool-color-icon4 {
		// background-image: -webkit-linear-gradient(135deg, #ED1C24, #FECE12);
		// background-image: linear-gradient(135deg, #ED1C24, #FECE12);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		text-fill-color: transparent;
	}

	.icon4 {
		&__item {
			width: 30%;
			background-color: #FFFFFF;
			border-radius: 10rpx;
			padding: 30rpx;
			margin: 20rpx 10rpx;
			transform: scale(1);
			transition: transform 0.3s linear;
			transform-origin: center center;

			&--icon {
				width: 110rpx;
				height: 110rpx;
				font-size: 55rpx;
				border-radius: 50%;
				margin-bottom: 18rpx;
				position: relative;
				z-index: 1;
				background-color: rgba(255, 255, 255, 0.8);
				backdrop-filter: blur(20rpx);
				-webkit-backdrop-filter: blur(20rpx);
				box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
				// box-shadow: 0px 10px 30px rgba(70,23,129, 0.12),
				//   0px -8px 40px rgba(255, 255, 255, 1),
				//   inset 0px -10px 10px rgba(70,23,129, 0.05),
				//   inset 0px 10px 20px rgba(255, 255, 255, 1);
			}
		}
	}
</style>
