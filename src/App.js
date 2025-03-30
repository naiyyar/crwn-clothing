import { Routes, Route } from "react-router-dom";

import Home from './routes/home/home.component.jsx'
import Navigation from "./routes/navigation/navigation.component.jsx"

const Shop = () => {
  return(
    <h1>This is Shop page!</h1>
  )
}

const Contact = () => {
  return(
    <h1>This is Contact page!</h1>
  )
}

const Signin = () => {
  return(
    <h1>This is Siginin page!</h1>
  )
}
  
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
  )
}
export default App;
