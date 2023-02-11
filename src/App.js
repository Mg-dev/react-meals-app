

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Routes, Route} from 'react-router-dom'


function App() {
  return (
    
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
