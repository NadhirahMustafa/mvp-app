import { Routes, Route } from 'react-router-dom';
import { router } from './constants/constants';
import './App.scss';
import LandingPage from './views/LandingPage';
import ProductDetailsPage from './views/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={router.HOME} element={<LandingPage />} />
        <Route path={router.DETAILS} element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
