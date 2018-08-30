import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Product from '@/components/product'
import Buyinformation from '@/components/buyinformation'
import News from '@/components/news'
import Enterprise from '@/components/enterprise'
import Details from '@/components/details'
import Login from '@/components/login'
import Register from '@/components/register'
import Retrieve from '@/components/retrieve'
import Productserch from '@/components/productserch'
import Newsinformation from '@/components/newsinformation'
import Buyinforxiangqing from '@/components/buyinforxiangqing'
import Fabuxuqiu from '@/components/fabuxuqiu'
import Collection from '@/components/collection'

//import Ceshi from '@/components/ceshi'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/Login',
			name: 'Login',
			component: Login
		},
		{
			path: '/Newsinformation',
			name: 'Newsinformation',
			component: Newsinformation
		},
		{
			path: '/Collection',
			name: 'Collection',
			component: Collection
		},
		{
			path: '/Fabuxuqiu',
			name: 'Fabuxuqiu',
			component: Fabuxuqiu
		},
		{
			path: '/Buyinforxiangqing',
			name: 'Buyinforxiangqing',
			component: Buyinforxiangqing
		},
		{
			path: '/Product',
			name: 'Product',
			component: Product
		},
		{
			path: '/Buyinformation',
			name: 'Buyinformation',
			component: Buyinformation
		},
		{
			path: '/News',
			name: 'News',
			component: News
		},
		{
			path: '/Enterprise',
			name: 'Enterprise',
			component: Enterprise
		},
		{
			path: '/Details',
			name: 'Details',
			component: Details
		},
		{
			path: '/Register',
			name: 'Register',
			component: Register
		},
		{
			path: '/Retrieve',
			name: 'Retrieve',
			component: Retrieve
		},
		{
			path: '/Productserch',
			name: 'Productserch',
			component: Productserch
		},
	]
})