<template>
	<div class="weibo">
		<iframe src="https://m.weibo.cn/u/2117952584?refer_flag=1001030101_&refer_flag=1001030101_&is_hot=1&is_hot=1&jumpfrom=weibocom"></iframe>
	</div>
</template>

<script>
	export default {
		name: "weibo"
	};
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
		list-style: none;
		outline: none;
	}
	
	iframe {
		width: 100vw;
		height: 100vh;
		border: none;
	}
	
	.btn {
		display: none !important;
	}
</style>