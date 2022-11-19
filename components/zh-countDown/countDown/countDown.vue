<template>
	<view class="">
		<view class="box">
			<view class="circle" :style="[circle]">
				<view class="left" :style="[size]">
					<view class="left-circle"
						:style="[{'animation':stycircle1},{	'animation-delay': animationDelay },size,leftCircle]">
					</view>
				</view>
				<view class="right" :style="[size]">
					<view class="right-circle" :style="[{'animation':stycircle2},size,rightcircle]"></view>
				</view>
				<view class="inner" :style="[inner]">
					<slot></slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	/*
	 * countDown 圆环计时器，不使用canvas,仅css实现,圆环中间支持自定义添加内容
	 *  @property {Number} times 时间 (单位s)
	 * @property {Number} widths 圆环的总体大小 (单位upx)
	 * @property {Number} breadth 圆环中间区域的大小 (单位upx)
	 * @property {activeColor} activeColor 圆环中间区域的背景色
	 * @property {String} defaultColor 圆环中间区域默认的背景颜色
	 */
	export default {
		props: {
			times: {
				type: Number,
				default: 10
			},
			widths: {
				type: Number,
				default: 200
			},
			breadth: {
				type: Number,
				default: 30
			},
			activeColor: {
				type: String,
				default: '#01B862'
			},
			defaultColor: {
				type: String,
				default: '#EDF0F0'
			},
		},
		data() {
			return {
				stycircle1: {},
				stycircle2: {},
				animationDelay: 0,
				timer: null,
				timeAll: 0, //时间
			}
		},
		destroyed() { //销毁后
			clearInterval(this.timer)
		},
		mounted() {},

		methods: {
			start() { //开始事件
				this.$nextTick(() => {
					if (this.times < 1) {
						uni.showToast({
							title: '时间最少1s',
							icon: 'none',
							duration: 1500,
							mask: true
						});
					} else {
						clearInterval(this.timer)
						let time = Number((this.times / 2).toFixed(2))
						this.stycircle2 = `progross2 ${time}s linear forwards`
						this.animationDelay = `${time}s`
						this.stycircle1 = `progross1 ${time}s linear forwards`
						this.timeAll = JSON.parse(JSON.stringify(this.times))
						this.timer = setInterval(() => {
							this.timeAll--
							if (this.timeAll < 1) {
								this.$emit('endTime')
								clearInterval(this.timer)
							}
						}, 1000)
					}
				})
			},
			reset() { //重置
				console.log('重置');
				this.stycircle2 = `progross 0s linear forwards`
				this.stycircle1 = `progross 0s linear forwards`
			},
		},
		computed: {
			circle() {
				const {
					widths,
					defaultColor
				} = this
				return {
					width: `${widths}rpx`,
					height: `${widths}rpx`,
					background: defaultColor
				}
			},
			size() {
				const {
					widths
				} = this
				return {
					width: `${widths /2}rpx`,
					height: `${widths}rpx`
				}
			},
			leftCircle() {
				const {
					widths,
					activeColor
				} = this
				return {
					borderTopLeftRadius: `${widths}rpx`,
					borderBottomLeftRadius: `${widths}rpx`,
					background: activeColor
				}
			},
			rightcircle() {
				const {
					widths,
					activeColor
				} = this
				return {
					borderTopRightRadius: `${widths}rpx`,
					borderBottomRightRadius: `${widths}rpx`,
					background: activeColor
				}
			},
			inner() {
				const {
					widths,
					breadth
				} = this
				return {
					width: `${widths - breadth}rpx`,
					height: `${widths - breadth}rpx`,
				}
			}
		},
		watch: {

		}
	}
</script>

<style>
	.circle {
		border-radius: 50%;
		position: relative;
	}

	.left,
	.right {
		position: absolute;
		overflow: hidden;
	}

	.left-circle {
		transition: all .5s;
		transform-origin: right center;
		transform: rotate(180deg);
	}

	.right-circle {
		transition: all .5s;
		transform-origin: left center;
		transform: rotate(-180deg);
	}

	@keyframes progross1 {
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes progross2 {
		to {
			transform: rotate(0deg);
		}
	}

	.right {
		right: 0;
	}

	.inner {
		background: #fff;
		position: absolute;
		z-index: 999;
		border-radius: 100%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
