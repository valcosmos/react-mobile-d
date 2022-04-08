import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import '@/app.scss'

const Login = lazy(() => import('@/pages/Login'))
const Home = lazy(() => import('@/pages/Home'))
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="login" element={<Login />}></Route>
            <Route path="home" element={<Home />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
