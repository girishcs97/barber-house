import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './homepage/homepage';
import UserAuth from './adminauth/adminAuth';
import AdminHomepage from './adminhomepage/adminHomepage';
import Shop from './shop/shop';

function App() {
  localStorage.clear();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/admin" element={<UserAuth />} />
        <Route exact path="/adminpage" element={<AdminHomepage />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;