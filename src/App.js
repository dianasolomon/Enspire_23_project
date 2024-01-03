import "./App.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './layout'
import Home from "./pages/Home";
import Events from "./pages/Events";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='event' element={<Events/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" exact element={<Home/>} />
//           <Route path="event" exact element={<Events/>} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

