import './App.css'
import { Routes,Route } from 'react-router-dom'
import { BeAMember,Blogs,Home,Sessions,TeamMembers } from './pages'
import { Navbar,Footer, Blog1 } from './components'


function App() {
    return (
    <>
    <Navbar/>
    
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/blogs' element={<Blogs />} ></Route>
        <Route path='/sessions' element={<Sessions />} ></Route>
        <Route path='/teamMembers' element={<TeamMembers />} ></Route>
        <Route path='/beAMember' element={<BeAMember />} ></Route> 
        <Route path='/2Dpathplanning' element={<Blog1 />} ></Route> 

      </Routes>
      <Footer/>

    </div>
    
    </>
  )
}

export default App
