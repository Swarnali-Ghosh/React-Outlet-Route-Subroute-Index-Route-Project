import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import './App.css'
import Animal from "./subpages/Animal";
import Water from "./subpages/Water";
import Tree from "./subpages/Tree";
import Alphonso from "./treeSubPage/Alphonso";
import Amrapali from "./treeSubPage/Amrapali";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Index Route - A child route with no path that renders in the parent's outlet at the parent's URL. */}
          <Route path="blogs" element={<Blog />} >
            <Route index element={<Animal />} />
            <Route path="animal" element={<Animal />} />
            <Route path="tree" element={<Tree />} >
              <Route index element={<Amrapali />} />
              <Route path="Amrapali" element={<Amrapali />} />
              <Route path="Alphonso" element={<Alphonso />} />
            </Route>
            <Route path="water" element={<Water />} />
          </Route>

          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
