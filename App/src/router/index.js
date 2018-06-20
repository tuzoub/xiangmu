import Vue from 'vue';
import VRouter from 'vue-router';
Vue.use(VRouter);
import Homepage from "@/components/Homepage/Homepages";
import Login from "@/components/Login/Logins";
import Page from "@/components/Homepage/page";
import Zc from "@/components/Zc/zcs";
import User from '@/components/Login/user';
import Themetour from "@/components/Puregame/Themetour";
import Puregames from "@/components/Puregame/Puregames";
import Selftour from "@/components/Puregame/Selftour";
import About from "@/components/Puregame/About";
import Weibo from '@/components/tabar/weibo';
import Newa from "@/components/tabar/news";
import Hot from "@/components/Puregame/Hot";
var router = new VRouter({
	routes: [{
		path: "/",
		redirect: "/Homepage"
	}, {
		name: "Homepage",
		path: '/Homepage',
		component: Homepage
	}, {
		name: 'Login',
		path: '/Login',
		component: Login
	}, {
		name: 'Page',
		path: '/Page',
		component: Page
	}, {
		name: 'Zc',
		path: '/Zc',
		component: Zc
	}, {
		name: 'User',
		path: '/User',
		component: User
	}, {
		name: 'Themetour',
		path: '/Themetour',
		component: Themetour
	}, {
		name: 'Puregames',
		path: '/Puregames',
		component: Puregames
	}, {
		name: 'Selftour',
		path: '/Selftour',
		component: Selftour
	}, {
		name: 'About',
		path: '/About',
		component: About
	}, {
		name: 'Weibo',
		path: '/Weibo',
		component: Weibo
	}, {
		path: '/Newa',
		component: Newa
	}, {
		name: 'Hot',
		path: '/Hot',
		component: Hot
	}]
});
export default router;