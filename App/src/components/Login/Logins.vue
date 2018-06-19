<template>
	<div>
		<div class="item1">
			<img src="http://m.zoutu.com/res/img/b4bc78a49d.png">
		</div>
		<div class="login">
			<div class="item2">
				<span></span>
				<span>
          <input type="text" placeholder="请输入手机号" ref="tel">
        </span>
			</div>
			<div class="item3">
				<span></span>
				<span>
          <input type="password" placeholder="请输入密码" ref="pwd">
          </span>
			</div>
			<div class="item4">
				<span><input type="radio" value="" ref="remb">记住密码</span>
				<span>验证码登录</span>
			</div>
			<div class="item5" @click="login">
				登录
			</div>
			<div class="item6">
				<router-link tag='span' to='/Zc'> 注册</router-link>
				<span>忘记密码</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {}
		},
		methods: {
			login: function() {
				var params = new URLSearchParams();
				params.append('tel', this.$refs.tel.value);
				params.append('pwd', this.$refs.pwd.value);
				this.$http.post('http://10.80.7.235/html1110/vue%E5%90%8E%E5%8F%B0/index.php?m=Home&c=Index&a=Login', params)
					.then((data) => {
						if(data.data == '登录成功') {
							this.$router.push({
								path: '/Homepage'
							})
						}
					}).catch((err) => {
						console.log(err)
					})
			}
		}
	}
</script>

<style scoped>
	.item1 {
		text-align: center;
		margin-top: 50px;
	}
	
	.item1 img {
		width: 110px;
		height: 110px;
	}
	
	.login {
		width: 80%;
		margin-left: 10%;
		margin-top: 70px;
		height: 500px;
	}
	
	span {
		display: inline-block;
		vertical-align: middle;
	}
	
	.item2 {
		width: 100%;
	}
	
	.item2 span:first-child {
		width: 30px;
		height: 60px;
		line-height: 60px;
		background: url("../../../imgs/phone.png") no-repeat;
	}
	
	.item2 span:last-child {
		width: 250px;
		height: 40px;
		line-height: 40px;
		margin-left: 5px;
		border-bottom: 1px solid #bfbfbf;
	}
	
	 ::-webkit-input-placeholder {
		color: #bbbbbb;
	}
	
	input {
		height: 35px;
		margin-left: 20px;
		color: #bbbbbb;
		font-size: 16px;
		outline: none;
	}
	
	.item3 {
		margin-top: 18px;
	}
	
	.item3 span:first-child {
		width: 30px;
		height: 60px;
		margin-left: 5px;
		background: url("../../../imgs/password.png") no-repeat;
	}
	
	.item3 span:last-child {
		width: 250px;
		height: 40px;
		line-height: 40px;
		margin-left: 5px;
		border-bottom: 1px solid #bfbfbf;
		/*outline: none;*/
	}
	
	.item4 {
		width: 95%;
		height: 100px;
		line-height: 100px;
		font-size: 16px;
		color: #595959;
		position: relative;
	}
	
	.item4 span:last-child {
		position: absolute;
		right: 10px;
	}
	
	.item5 {
		width: 95%;
		height: 30px;
		background: #2c3c6d;
		color: white;
		text-align: center;
		line-height: 30px;
		border-radius: 10px;
		/*margin: 15px 0px 15px 2.5%;*/
	}
	
	.item6 {
		width: 95%;
		margin-left: 2.5%;
		height: 80px;
		line-height: 80px;
		font-size: 16px;
		position: relative;
		color: #2c3c6d;
	}
	
	.item6 span:last-child {
		position: absolute;
		right: 10px;
	}
	
	.reg {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>