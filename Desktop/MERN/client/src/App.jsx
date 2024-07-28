/*
React Router DOM is a library that provides navigation and routing functionalities to React applications. 
It allows developers to create a single-page application with dynamic, client-side routing, enabling a more 
seamless and responsive user experience.
*/

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Service} from "./pages/Service";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Navbar} from "./components/Navbar";
import {Error} from "./pages/Error";
import { Footer } from "./components/Footer";
const App = () => {
  return (<>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/contact" element= {<Contact/>} />
        <Route path="/service" element= {<Service/>} />
        <Route path="/register" element= {<Register/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  )
}; 

export default App;