import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarMenu  from "./components/Menu";
import HomePage  from "./pages/HomePage";
import Header  from "./components/Header";
import SobreNosotros from "./pages/SobreNosotros";


function App() {
  return (   
    <ChakraProvider>
      <BrowserRouter>        
        <SidebarMenu />           
          <Routes>            
              <Route path="/HomePage" element={<HomePage/>} />
              <Route path="/SobreNosotros" element={<SobreNosotros/>} />
              <Route path="/Tareas" element={<Header/>} />            
          </Routes>          
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
