import { useState } from "react";
import "./App.css";
import foodItems from "./data";
function App() {
const [food,setfood]=useState(foodItems);

const filterfun=(val)=>{
console.log(val);
const newitems=foodItems.filter((ele)=>{
return ele.category===val;
})
setfood(newitems);
}

  return (
    <>
      <nav>
        <h1>Order Your Favourite Dish Now </h1>
        <div className="allbtn">
          <button className="button" onClick={()=>{setfood(foodItems)}}>All Dish</button>
          <button className="button button2" onClick={()=>{filterfun("Breakfast")}}>Breakfast</button>
          <button className="button button3" onClick={()=>{filterfun("Lunch")}}>Lunch</button>
          <button className="button button4" onClick={()=>{filterfun("Dinner")}}>Dinner</button>
          <button className="button button5" onClick={()=>{filterfun("Evening")}}>Evening</button>
        </div>
      </nav>

      <div className="grid">
        {food.map((ele) => {
          const { id, imgsrc, foodname, price } = ele;
          return (
            <div className="food-card" key={id}>
              <img src={imgsrc}
                alt="Food Image"
              />
              <h3 className="food-name">{foodname}</h3>
              <p className="food-price">{price}</p>
              <button className="button">Order Now</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
