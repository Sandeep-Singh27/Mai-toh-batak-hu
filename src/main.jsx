import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Contacts from './pages/Contacts.jsx';
import Skills from './pages/Skills.jsx';
import GoToGif from './pages/GoToGif.jsx';
import SingleGif from './pages/SingleGif.jsx';


const router = createBrowserRouter([
{
 path:"/",
 element:<Home/>},
{
 path:"/Skills",
 element:<Skills/> },
{
 path:"/Contacts",
 element:<Contacts/>},
{
 path:"/watch-meme-gif",
 element:<GoToGif/>},
 {
 path:"/watch-meme-gif/:meme_name",
 element:<SingleGif/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
