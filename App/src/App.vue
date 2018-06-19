<template>
	<div id="app">
		<router-view></router-view>
		<!--<page></page>-->
	</div>
</template>
<script>
//	import Page from "./components/Homepage/page";
	export default {
		data: function() {
			return {
				data: {}
			};
		},
		name: "App",
		components: {
//			Page
		}
	};
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		text-align: none;
		list-style: none;
	}
</style>