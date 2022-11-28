import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Page2 from './pages/page2'

export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/page2/" element={<Page2 />}/>
        </Routes>
    </BrowserRouter>
);