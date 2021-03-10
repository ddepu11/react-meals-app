import React, { useState, useEffect } from "react";
import "./App.css";
import Categories from "./components/Categories";
import meals from "./data";

function App() {
  const [mealsArr, setMealsArr] = useState([]);

  const [categories, setCategories] = useState([
    "breakfast",
    "lunch",
    "shakes",
  ]);

  useEffect(() => {
    setMealsArr(meals);
  }, []);

  const handleClick = (e) => {
    const c = e.target.innerText.trim();
    if (c === "All") {
      setMealsArr(meals);
    } else {
      setMealsArr(meals.filter((item) => item.category === c));
    }
  };

  return (
    <div className="container">
      <h2>Todays Meals</h2>
      <div className="line"></div>
      <div className="categories">
        <ul>
          <button onClick={handleClick}>All</button>
          {categories.map((item, index) => (
            <Categories key={index} text={item} handleClick={handleClick} />
          ))}
        </ul>
      </div>
      <main>
        {mealsArr.map(({ img, price, desc, title }, index) => {
          return (
            <div key={index} className="meal">
              <img src={img} alt="" />
              <div className="info">
                <div className="top flex">
                  <h3>{title}</h3>
                  <p>&#8377;{price}</p>
                </div>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
