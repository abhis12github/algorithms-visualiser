import React from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import SotingVisualiser from "./components/sortingvisulaiser";
import SearchingVisualiser from "./components/searchingvisualiser";
import GraphVisualiser from './components/graphvisualiser';


const router=createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>
  },
  {
    path:"/Home/Sorting",
    element:<SotingVisualiser></SotingVisualiser>
  },
  {
    path:"/Home/Searching",
    element:<SearchingVisualiser></SearchingVisualiser>
  },
  {
    path:"/Home/Graph",
    element:<GraphVisualiser></GraphVisualiser>
  }
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
