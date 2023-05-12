import './App.css';
import Aboutus from './components/aboutus';
import Contanctus from './components/contanctus';
import Cancellation from './components/cancellation';
import Privacy from './components/privacy';
import Terms from './components/terms';
import Packages from './components/packages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Aboutus />} />
        <Route path="/contanctus" element={<Contanctus />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </>
  );
}

export default App;
