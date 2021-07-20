import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/MainComponents/Footer";

import Header from "./components/MainComponents/Header";
import AppRoutes from "./routes/index.routes";
import { GlobalStyles } from "./styles/globalStyles";
// import { useDispatch, useSelector } from "react-redux";
// import { bindActionCreators } from "redux";

// import { UserActionCreator, State } from "./Reducers";

function App() {
  // const dispatch = useDispatch();
  // // const { setEmail } = bindActionCreators(UserActionCreator, dispatch);
  // const { email } = useSelector((state: State) => state.user);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />

      <AppRoutes />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
