import {Navigate, useRoutes} from 'solid-app-router'
import {CommandView} from './views/Command'
import {Table} from './views/ConfigTable'
import {Home} from './views/Home'
import {Demo} from './views/Demo'

export const Routes = useRoutes([
	{
		path: '/',
		component: () => <Navigate href="/home" />,
	},
	{
		path: '/home',
		component: Home,
		// children: [
		// 	{
		// 		path: '/',
		// 		component: () => { },
		// 	},
		// 	{
		// 		path: '/dashboardGPS',
		// 		component: DashboardGPS,
		// 	},
		// 	{
		// 		path: '/dashboardTEC',
		// 		component: DashboardTEC,
		// 	},
		// 	{
		// 		path: '/dashboardForm',
		// 		component: DashboardForm,
		// 	},
		// ],
	},
	{
		path: '/command',
		component: CommandView,
	},
	{
		path: '/configTable',
		component: Table,
	},
	{
		path: '/mapDemo',
		component: Demo,
	},
])
