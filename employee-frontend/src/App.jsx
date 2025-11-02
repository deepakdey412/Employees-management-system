
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/Error/NoMatch';
import Home from './pages/header/Home';
import { Route, Routes }  from 'react-router-dom';
import Post from './post/Post';
import Update from './pages/update/Update';

const App = () => {
 return (
    <div className="container mt-5">
      <Home/>
      <Routes>
        <Route path='/employee' element={<Dashboard />}></Route>
        <Route path='/' element={<Post />}></Route>
        <Route path='/employee/:id' element={<Update />}></Route>
        <Route path='/*' element={<NoMatch />}></Route>
      </Routes>
    </div>
  )
}

export default App