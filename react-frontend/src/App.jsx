import { Outlet } from "react-router-dom";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default App;
