import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ModalProvider } from './components/ModalProvider'
import Admin from './components/screens/admin/Admin'
import Home from './components/screens/home/Home'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<ModalProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/admin' element={<Admin />} />
				</Routes>
			</Router>
		</ModalProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
