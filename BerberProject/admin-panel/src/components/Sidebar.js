import { Link } from "react-router-dom"

const Sidebar = () => {
  
  return (
    <div className='sidebar'>
      <div>
        <h1><a href='/'>Admin Panel</a></h1>
        <nav>
            <Link to="/randevular">
              <span>Randevular</span>
            </Link>
        </nav>
      </div>
   
    </div>
  )
}

export default Sidebar