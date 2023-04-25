import { useNavigate } from 'react-router'
import { useUser } from '../context/userContext';

const Header = () => {

    const {setUser} = useUser();

    const navlink = useNavigate();


    const logout = () => {
        setUser("");
        navlink("/login");
        localStorage.setItem("user", "");
    }


    return (
    <header className='header'>
        
        <button className='logout' onClick={() => logout()}>Logout</button>

    </header>
  )
}

export default Header