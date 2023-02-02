import Home from "./routes/home/home.component";

// React Routing
import { Route, Routes } from 'react-router-dom'


const Shop = () => {
  return (
    <h1>HELLO</h1>
  );
};

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>HOME</h1>
      </div>
      <div>
        <h1>HOME</h1>
      </div>
      <div>
        <h1>HOME</h1>
      </div>
      <div>
        <h1>HOME</h1>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route path="/home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes >
  );
};

export default App;
