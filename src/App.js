import logo from './resim_banksy.jpg';
import './App.css';
import react,{useState} from "react"
import Header from "./component/Header.js"
import Content from './component/Content';
import Footer from './component/Footer';

function App() {
  const [count,setCount]=useState(0);
  return (

   <div className='App'>
     <Header count={count}></Header>
     <Content/>
     <Footer setCount={setCount} count={count} ></Footer>
     
   </div>

  )
}

export default App;
