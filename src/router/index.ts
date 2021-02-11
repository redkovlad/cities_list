import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import cities from '@/views/cities/cities.vue'
import stations from '@/views/stations/stations.vue'
import notFound from '@/views/notFound/notFound.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'cities',
		component: cities
	},
	{
		path: '/stations/:cityID',
		name: 'stations',
		component: stations,
		props:true
	},
	{
		path: "/:catchAll(.*)",
		name: 'notFound',
		component: notFound
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
