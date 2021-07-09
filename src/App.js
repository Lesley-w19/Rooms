// import React from "react";
// import "./App.css";
// // import { UserProvider } from "./context";
// // import Home from "./components/Home";
// // import Welcome from "./components/Welcome";
// // import Team from "./components/Team";

// function App() {
//   /////functions
//   /////values
//   ///data
//   const isLoggedIn = false;

//   const changeUser = () => {
//     // return { name: "User Changed" };

//     return Math.ceil(100000 + Math.random() * 999999);
//   };

//   console.log(changeUser());

//   const switchUser = () => {
//     const isLogged = isLoggedIn;
//     console.log(isLogged);
//   };

//   return (
//     // <UserProvider
//     //   value={{
//     //     username: "Sophie",
//     //     age: 25,
//     //     isLoggedIn,
//     //     changeUser,
//     //     switchUser,
//     //   }}
//     // >
//     //   <div className="App">
//     //     <Home />
//     // <Welcome/>

//     //   </div>
//     // </UserProvider>

//     <div className="App">
//       <UserProvider
//         value={{
//           username: "Sophie",
//           age: 25,
//           isLoggedIn,
//           changeUser,
//           switchUser,
//         }}
//       >
//         <Home />
//         <Welcome />
//         <Team />
//       </UserProvider>
//     </div>
//   );
// }

import React from 'react'
import Accomodation from './components/Accomodation';
import {Route} from 'react-router-dom';
import RoomDetails from './components/RoomDetails';

function App(){
  return(
  <div>
     <Route path="/accomodation" component={Accomodation} exact/>
   <Route path="/room/:slug" component={RoomDetails} exact/>
  </div>
    
  )
}

export default App;
