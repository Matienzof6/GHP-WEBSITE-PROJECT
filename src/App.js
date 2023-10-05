import Error404 from "containers/errors/Error404"
import Home from "containers/pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import {NextUIProvider} from "@nextui-org/react";
import About from "containers/pages/About";
import Contact from "containers/pages/Contact";
import Services from "containers/pages/Services";

function App() {
  return (
    <NextUIProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </NextUIProvider>
  );
}

export default App;