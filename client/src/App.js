import Main from "./Components/Main";
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from "./Components/Admin";
import SignIn from "./Components/SignIn";
import NailInfo from "./Components/NailInfo";
import EditNail from "./Components/EditNail";
import Customize from "./Components/Customize";




function App() {
  return (
  
   <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/nail-set/:id' element={<NailInfo />} /> 
        <Route path='/nail-set-custom/:id' element={<Customize />} />
        

        {/* Need to add protected routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/edit-set/:id' element={<EditNail />} />
      </Routes>
      </BrowserRouter>
  
 
  
  );
}

export default App;
