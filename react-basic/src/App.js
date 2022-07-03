import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'
import { HistoryRouter, history } from '@/utils/history'
// 导入页面组件
import Login from './pages/Login'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Publish from './pages/Publish'
import Article from './pages/Article'

export default function App () {
	return (
		<HistoryRouter history={history}>
			{/* <BrowserRouter> */}
			<div className="App">
				<Routes>
					{/* 需要鉴定权限的路由 */}
					<Route path='/' element={
						<AuthRoute>
							<Layout />
						</AuthRoute>
					}>
						{/* 二级路由默认页面 */}
						<Route index element={<Home />} />
						<Route path='article' element={<Article />} />
						<Route path='publish' element={<Publish />} />
					</Route>
					{/* 不需要鉴定权限的路由 */}
					<Route path='/login' element={<Login />} />
				</Routes>
			</div>
			{/* </BrowserRouter> */}
		</HistoryRouter>
	)
}