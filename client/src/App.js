import Main from "./Components/Main";
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from "./Components/Admin";
import SignIn from "./Components/SignIn";



function App() {
  return (
  
   <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      </BrowserRouter>
  
 
  
  );
}

export default App;
