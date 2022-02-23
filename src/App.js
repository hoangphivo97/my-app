import './App.scss'
import {Button} from 'react-bootstrap';
import {Link , Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
        <nav style={{paddingBottom:'1rem' , borderBottom:'1px solid'}}>
        <Link to ='/Search-filter'>
          <Button variant="light">
              Search Filter Exercise
          </Button>
        </Link>
        |
        <Link to ='/Counter'>
          <Button variant="light">
             Counter
          </Button>
        </Link>
        |
        <Link to ='/List'>
          <Button variant="light">
             List
          </Button>
        </Link>
        </nav>
        <Outlet />
      </div>
  )
}

export default App;
