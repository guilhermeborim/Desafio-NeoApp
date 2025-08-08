import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartDrawer from "../../components/cart/cart";
import ComicsList from "../../components/comics/comicsList";
import Loading from "../../components/loading/loading";
import { loadComics } from "../../slices/comics/slice";

function HomePage() {
  const dispatch = useDispatch();
  const { items: comics, loading } = useSelector((state) => state.comics);

  useEffect(() => {
    dispatch(loadComics());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <CartDrawer />
      <ComicsList comics={comics} />
    </>
  );
}

export default HomePage;
