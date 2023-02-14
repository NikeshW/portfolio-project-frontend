import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Index from './Pages/Index';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import New from './Pages/New';
import FourOFour from './Pages/FourOFour';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <main>
          <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/items'} element={<Index/>}/>
            <Route path={'/items/:id'} element={<Show/>}/>
            <Route path={'/items/new'} element={<New/>}/>
            <Route path={'/items/:id/edit'} element={<Edit/>}/>
            <Route path='*' element={<FourOFour/>}/>
          </Routes>
        </main>
      </Router>
      
    
    </div>
  );
}

export default App;
