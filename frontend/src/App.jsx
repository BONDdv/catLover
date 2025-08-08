
import { Route, Routes } from 'react-router'
import LoginPage from './pages/LoginPage'
import CatPage from './pages/CatPage'
import ProtectedRoute from './component/ProtectedRoute'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/cat' element={
          <ProtectedRoute>
            <CatPage />
          </ProtectedRoute>}
        />
      </Routes> 
    </div>
  )
}

export default App
