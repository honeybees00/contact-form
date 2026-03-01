
import './App.css'
import {home} from 'pages/Home'
import {ContactPage} from 'Pages/ContactPage'
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  

  return (
    
    <BrowserRouter>
    <nav>
      <link to='/'>Home</link>{""}
    <link to='/'>about</link>{""}
    <link to='/'>Contact</link>{""}
    </nav>
    <Route>
    <Route path= "/" element={<home/>}/>
    <Route path="/" element={<ContactPage/>}/>
    </Route>
    </BrowserRouter>
  );   
  }
      export default App