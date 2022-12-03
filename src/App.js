import Header from "./components/Header/Header";
import { lazy } from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Home from "./components/home/Home"

const Destination= lazy(()=>import("./components/destination/Destination"));
const Crew= lazy(()=>import("./components/crew/Crew"));
const Technology= lazy(()=>import("./components/technology/Technology"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />}></Route>
            <Route path="destination">
                <Route path=":destination_name" element={<Destination/>}></Route>
                <Route path="" element={<Navigate to="moon"/>}></Route>
            </Route>
            <Route path="crew">
                <Route path=":crew_name"  element={<Crew />}></Route>
                <Route path="" element={<Navigate to="douglas-hurley"/>}></Route>
            </Route>
            <Route path="technology">
                <Route path=":technology_name" element={<Technology />}></Route>
                <Route path="" element={<Navigate to="launch-vehicle"/>}></Route>
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
