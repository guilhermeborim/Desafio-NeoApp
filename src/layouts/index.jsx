import { Outlet } from "react-router";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
