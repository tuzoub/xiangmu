<template>
	<div class='Homepage'>
		<img class="imghead" src="http://www.zoutu.com/imgs/file/route/17ff3b91-6ee8-4ec3-9f8d-b7b6973857bf-湖1.jpg" alt="">
		<div class="inpt">
			<div class="inpts">
				<i></i>
				<input placeholder="搜索目的地和关键词" type="text">
			</div>
			<div class="The_login" @click="login"><span>登录</span>/<span>注册</span></div>
		</div>
		<div class="bevel"></div>
		<div class="Navigation_page">
			<div class="Navigation_pages">
				<router-link tag="div" to="/Puregames">
					<img src="../../../imgs/btn1.png" alt="">
					<p>纯玩游</p>
				</router-link>
				<router-link tag="div" to="/Selftour">
					<img src="../../../imgs/btn2.png" alt="">
					<p>半自助游</p>
				</router-link>
				<div><img src="../../../imgs/btn3.png" alt="">
					<p>VIP定制</p>
				</div>
				<router-link tag="div" to="/Themetour">
					<img src="../../../imgs/btn4.png" alt="">
					<p>主题游</p>
				</router-link>
				<router-link tag="div" to="/About">
					<img src="../../../imgs/btn5.png" alt="">
					<p>关于我们</p>
				</router-link>
				<div><img src="../../../imgs/btn6.png" alt="">
					<p>我的订单</p>
				</div>

        <router-link tag="div" to="/Hot">
          <img src="../../../imgs/btn7.png" alt="">
          <p>热门爆款</p>
        </router-link>


				<div><img src="../../../imgs/btn8.png" alt="">
					<p>我的走途</p>
				</div>

			</div>
		</div>
		<img style="width: 100%;height: 20vh;" src="http://m.zoutu.com/res/img/471657ffff.png" alt="">
		<div class="project">
			<div style=" padding-top: 1.8vh; padding-bottom: 1.8vh;background:white">
				<div style="width:0.2rem;height:1.4rem;background:rgb(45, 61, 112);margin-left:0.5rem;"></div>
				<div style="color:rgb(84, 97, 117);font-size:1.1rem;margin-left:1.5rem;">纯玩游</div>
			</div>
			<div class="ddd">
				<div @touchend="touched($event)" @touchstart='touchstarts($event)' ref="touched" @touchmove='touchmoves($event)'>

					<div class="projecttwo">
						<div>
							<img src="http://www.zoutu.com/imgs/file/route/69497e1f-0ecd-4c8b-a62c-4b7c48392089-3.png" alt="">
							<p style="color: rgb(84, 97, 117);font-size:1rem;">哈哈哈哈或或或</p>
							<p style="color: rgb(158, 170, 184);font-size:12px;">啦啦啦啦啦绿绿绿绿绿绿绿绿绿</p>
							<p style="color: rgb(157, 170, 184);"><span style="color: rgb(255, 115, 97);">¥   1521</span>元起</p>
						</div>
						<div>
							<img src="http://www.zoutu.com/imgs/file/route/69497e1f-0ecd-4c8b-a62c-4b7c48392089-3.png" alt="">
							<p style="color: rgb(84, 97, 117);font-size:1rem;">哈哈哈哈或或或</p>
							<p style="color: rgb(158, 170, 184);font-size:12px;">啦啦啦啦啦绿绿绿绿绿绿绿绿绿</p>
							<p style="color: rgb(157, 170, 184);"><span style="color: rgb(255, 115, 97);">¥   1521</span>元起</p>
						</div>
					</div>

					<div class="projecttwo">
						<div>
							<img src="http://www.zoutu.com/imgs/file/route/e13a2388-f460-471f-839d-6f9ee07e3e02-湖边（自拍）.jpg" alt="">
							<p style="color: rgb(84, 97, 117);font-size:1rem;">大大大大大</p>
							<p style="color: rgb(158, 170, 184);font-size:12px;">啦啦啦啦啦绿绿绿绿绿绿绿绿绿</p>
							<p style="color: rgb(157, 170, 184);"><span style="color: rgb(255, 115, 97);">¥   1521</span>元起</p>
						</div>
						<div>
							<img src="http://www.zoutu.com/imgs/file/route/69497e1f-0ecd-4c8b-a62c-4b7c48392089-3.png" alt="">
							<p style="color: rgb(84, 97, 117);font-size:1rem;">哈哈哈哈或或或</p>
							<p style="color: rgb(158, 170, 184);font-size:12px;">啦啦啦啦啦绿绿绿绿绿绿绿绿绿</p>
							<p style="color: rgb(157, 170, 184);"><span style="color: rgb(255, 115, 97);">¥   1521</span>元起</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="destination">
			<div>
				<div style="width:0.2rem;height:1.4rem;background:rgb(255, 115, 98);margin-left:0.5rem;float:left"></div>
				<div style="color:rgb(84, 97, 117);font-size:1.1rem;margin-left:1.5rem;float:left">热门目的地</div>
			</div>
			<div class="destinations">
				<div v-for="(v,k) in datas2">
					<img :src="v.t_img" alt="" :tid='v.t_id' @click="page(k)">
				</div>
			</div>
		</div>
		<div class="Travelbymyself">
			<ul>
				<li></li>
				<li>半自助游</li>
			</ul>

			<div v-for="(v,k) in datas3">
				<img :src="v.t_img" alt="" :tid='v.t_id' @click="page(k)" ref='ccc'>
				<p style="color: rgb(84, 97, 117);font-size:0.8rem;">{{v.t_endcity}}</p>
				<p style="color: rgb(158, 170, 184);font-size:12px;">{{v.t_note}}</p>
				<p style="color: rgb(157, 170, 184);"><span style="color: rgb(255, 115, 97);">¥   {{v.t_price}}</span>元起</p>
			</div>
		</div>
		<Tab></Tab>
	</div>
