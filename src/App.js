import Destination from "./components/destination/Destination";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Crew from "./components/crew/Crew";
import Technology from "./components/technology/Technology";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />}></Route>
            <Route path="destination">
                <Route path=":destination_moon" element={<Destination/>}></Route>
                <Route path="" element={<Destination/>}></Route>
            </Route>
            <Route path="crew">
                <Route path=":crew_name"  element={<Crew />}></Route>
                <Route path=""  element={<Crew />}></Route>
            </Route>
            <Route path="technology">
                <Route path=":technology_name" element={<Technology />}></Route>
                <Route path="" element={<Technology />}></Route>
            </Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
