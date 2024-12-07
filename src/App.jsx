import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import HomePage from './HomePage';
import NewPage from "./kyc_form/NewPage";
// import PaymentPage from './PaymentPage';
import Steps from "./kyc_form/Steps";
import ReviewComponent from "./kyc_form/ReviewComponent";
import AboutUs from "./kyc_form/AboutUs";
import ContactUs from "./kyc_form/ContactUs";
import Transaction from "./kyc_form/Transaction";
import { Home } from "lucide-react";
import UserForm from "./kyc_form/UserForm";
import React from "react";

function App() {

  return (
    <>
      
      <BrowserRouter>
      
        <Routes>

        <Route path="/" element = {<HomePage/>}>
        {/* <Steps /> */}
        </Route>
        <Route path="/kyc" element = {<NewPage/>}></Route>
        <Route path="/user" element = {<UserForm/>}></Route>
        <Route path="/pay" element = {<Transaction/>}></Route>
        <Route path="/step" element = {<Steps/>}></Route>
        <Route path="/review" element = {<ReviewComponent/>}></Route>
        <Route path="/about" element = {<AboutUs/>}></Route>
        <Route path="/transaction" element = {<Transaction/>}></Route>
      
        <Route path="/contact" element = {<ContactUs/>}></Route>






  



        </Routes>
    
      </BrowserRouter>

    </>
  )
}

export default App
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./HomePage";  // Your Home Page Component
// import Steps from "./Steps";  // Your Steps Component

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/steps" element={<Steps />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;