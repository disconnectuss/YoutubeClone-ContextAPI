import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from "./pages/Feed"
import VideoDetail from "./pages/VideoDetail"
import Header from "./components/Header"



function App() {


  return (
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={<Feed/>} />
      <Route path="/watch/:videoId" element={<VideoDetail/>} />
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
 