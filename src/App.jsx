import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection } from "./firebase";

export const AppContext = createContext({
  categories: []
});

export default function App() {
  const [categories, setCategories] = useState([]);

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
  }, []);
  
  return (
    <div className="App">
      <AppContext.Provider value={{ categories }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h2>About</h2>} />
            <Route path="/category/:path" element={<Category />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
