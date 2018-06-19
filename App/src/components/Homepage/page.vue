<template>
	<div class="heads">
		<div class="tit">
			<img class="back" src="../../../imgs/back.png" alt="" @click="go()">
			<div class="text">详情</div>
			<img @click="user()" class="user" src="../../../imgs/download-5.png" alt="">
		</div>
		<ul class="flexd">
			<li>
				<img src="../../../imgs/download-7.png" alt="" /><span>纯玩游</span>
			</li>
			<li>
				<img src="../../../imgs/download-8.png" alt=""><span>半自助游</span>
			</li>
			<li>
				<img src="../../../imgs/download-9.png" alt=""><span>VIP定制</span>
			</li>
			<li>
				<img src="../../../imgs/download-10.png" alt=""><span>主题游</span>
			</li>
		</ul>
		<div style='background: white;'>
			<img class="headimg" :src="data.t_img" />
			<p class="op">{{data.t_name}}</p>
			<p style="color: rgb(255, 115, 98);padding-top: 1rem;margin-left: 0.5rem;">¥<span style="font-size:2rem;">{{data.t_price}}</span>起</p>
			<p style="color: gray;padding-top: 0.4rem;margin-left: 0.5rem;">浏览<span>9</span></p>
		</div>

		<div class="bom">
			<li style="color: rgb(149, 149, 149);">出发城市:<span style="color: black;">昆明</span></li>
			<div class="ant">
				<div style="color: rgb(149, 149, 149);">套餐包含:</div>
				<div class="ace">

					<div class="tag" v-for="(v,k) in  t_include">
						<li style="background: rgb(255, 115, 97);color: white;font-size: 12px;padding: 3px;">✓</li>
						<li style="color: rgb(255, 115, 97);font-size: 14px;">{{v}}</li>
					</div>

				</div>
			</div>

			<li style="color: rgb(149, 149, 149);">套餐包含:<span style="color: black;">{{data.t_starttime}}</span></li>
			<li style="color: rgb(149, 149, 149);">旅行天数:<span style="color: black;">{{data.t_days}}</span></li>
		</div>
		<Tabar></Tabar>
	</div>
</template>

<script>
	import Tabar from "@/components/tabar/tabars";
	export default {
		name: 'page',
		components: {
			Tabar
		},
		data: function() {
			return {
				num: 0,
				data: {},
				t_include: ''
			}
		},
		created: function() {
			this.num = window.location.href.split("?")[1];
			var params = new URLSearchParams();
			params.append('id', this.num);
			this.$http.post("http://10.80.7.235/html1110/vue%E5%90%8E%E5%8F%B0/index.php?m=Home&c=Index&a=DetailInfo", params).then((data) => {
				this.data = data.data;
				this.t_include = this.data.t_include.split("，");
				console.log(this.data)
			}).catch((err) => {
				console.log(err)
			})

		},
		methods: {
			go: function() {
				this.$router.go(-1);
			},
			user: function() {
				this.$router.push({
					path: '/User'
				})
			}
		}
	}
</script>

<style scoped>
	* {
		list-style: none;
	}
	
	.tit {
		width: 100%;
		height: 58px;
		border-bottom: 2px solid rgb(215, 221, 226);
		line-height: 58px;
		overflow: hidden;
	}
	
	.tit .back {
		width: 10px;
		height: 18px;
		margin-left: 3%;
		float: left;
		margin-top: 5%;
	}
	
	.tit .text {
		width: 87%;
		font-size: 20px;
		float: left;
		text-align: center;
		color: rgb(84, 97, 117);
	}
	
	.tit .user {
		width: 17px;
		height: 23px;
		margin-top: 5%;
		margin-right: 10px;
	}
	
	.flexd {
		width: 100%;
		height: 58px;
		background: white;
	}
	
	.flexd>li {
		width: 25%;
		height: 100%;
		float: left;
		display: flex;
		font-size: 12px;
		color: rgb(84, 97, 117);
		justify-content: center;
		align-items: center;
	}
	
	.flexd>li>img {
		width: 19px;
		height: 19px;
		vertical-align: middle;
	}
	
	.heads {
		width: 100%;
		overflow: hidden;
		background: lightgray;
	}
	
	.heads>div:nth-child(1) {
		background: white;
	}
	
	.headimg {
		width: 100%;
		height: 11rem;
	}
	
	.op {
		padding-top: 0.5rem;
		color: rgb(51, 51, 51);
	}
	
	.bom {
		background: white;
		width: 100%;
		overflow: hidden;
		margin-top: 1rem;
	}
	
	.ant {
		width: 100%;
	}
	
	.ant>div {
		float: left;
	}
	
	.tag {
		overflow: hidden;
		border-radius: 5%;
		float: left;
		margin-left: 10px;
		margin-top: 5px;
		border: 1px solid rgb(255, 115, 97);
	}
	
	.ace {
		width: 80%;
	}
	
	.tag>li {
		float: left;
	}
</style>