</template>
<script>
	import Tab from "@/components/tabar/tabars";
	export default {
		components: {
			Tab
		},
		name: "Homepage",
		props: ["data"],
		data: function() {
			return {
				expagex: "",
				num: 0,
				Num: 0,
				datas: "",
				datas1: "",
				datas2: "",
				datas3: ""
			};
		},
		created: function() {
			this.$http
				.post(
					"http://10.80.7.235/html1110/vue%E5%90%8E%E5%8F%B0/index.php?m=Home&c=Index&a=SelectAll"
				)
				.then(data => {
					this.datas = data;

					for(var i = 0; i < this.datas.data.length; i++) {
						for(var j = 0; j < this.datas.data[i].length; j++) {
							if(this.datas.data[i][j].t_note.length > 15) {
								this.datas.data[i][j].t_note =
									this.datas.data[i][j].t_note.slice(0, 12) + "...";
							}
							if(this.datas.data[i][j].t_endcity.length > 10) {
								this.datas.data[i][j].t_endcity =
									this.datas.data[i][j].t_endcity.slice(0, 10) + "...";
							}
						}
					}

					this.datas1 = this.datas.data[0];
					this.datas2 = this.datas.data[1];
					this.datas3 = this.datas.data[2];
					console.log(this.datas3);
				})
				.catch(err => {
					console.log(err);
				});
		},
		methods: {
			touchstarts: function(ev) {
				var ev = ev || window.event;
				this.expagex = ev.touches[0].pageX;
			},
			touchmoves: function(ev) {
				var ev = ev || window.event;
				this.num = ev.touches[0].pageX;
				this.$refs.touched.style.left = -this.expagex + ev.touches[0].pageX + "px";
			},
			touched: function(ev) {
				var ev = ev || window.event;
				if(parseInt(this.$refs.touched.style.left) > 0) {
					this.$refs.touched.style.left = 0;
				}
				if(this.expagex < this.num && this.Num != 0) {
					this.Num++;
					this.$refs.touched.style.left = this.Num * 100 + "vw";
				}
				if(this.expagex > this.num) {
					this.Num--;
					this.$refs.touched.style.left = this.Num * 100 + "vw";
				}
				if(this.Num < -2) {
					this.$refs.touched.style.left = -200 + "vw";
				}
			},
			login: function() {
				this.$router.push({
					path: '/Login'
				})
			},
			page: function(index) {
				console.log(index)
				this.$router.push({
					path: '/Page' + '?' + this.$refs.ccc[index].getAttribute('tid')
				})
			}
		}
	};
