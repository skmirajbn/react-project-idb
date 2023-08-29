import Footer from "../components/sections/Footer";
import Header from "../components/sections/header";

export default function Page404() {
  return (
    <div>
      <Header />
      <div className="container py-56 text-center text-4xl text-red-600">
        OOPS! <i className="fa-solid fa-triangle-exclamation"></i> 404 Not Found
      </div>
      <Footer />
    </div>
  );
}
