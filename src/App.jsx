import Container from './components/layout/Container'
import { Outlet } from 'react-router-dom'

function App() {
  return (
      <Container className="container_all">
        <Outlet/>
      </Container>
  );
}

export default App
