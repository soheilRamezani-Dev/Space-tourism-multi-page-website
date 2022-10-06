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
            <Route path="destination" element={<Destination/>}></Route>
            <Route path="crew" element={<Crew />}></Route>
            <Route path="technology" element={<Technology />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
