import Header from "./components/Header"
import Game from "./components/Game"
import Home from "./components/Home"
import About from "./components/About";
import { Route , Routes } from "react-router-dom"

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} /> 
                <Route path="/game" element={ <Game/>} /> 
                <Route path="/about" element = {<About/>} />
            </Routes>
       
        </>
        
    )}

export default App
