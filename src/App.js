

// React Routing
import { Route, Routes } from 'react-router-dom'

// Import Components
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from './routes/authentication/authentication.component';


const Shop = () => {
  return (
    <h1>HELLO</h1>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index={true} element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<Authentication />} />
      </Route>
    </Routes >
  );
};

export default App;
