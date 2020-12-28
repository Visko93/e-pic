import * as React from "react";

const CartContext = React.createContext(null);

const BASE_URL =
  "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

export function CartProvider({ children }) {
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    try {
      fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => setPhotos(data));
    } catch (error) {
      throw Error(`This went wrong: ${error}`);
    }
  }, []);
  console.log(photos);
  return (
    <CartContext.Provider value={{ photos }}>{children}</CartContext.Provider>
  );
}
