import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection, productCollection } from "./firebase";
import Cart from "./pages/Cart";

export const AppContext = createContext({
  categories: [],
  products: [],

  // корзина
  cart: {},
  setCart: () => {}
});

export default function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // корзина
  const [cart, setCart] = useState({});

  // выполнить эту функцию только один раз
  useEffect(() => {
    // получить категории из списка категорий
    getDocs(categoryCollection)
      .then(snapshot => {
        // категории будут храниться в snapshot.docs

        // создать массив для категорий
        const newCategories = [];
        // заполнить массив данными из списка категорий
        snapshot.docs.forEach(doc => { // doc = категория
          const category = doc.data();
          category.id = doc.id;

          newCategories.push(category);
        });
        // задать новый массив как состояние комапо
        setCategories(newCategories);
      })

    // получить продукты из списка продуктов
    getDocs(productCollection)
      .then(snapshot => {
        // продукты будут храниться в snapshot.docs

        // создать массив для продуктов
        const newProducts = [];
        // заполнить массив данными из списка продвук
        snapshot.docs.forEach(doc => { // doc = продукт
          const product = doc.data();
          product.id = doc.id;

          newProducts.push(product);
        });
        // задать новый массив как состояние комапо
        setProducts(newProducts);
      })
  }, []);
  
  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h2>About</h2>} />
            <Route path="/category/:path" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
