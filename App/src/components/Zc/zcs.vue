<template>
	<div>
		<div class="title">
			<router-link :to="{path:'/Login'}">
				<span></span>
			</router-link>
			用户注册
		</div>
		<div class="box">
			<div class="item">
				<span class="bgspan bgspan1"></span>
				<span class="content">
            			<input type="text" placeholder="请输入手机号" ref="tel">
          		</span>
			</div>
			<div class="item">
				<span class="bgspan bgspan2"></span>
				<span class="content">
            <input type="password" placeholder="请输入密码（6-12个字符组成）" ref="pwd">
          </span>
			</div>
			<div class="item">
				<span class="bgspan bgspan2"></span>
				<span class="content">
            <input type="password" placeholder="请再次确认密码" ref="repwd">
          </span>
			</div>
			<div class="item1" @click="goRegister">
				注册
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Register",
		data() {
			return {
				judge1: false,
				judge2: false,
			}
		},
		methods: {
			//注册
			goRegister() {
				var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(myreg.test(this.$refs.tel.value) == true) {
					if(this.$refs.pwd.value.length > 5 && this.$refs.pwd.value.length < 13 && this.$refs.repwd.value.length > 5 && this.$refs.repwd.value.length < 13 && this.$refs.repwd.value === this.$refs.pwd.value) {
						var params = new URLSearchParams();
						params.append('tel', this.$refs.tel.value);
						params.append('pwd', this.$refs.pwd.value);
						this.$http.post('http://10.80.7.235/html1110/vue%E5%90%8E%E5%8F%B0/index.php?m=Home&c=Index&a=Register', params).then((data) => {
							console.log(data)
							if(data.data == 'yes') {
								alert('注册成功');
								this.$router.push({
									path: '/Login'
								})
							} else if(data.data == 'no') {
								alert('这个账号已经注册过了')
							}
						}).catch((err) => {
							console.log(err)
						})

					}
				} else {
					this.$refs.pwd.value = '';
					this.$refs.repwd.value = '';
					this.$refs.tel.value = '';
					alert('注册格式不对');
				}
			}
		}
	}
</script>

<style scoped>
	.title {
		width: 100%;
		height: 40px;
		line-height: 40px;
		margin: 20px 0px;
		font-size: 20px;
		text-align: center;
		position: relative;
	}
	
	.title span {
		display: inline-block;
		position: absolute;
		left: 8px;
		width: 10px;
		height: 20px;
		background: url("../../../imgs/back.png") 0px 0px /10px 20px no-repeat;
	}
	
	.box {
		width: 80%;
		margin-left: 10%;
		margin-top: 50px;
		height: 300px;
	}
	
	.bgspan {
		display: inline-block;
		vertical-align: middle;
		width: 30px;
		height: 40px;
	}
	
	.bgspan1 {
		background: url("../../../imgs/phone.png");
	}
	
	.bgspan2 {
		margin-left: 4px;
		background: url("../../../imgs/password.png");
	}
	
	.item {
		height: 50px;
		display: flex;
		margin-bottom: 20px;
	}
	
	.content {
		display: inline-block;
		margin-left: 5px;
		width: 260px;
		height: 40px;
		border-bottom: 1px solid #bfbfbf;
	}
	
	 ::-webkit-input-placeholder {
		color: #bbbbbb;
	}
	
	input {
		width: 240px;
		height: 18px;
		margin-left: 10px;
		color: #bbbbbb;
		font-size: 16px;
		outline: none;
	}
	
	.item1 {
		width: 100%;
		height: 30px;
		margin-top: 50px;
		background: #2c3c6d;
		color: white;
		text-align: center;
		line-height: 30px;
		border-radius: 10px;
	}
</style>