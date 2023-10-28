import React from "react";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
// import "boxicons/css/boxicons.min.css";
import AppLayout from "../ui/app-layout";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import history from "../ui/common/constants";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Toaster position="bottom-right" reverseOrder={false} />
        <HistoryRouter history={history}>
          <AppLayout />
        </HistoryRouter>
      </Provider>
    </div>
  );
}

export default App;
