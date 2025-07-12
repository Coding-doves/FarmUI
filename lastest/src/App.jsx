import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.scss';

import Home from './routers/home';
import About from './routers/about';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
