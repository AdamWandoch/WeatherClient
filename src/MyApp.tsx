import './styles/global.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';

function MyApp() {
  return (
    <Routes>
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default MyApp;
