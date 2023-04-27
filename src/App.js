import './App.scss';
import Header from './Components/Header';
import Home from './Components/Home';
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import './css/Home.scss';
import './css/Experience.scss';
import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom";


function App() {
  const router =createBrowserRouter(  
    createRoutesFromElements(
          <Route path='/' element={<Header/>}>
          <Route path='/mahipalsingh' element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
