

import { Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
function App() {
  return (
    
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route path="contact" element={<Contact />}/>
    <Route path="*" element={<NotFound />}/>
    </Route>
    </Routes>
  );
}

export default App;
