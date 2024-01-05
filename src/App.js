import './App.css';
import Header from './components/header';
import Productdetail from './components/productdetail';
import Productlisting from './components/productlisting';
import Productcomponent from './components/productcomponent';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <Header/>
      <br></br>
      <p></p>
      <BrowserRouter>
      <Routes>
        {/* { <Route path="/" element={<Header/>}/>} */}
         {/* <Route><Header/></Route> */}
         {/* <Switch> */}
        <Route path="/product/:productId" element={<Productdetail/>}/>
        <Route path="/" element={<Productlisting/>}/>
        <Route path="/pc" element={<Productcomponent/>}/>
        <Route>404 not found</Route>
        {/* </Switch> */}
      </Routes>
      </BrowserRouter> 
      {/* </Provider>  */}
    </div>
  );
}

export default App;
