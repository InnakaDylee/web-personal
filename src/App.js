import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/style/style.css';
// import './assets/style/tailwind.css';
import ContentUbuntu from './Page/ContentUbuntu';
import Profile from './Page/Profile';
import ContentTugas2 from './Page/ContentTugas2';
import ContentTugas4 from './Page/ContentTugas4';

function App() {
  return (
    // <Content></Content>
    // <Profile></Profile>
    // <ContentTugas2></ContentTugas2>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/ContentUbuntu" element={<ContentUbuntu />} />
          <Route path="/ContentTugas2" element={<ContentTugas2 />} />
          <Route path="/ContentTugas4" element={<ContentTugas4 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
