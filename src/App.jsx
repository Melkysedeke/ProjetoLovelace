import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home";
import AccessActivity from "./components/pages/AccessActivity";
import AccessCode from "./components/pages/AccessCode";
import Activity from "./components/pages/Activity";
import CreateActivity from "./components/pages/CreateActivity";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import UserArea from "./components/pages/UserArea";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createactivity' element={<CreateActivity/>}/>
          <Route path='/access/:id' element={<AccessActivity/>}/>
          <Route path='/activity/:id' element={<Activity/>}/>
          <Route path='/accesscode' element={<AccessCode/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Ua' element={<UserArea/>}/>
        </Routes>
    </Router>
  );
}

export default App;