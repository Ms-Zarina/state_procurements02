import './App.css'
import Header from './components/layout/Header'

import {Routes, Route} from "react-router-dom";
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import AnnouncPage from './pages/AnnouncPage/AnnouncPage';
import ReestrPage from './pages/ReestrPage/ReestrPage';
import ComplaintsPage from './pages/СomplaintsPage/ComplaintsPage';
import HelpPage from './pages/HelpPage/HelpPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


function App() {


  return (
    <>
      <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/> 
                <Route path={'/announc'} element={<AnnouncPage/>}/>
                <Route path={'/reestr'} element={<ReestrPage/>}/>
                <Route path={'/complains'} element={<ComplaintsPage/>}/>
                <Route path={'/help'} element={<HelpPage/>}/>
                <Route path={'/contact'} element={<ContactsPage/>}/>
            </Route>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
        </Routes>
    </>

  )
}

export default App
