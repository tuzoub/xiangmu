<template>
	<div class="user">
		<ul class="oul">
			<img src="../../../imgs/back.png" alt="" @click="clickme" />
			<span>我的走途</span>
		</ul>
		<div class="userid">
			<img src="http://m.zoutu.com/res/img/ae27f0abef.png" alt="" />
			<div style="color: white;margin-left: 0.5rem;">
				<p style="font-weight: bold;font-size: 20px;">136****2275</p>
				<p>13615162275</p>
			</div>
		</div>
		<div class="useras">
			<div>
				<span style="color: rgb(84, 97, 117);font-size: 15px;float: left;">我的信息</span>
				<span style="font-size: 12px;color: rgb(157, 170, 184);float: right;margin-right: 10px;"> 个人信息&nbsp;&nbsp;> </span>
			</div>
			<div>
				<span style="color: rgb(84, 97, 117);font-size: 15px;float: left;">常用信息</span>
				<span style="font-size: 12px;color: rgb(157, 170, 184);float: right;margin-right: 10px;"> 常用旅客/手机号&nbsp;&nbsp;> </span>
			</div>
			<div>
				<span style="color: rgb(84, 97, 117);font-size: 15px;float: left;">我的收藏</span>
				<span style="font-size: 12px;color: rgb(157, 170, 184);float: right;margin-right: 10px;"> 收藏线路/游玩方式&nbsp;&nbsp;> </span>
			</div>
			<div>
				<span style="color: rgb(84, 97, 117);font-size: 15px;float: left;">我的订单</span>
				<span style="font-size: 12px;color: rgb(157, 170, 184);float: right;margin-right: 10px;">> </span>
			</div>
			<div>
				<span style="color: rgb(84, 97, 117);font-size: 15px;float: left;">已支付</span>
				<span style="font-size: 12px;color: rgb(157, 170, 184);float: right;margin-right: 10px;">;> </span>
			</div>
			<div>
				<span style="color: rgb(84, 97, 117);font-size: 15px;float: left;">未支付</span>
				<span style="font-size: 12px;color: rgb(157, 170, 184);float: right;margin-right: 10px;">> </span>
			</div>
		</div>
		<button class="btn"> 退出登录 </button>
		<Tabar></Tabar>
	</div>
</template>

<script>
	import Tabar from '../tabar/tabars';
	export default {
		name: 'user',
		data: function() {
			return {

			}
		},
		components: {
			Tabar
		},
		methods: {
			clickme: function() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.oul {
		background-color: white;
		width: 100%;
		height: 65px;
		line-height: 65px;
		position: relative;
	}
	
	.oul>img {
		width: 10px;
		height: 18px;
		margin-left: 20px;
	}
	
	.oul span {
		color: rgb(84, 97, 117);
		font-size: 20px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	
	.userid {
		width: 100%;
		height: 12rem;
		display: flex;
		align-items: center;
		background-image: url(http://m.zoutu.com/res/img/bfa4de464b.png);
	}
	
	.userid img {
		margin-left: 1.5rem;
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		background: white;
	}
	
	.useras {
		width: 90%;
		overflow: hidden;
		float: right;
		padding-bottom: 34px;
	}
	
	.useras>div {
		height: 40px;
		width: 100%;
		background: white;
		line-height: 40px;
		border-bottom: 0.5px solid #ddd;
	}
	
	.btn {
		margin: auto;
		display: block;
		width: 120px;
		height: 37px;
		line-height: 37px;
		color: white;
		border-radius: 5%;
		font-size: 16px;
		outline: none;
		background: rgb(255, 115, 97);
	}
</style>