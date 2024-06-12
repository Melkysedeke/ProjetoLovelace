import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateActivity from './components/pages/CreateActivity'
import AccessActivity from './components/pages/AccessActivity'
import Container from './components/layout/Container'
import Home from './components/pages/Home';
import Activity from './components/pages/Activity';
import AccessCode from './components/pages/AccessCode';

function App() {
  return (
    <Router>
      <Container className="container_all">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/createactivity' element={<CreateActivity/>}/>
          <Route path='/access/:id' element={<AccessActivity/>}/>
          <Route path='/activity/:id' element={<Activity/>}/>
          <Route path='/accesscode' element={<AccessCode/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App
