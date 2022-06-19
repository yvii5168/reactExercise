import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 导入页面组件
import Login from './pages/Login'
import Layout from './pages/Layout'

export default function App () {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Layout />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}