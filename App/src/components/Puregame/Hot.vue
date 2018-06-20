	<template>
		<div class="hot">
			<div class="tit">
				<img class="back" src="../../../imgs/back.png" alt="">
				<div class="text">热门爆款</div>
				<img class="user" src="../../../imgs/download-5.png" alt="">
			</div>
      <Search></Search>
      <Kind></Kind>
			<div class="con">
				<div class="item">
					<img src="../../../imgs/53bc3fdf-d183-4926-8fc1-60c0b673a0d1-1-.jpg" alt="">
          <div class="bao">
            <div class="na">丽江+大理（昆进丽出/当地5星高品酒店/雪山冰川大索/洱海360°游船/3古城/佛国三塔）</div>
            <div class=""></div>
          </div>

				</div>
			</div>
		</div>
	</template>

	<script>
		import Kind from "../navcon/Kind"
    import Search from "../navcon/Search"
		export default {
			name: "Hot",
			components: {
				Kind,
        Search
			}
		}
	</script>

	<style scoped>
		.hot .tit {
			width: 100%;
			height: 58px;
			border-bottom: 2px solid rgb(215, 221, 226);
			line-height: 58px;
			overflow: hidden;
		}

		.hot .tit .back {
			width: 10px;
			height: 18px;
			margin-left: 3%;
			float: left;
			margin-top: 5%;
		}

		.hot .tit .text {
			width: 87%;
			font-size: 20px;
			float: left;
			text-align: center;
			color: rgb(84, 97, 117);
		}

		.hot .tit .user {
			width: 17px;
			height: 23px;
			margin-top: 5%;
			margin-right: 10px;
		}
    .hot .con{
      width: 100%;
      height: 250px;
      margin-top: 10%;
      position: relative;
    }
    .hot .item{
      width: 85%;
      margin: 0 auto;
      box-shadow: rgb(153, 153, 153) 0px 0px 2px;
      position: absolute;
      left: 8%;
      right: 8%;
      height: 100%;
    }
    .hot .item img{
      width: 85%;
      position: absolute;
      top: -20%;
      left: 8%;
      right: 8%;
    }
    .hot .item .na{
      color: rgb(45, 61, 112);
      font-size: 18px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
	</style>
