
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"

import { useEffect } from "react";
import { useUser } from "./context/userContext";
// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// Pages
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Randevular from "./pages/Randevular";

const App = () => {

  const navigate = useNavigate();
  const {user} = useUser();
  
  useEffect(() => {
    !user && navigate("/login");
}, [user, navigate])


  const url = useLocation();

  return (
    <>
    {url.pathname !== "/register" && url.pathname !== "/login" &&  <Sidebar />}
      <div className="content">
      {url.pathname !== "/register" && url.pathname !== "/login" &&  <Header />}
        <Routes>


          <Route path="/randevular" element={<Randevular />} />         
          <Route path="/" element={<Main /> } />
          <Route path="/login" element={<Login />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;