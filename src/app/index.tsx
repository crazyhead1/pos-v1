import React from "react";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import AppLayout from "../ui/app-layout";
import { Provider } from "react-redux";
import store from "../redux/store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Toaster position="bottom-right" reverseOrder={false} />
        <AppLayout />
      </Provider>
    </div>
  );
}

export default App;
