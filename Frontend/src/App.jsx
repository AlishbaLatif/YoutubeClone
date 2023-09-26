import HomeScreen from "./components/HomeScreen";
import "./app.scss"
import LoginScreen from "./components/LoginScreen";
import {Routes,Route} from "react-router-dom"
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <>
  
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<HomeScreen/>}/>
      </Route>
    <Route path="login" element={<LoginScreen/>}/>
    <Route  path="*" element={<ErrorPage />} />
    </Routes>
 
    </>
  )
}

export default App
