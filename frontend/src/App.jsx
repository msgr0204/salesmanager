import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainSalesManager from './pages/MainSalesManager';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainSalesManager />} />
      </Routes>
    </Router>
  );
}

export default App;
