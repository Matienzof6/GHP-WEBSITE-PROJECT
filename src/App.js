import Error404 from "containers/errors/Error404"
import Home from "containers/pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;