import Main from "./Components/Main";
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from "./Components/Admin";
import SignIn from "./Components/SignIn";
import NailInfo from "./Components/NailInfo";
import EditNail from "./Components/EditNail";
import Success from "./Components/Success";
import Failure from "./Components/Failure";




function App() {
  return (
  
   <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/nail-set/:id' element={<NailInfo />} /> 
        <Route path='/success' element={<Success />} />
        <Route path='/failure' element={<Failure />} />
        

        {/* Need to add protected routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/edit-set/:id' element={<EditNail />} />
      </Routes>
      </BrowserRouter>
  
 
  
  );
}

export default App;
