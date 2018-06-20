<template>
	<div class="news">
		<ul>
			<img src="../../../imgs/back.png" alt="" />

			<img src="../../../imgs/download-5.png" alt="" />
		</ul>
	</div>
</template>
<script>
	export default {
		name: "news"
	};
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}
	
	.news>ul {
		width: 100%;
		height: 4rem;
		background: red;
		line-height: 4rem;
		overflow: hidden;
	}
	
	.news>ul>img {
		width: 20px;
		height: 25px;
	}
	
	.news>ul>img:nth-child(1) {
		float: left;
	}
	
	.news>ul>img:nth-child(2) {
		float: right;
	}
</style>