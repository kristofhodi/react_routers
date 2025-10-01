import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Welcome to the ultimate page where you can calculate shit</h1>

      <Link to="/szamologep"><button>Számologép</button></Link>
      <Link to="/atvalto"><button>Átváltás</button></Link>
      <Link to="/bmi"><button>Bmi</button></Link>
      <Link to="/homerseklet"><button>Hőmérséklet</button></Link>

    </>
  )
}

export default App