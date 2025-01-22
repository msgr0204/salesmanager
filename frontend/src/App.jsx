import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Inventory />} />
        <Route path="/sales/*" element={<Sales />} />
        <Route path="/reports/*" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default App;
