import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasePage1 from "./Components/BasePage1";
import BasePage2 from "./Components/BasePage2";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import NoPage from "./Components/NoPage";
import OtherLayout from "./Components/OtherLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/other-thing" element={<OtherLayout />}>
          <Route index element={<Home />} />
          <Route path="base1" element={<BasePage1 />} />
          <Route path="base2" element={<BasePage2 />} />

          <Route path="lol" element={<Layout />}>
            <Route path="base1" element={<BasePage1 />} />
            <Route path="base2" element={<BasePage2 />} />
          </Route>

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
