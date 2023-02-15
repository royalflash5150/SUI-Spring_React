import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IpList from './IpList';
import Form from './Form';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<IpList />} />
            <Route path='/form/:id' element={<Form />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
