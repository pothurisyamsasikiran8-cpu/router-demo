import Home from './Home'
import About from './About'
import Contact from './contact'
import Login from './Login'
import Dashboard from './Dashboard'
import Profile from './Profile'
import { BrowserRouter,Routes,Route,Link} from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>|<Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|<Link to="/login">Login</Link>|<Link to="/dashboard">Dashboard</Link>|<Link to="/profile">Profile</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
