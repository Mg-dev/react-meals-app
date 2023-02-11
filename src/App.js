

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Routes, Route} from 'react-router-dom'
import Layout from './Layout'

function App() {
  return (
    
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />}/>
    <Route path="*" element={<NotFound />}/>
    </Route>
    </Routes>
  );
}

export default App;
