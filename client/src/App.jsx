import InstancesPage from "./pages/instancesPage/InstacesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/instances" element={<InstancesPage />} />
        <Route path="/*" element={<InstancesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
