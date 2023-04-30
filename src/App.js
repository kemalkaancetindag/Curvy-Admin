import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Index from './pages/index/Index';
import Login from './pages/login/Login';
import ProtectedRoute from './util/ProtectedRoute'


function App() {
  var user = false;
  return (
    <BrowserRouter>
      <Routes>

        <Route 
          path='/login' 
          element={
            <ProtectedRoute children={<Login/>} user={user}/>
          }
        />
        <Route 
          path='/' 
          element={
            <ProtectedRoute children={<Index/>} user={user}/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
