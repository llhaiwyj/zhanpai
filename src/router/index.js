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

Vue.use(Router)

export default new Router({
	routes: [
	    {
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/Index',
			name: 'Index',
			component: Index
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