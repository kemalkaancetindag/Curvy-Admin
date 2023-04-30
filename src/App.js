import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Index from './pages/index/Index';
import Login from './pages/login/Login';
import ProtectedRoute from './util/ProtectedRoute'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route 
          path='/login' 
          element={
            <ProtectedRoute children={<Login/>}/>
          }
        />
        <Route 
          path='/' 
          element={
            <ProtectedRoute children={<Index/>}/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
