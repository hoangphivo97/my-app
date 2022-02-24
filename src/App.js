import './App.scss'
import {Button} from 'react-bootstrap';
import {Link , Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>My App</h1>
        <nav style={{paddingBottom:'1rem' , borderBottom:'1px solid',textAlign:'center'}}>
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
        <Link to ='/FAQ'>
          <Button variant="light">
             FAQ
          </Button>
        </Link>
        </nav>
        <Outlet />
      </div>
  )
}

export default App;
