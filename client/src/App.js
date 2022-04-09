import Main from "./Components/Main";
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from "./Components/Admin";
import SignIn from "./Components/SignIn";
import NailInfo from "./Components/NailInfo";



function App() {
  return (
  
   <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/nail-set/:id' element={<NailInfo />} /> 

        {/* Need to add protected routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      </BrowserRouter>
  
 
  
  );
}

export default App;
