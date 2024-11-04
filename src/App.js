
import './CSS/App.css';
import Navbar from './components/navbar';
// import Accordion from './components/accordion';
import TextState from './components/useState'
import Alert from './components/alert'
import About from './components/about'
import Services from './components/Services';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  function darkmode() {
      if(mode==="light")
        {
          setMode("dark")
        document.body.style.backgroundColor= 'gray';
        showalert('success ',' Enabled Dark Mode')
        }
      else
      {
        setMode("light");
        document.body.style.backgroundColor= 'white';
        showalert('warning',' Disabled Dark Mode')

      }
  }

  const [alert, setalert] = useState(null);

  let showalert= (type,message)=>{
    setalert({
      msg:message,
      type:type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  return (
    
    <>

      <Router>
      <Navbar title="TextUtils" mode={mode} darkmode={darkmode} showalert={showalert}/>
      
      <Alert alert={alert} />

      <Routes>
        <Route path='/' element={<TextState mode={mode} showalert={showalert}/>} />
          
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services/>} />
        
      </Routes>
      </Router>
      

      
    </>
    
  );
}

export default App;
