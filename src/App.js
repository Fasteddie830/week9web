import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Navigation from "./components/Navigation";
import NoPage from "./components/NoPage";
import Person from "./components/Person";
import People from "./components/People";
import { people } from "./data/Data";
import DisplayFoodItems from "./components/DisplayFoodItems";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="AboutUs" element={<People people={people} />} >
            <Route path=":personId" element={<Person people={people} />} /></Route>
          <Route path="Locations" element={<Locations />} />
          <Route path="DisplayFoodItems" element={<DisplayFoodItems/>}></Route>
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
