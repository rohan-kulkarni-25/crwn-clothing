

// React Routing
import { Route, Routes } from 'react-router-dom'

// Import Components
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Home from "./routes/home/home.component";


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
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes >
  );
};

export default App;
