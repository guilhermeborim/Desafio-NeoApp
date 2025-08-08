import axios from "axios";
import Md5 from "md5";

const PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
const BASE_URL = "https://gateway.marvel.com/v1/public";

const getAuthParams = () => {
  const ts = new Date().getTime().toString();
  const hash = Md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  return { ts, apikey: PUBLIC_KEY, hash };
};

export const fetchComics = async () => {
  const { ts, apikey, hash } = getAuthParams();
  try {
    const response = await axios.get(`${BASE_URL}/comics`, {
      params: {
        ts,
        apikey,
        hash,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error({
      message: error.message,
      stack: error.stack,
    });

    throw new Error(
      error.response?.data?.status || error.message || "Ocorreu um erro"
    );
  }
};

export const fetchComicById = async (id) => {
  try {
    if (!id) {
      throw new Error("ID da comic não fornecido");
    }
    const { ts, apikey, hash } = getAuthParams();
    const response = await axios.get(`${BASE_URL}/comics/${id}`, {
      params: { ts, apikey, hash },
    });
    return response.data.data.results[0];
  } catch (error) {
    console.error({
      message: error.message,
      stack: error.stack,
    });

    throw new Error(
      error.response?.data?.status || error.message || "Ocorreu um erro"
    );
  }
};
