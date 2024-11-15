import { useState } from 'react'
import './App.css'
import {Footer, Header, NewsPanel, Sidebar} from './components'

function App() {
  
  const [isSidebarVisible,setIsSidebarVisible] = useState(false)
  const [category, setCategory] = useState('general')

  const toggleSidebar = ()=>{
    console.log("Toggle clicked")
    setIsSidebarVisible((prev)=>!prev)
    console.log(`isSideBarvisible:${isSidebarVisible}`)
  }

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    setIsSidebarVisible(false); // Close sidebar after selecting a category
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar}/>
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} changeCategory={changeCategory}/>
      <NewsPanel category={category}/>
      <Footer />
    </>
  )
}

export default App
