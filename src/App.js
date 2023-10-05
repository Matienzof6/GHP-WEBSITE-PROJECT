import Error404 from "containers/errors/Error404"
import Home from "containers/pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </NextUIProvider>
  );
}

export default App;