</script>
<style scoped>
	* {
		padding: 0;
		margin: 0;
		list-style: none;
		outline: none;
		text-decoration: none;
	}

	.Homepage {
		background-color: rgb(238, 242, 245);
		width: 100%;
		overflow: hidden;
		position: relative;
	}

	.imghead {
		width: 100%;
		height: 35vh;
	}

	.inpt {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		height: 3rem;
		line-height: 3rem;
		overflow: hidden;
	}

	.inpts {
		height: #000;
		width: 50vw;
		border-radius: 100px;
		height: 1.6rem;
		float: left;
		margin-left: 1.5rem;
		background: white;
		margin-top: 0.7rem;
		text-align: center;
		line-height: 1.6rem;
	}

	.inpts>input {
		font-size: 14px;
		height: 80%;
		width: 90%;
	}

	.The_login {
		color: rgb(255, 255, 255);
		font-size: 1rem;
		font-weight: bold;
		float: right;
		margin-right: 2rem;
	}

	.bevel {
		width: 100%;
		height: 1rem;
		background: white;
		border-top-left-radius: 0.8rem;
		border-top-right-radius: 0.8rem;
		position: relative;
		z-index: 6666;
		bottom: 10px;
	}

	.Navigation_page {
		margin-top: -20px;
		width: 100%;
		height: 30vh;
		display: flex;
		justify-content: center;
		align-content: center;
		background: white;
	}

	.Navigation_pages {
		background: white;
		width: 90%;
		height: 20vh;
		margin-top: 5vh;
	}

	.Navigation_pages>div {
		float: left;
		width: 25%;
		height: 50%;
		text-align: center;
	}

	.Navigation_pages>div>img {
		height: 50%;
		width: 50%;
	}

	.Navigation_pages>div>p {
		color: gray;
	}

	.project {
		width: 100%;
		padding: 0.47rem 0.18rem 0.35rem;
	}

	.project>div:nth-child(1) {
		width: 100%;
		height: 2rem;
		display: flex;
		align-items: center;
	}

	.ddd {
		width: 100vw;
		height: 28vh;
		position: relative;
		background: red;
	}

	.ddd>div {
		height: 100%;
		width: 300vw;
		background: white;
		position: absolute;
	}

	.projecttwo {
		width: 100vw;
		overflow: hidden;
		float: left;
		background: white;
	}

	.projecttwo>div {
		text-align: center;
		width: 50%;
		height: 30vh;
		float: left;
		text-align: center;
	}

	.projecttwo>div>img {
		width: 90%;
		height: 60%;
		border-radius: 5%;
	}

	.destination {
		background: white;
		width: 100%;
	}

	.destination>div:nth-child(1) {
		padding-top: 3vh;
		padding-bottom: 3vh;
	}

	.destinations {
		width: 100%;
		height: 25vh;
		overflow: hidden;
		margin-top: 3vh;
	}

	.destinations>div {
		width: 33.3%;
		height: 50%;
		display: flex;
		justify-content: center;
		float: left;
		align-content: center;
	}

	.destinations>div>img {
		border-radius: 8%;
		height: 80%;
		width: 80%;
	}

	.Travelbymyself {
		width: 100%;
		overflow: hidden;
		padding-bottom: 7vh;
	}

	.Travelbymyself>div {
		width: 50%;
		overflow: hidden;
		background: white;
		text-align: center;
		float: left;
	}

	.Travelbymyself>div>img {
		width: 90%;
		border-radius: 5%;
		height: 6rem;
	}

	.Travelbymyself>ul {
		width: 100$;
		height: 30px;
		display: flex;
		align-items: center;
		background: white;
		padding-top: 3vh;
		padding-bottom: 3vh;
	}

	.Travelbymyself>ul>li:nth-child(1) {
		background: rgb(239, 173, 75);
		width: 0.2rem;
		height: 1.4rem;
		margin-left: 0.5rem;
	}

	.Travelbymyself>ul>li:nth-child(2) {
		color: rgb(84, 97, 117);
		font-size: 1.1rem;
		margin-left: 1.5rem;
	}
</style>
