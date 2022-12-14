import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Create from "./component/Create";
import Update from "./component/Update";
import Single from "./component/Single";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
