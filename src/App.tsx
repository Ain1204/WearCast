import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

import DefaultLayout from "./routes/Defaultlayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
