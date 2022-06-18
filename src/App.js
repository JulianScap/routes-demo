import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentPage1 from "./Components/ContentPage1";
import ContentPage2 from "./Components/ContentPage2";
import Login from "./Components/Login";
import Settings from "./Components/Settings";
import NoPage from "./Components/NoPage";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
        </Route>

        <Route path="/main" element={<MainPage />}>
          <Route path="content1" element={<ContentPage1 />} />
          <Route path="content2" element={<ContentPage2 />} />

          <Route path="settings" element={<Settings />}>
            <Route path="setting1" element={<ContentPage1 />} />
            <Route path="setting2" element={<ContentPage2 />} />
          </Route>

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
