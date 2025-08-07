import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartDrawer from "../../components/cart/cart";
import ComicsList from "../../components/comics/comicsList";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { loadComics } from "../../slices/comics/slice";

function HomePage() {
  const dispatch = useDispatch();
  const { items: comics } = useSelector((state) => state.comics);

  useEffect(() => {
    dispatch(loadComics());
  }, [dispatch]);

  return (
    <>
      <Header />
      <CartDrawer />
      <ComicsList comics={comics} />
      <Footer />
    </>
  );
}

export default HomePage;
