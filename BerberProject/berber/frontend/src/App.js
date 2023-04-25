import { Route, Routes } from "react-router-dom";

import Randevu from "./pages/Randevu";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
   
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/randevu" element={<Randevu />} />
      </Routes>
    </div>
  );
}

export default App;
