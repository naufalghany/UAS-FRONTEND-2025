import Home from "./pages/Home.jsx";
import { CovidDataProvider } from "./contexts/DataCovidProvider.jsx";
import Layout from "./layouts/index.jsx";
import { Routes, Route } from "react-router-dom";
import Indonesia from "./pages/Indonesia.jsx";
import Province from "./pages/Province.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <CovidDataProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/indonesia" element={<Indonesia />} />
          <Route path="/province" element={<Province />} />
        </Routes>
      </Layout>
    </CovidDataProvider>
  );
}

export default App;
