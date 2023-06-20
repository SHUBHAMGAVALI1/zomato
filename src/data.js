const foodItems = [
    {
      id: 1,
      imgsrc: "https://thumbs.dreamstime.com/z/potato-chips-falling-bowl-30060315.jpg",
      foodname: "Potato Chips",
      price: "100rs",
      category: "Breakfast"
    },
    {
      id: 2,
      imgsrc: "https://www.kimscravings.com/wp-content/uploads/2022/06/Chicken-Burgers-5.jpg",
      foodname: "Chicken Burger",
      price: "150rs",
      category: "Lunch"
    },
    {
      id: 3,
      imgsrc: "https://media.istockphoto.com/id/1280329631/photo/italian-pizza-margherita-with-tomatoes-and-mozzarella-cheese-on-wooden-cutting-board-close-up.jpg?b=1&s=170667a&w=0&k=20&c=_t83ocY59IayPnspluN99xOM_RQ5ytAMTfXQperbL_I=",
      foodname: "Margherita Pizza",
      price: "200rs",
      category: "Dinner"
    },
    {
      id: 4,
      imgsrc: "https://www.thespruceeats.com/thmb/mORks6fzag1WgzFL5DKvogm0Ybg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/scrambledeggscreamcheese-bc8a9f84e07944aab5f16b1ee8d36857.jpg",
      foodname: "Scrambled Eggs",
      price: "80rs",
      category: "Breakfast"
    },
    {
      id: 5,
      imgsrc: "https://www.shutterstock.com/image-photo/fresh-tortilla-wraps-vegetables-on-260nw-78721831.jpg",
      foodname: "Veggie Wrap",
      price: "120rs",
      category: "Lunch"
    },
    {
      id: 6,
      imgsrc: "https://thumbs.dreamstime.com/b/grill-chicken-legs-grilled-chicken-legs-bbq-sesame-parsley-tomato-95526623.jpg",
      foodname: "Grilled Chicken",
      price: "250rs",
      category: "Dinner"
    },
    {
      id: 7,
      imgsrc: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHx8MHx8&w=1000&q=80",
      foodname: "Pancakes",
      price: "110rs",
      category: "Breakfast"
    },
    {
      id: 8,
      imgsrc: "https://media.istockphoto.com/id/535164691/photo/bacon-lettuce-and-tomato-blt-sandwich.jpg?s=612x612&w=0&k=20&c=3ZflBaS8LRNe9wDfDZOfVGv7-Id0DDyIC2tiIq2PpHA=",
      foodname: "BLT Sandwich",
      price: "180rs",
      category: "Lunch"
    },
    {
      id: 9,
      imgsrc: "https://media.istockphoto.com/id/1087833940/photo/traditional-pasta-spaghetti-bolognese-in-white-plate-on-wooden-table-background.jpg?b=1&s=170667a&w=0&k=20&c=4m4z714FQxSdwzmszNXTgzQDZmsOH13UzbsDS2ufOm0=",
      foodname: "Spaghetti Bolognese",
      price: "220rs",
      category: "Dinner"
    },
    {
      id: 10,
      imgsrc: "https://t4.ftcdn.net/jpg/00/57/46/15/360_F_57461507_hPHSpEYNNRmSO4nKPrrZuV6hAjQkeSRB.jpg",
      foodname: "Omelette",
      price: "90rs",
      category: "Breakfast"
    },
    {
      id: 11,
      imgsrc: "https://media.istockphoto.com/id/1188412964/photo/hamburger-with-cheese-and-french-fries.jpg?s=612x612&w=0&k=20&c=lmJ0qUjC3FtCrWOGU0hWvqBgXcKZ1imiXKOMuHRfFH8=",
      foodname: "Beef Burger",
      price: "180rs",
      category: "Lunch"
    },
    {
      id: 12,
      imgsrc: "https://media.istockphoto.com/id/1371751060/photo/grilled-medium-rare-top-sirloin-beef-steak-or-rump-steak-on-a-steel-tray-dark-background-top.jpg?s=612x612&w=0&k=20&c=svqnTZV_l7DP0QPCG8L_-f6k7LuBUA-cH9wiL8eJqUs=",
      foodname: "Steak",
      price: "300rs",
      category: "Dinner"
    },
    {
      id: 13,
      imgsrc: "https://media.istockphoto.com/id/171269841/photo/french-toast-with-fruit-and-syrup-on-a-marble-countertop.jpg?s=612x612&w=0&k=20&c=cuv4u6aroVqt8IGD-0kb5BPrXsdob6V9x91IKpRBBWg=",
      foodname: "French Toast",
      price: "120rs",
      category: "Breakfast"
    },
    {
      id: 14,
      imgsrc: "https://static01.nyt.com/images/2021/08/30/dining/as-grilled-cheese-sandwich-on-the-grill/as-grilled-cheese-sandwich-on-the-grill-articleLarge.jpg",
      foodname: "Grilled Cheese Sandwich",
      price: "150rs",
      category: "Lunch"
    },
    {
      id: 15,
      imgsrc: "https://media.istockphoto.com/id/543663322/photo/meat-lasagna.jpg?b=1&s=170667a&w=0&k=20&c=sCZaWMZ3gUG4xMz146sz_SV62WyZp1nV2FVqfi3zZss=",
      foodname: "Lasagna",
      price: "250rs",
      category: "Dinner"
    },
    {
      id: 16,
      imgsrc: "https://www.momontimeout.com/wp-content/uploads/2021/10/waffle-recipe-square.jpeg",
      foodname: "Waffles",
      price: "130rs",
      category: "Breakfast"
    },
    {
      id: 17,
      imgsrc: "https://images.unsplash.com/photo-1579208030886-b937da0925dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmlzaCUyMGFuZCUyMGNoaXBzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      foodname: "Fish and Chips",
      price: "200rs",
      category: "Lunch"
    },
    {
        id: 18,
        imgsrc: "img1.jpg",
        foodname: "Pepperoni Pizza",
        price: "200rs",
        category: "Lunch"
      },
      {
        id: 19,
        imgsrc: "img2.jpg",
        foodname: "Burger",
        price: "150rs",
        category: "Lunch"
      },
      {
        id: 20,
        imgsrc: "img3.jpg",
        foodname: "Fried Chicken",
        price: "250rs",
        category: "Dinner"
      },
      {
        id: 21,
        imgsrc: "img4.jpg",
        foodname: "Steak",
        price: "350rs",
        category: "Dinner"
      },
      {
        id: 22,
        imgsrc: "img5.jpg",
        foodname: "Pancakes",
        price: "100rs",
        category: "Breakfast"
      },
      {
        id: 23,
        imgsrc: "img6.jpg",
        foodname: "Omelette",
        price: "80rs",
        category: "Breakfast"
      },
      {
        id: 24,
        imgsrc: "img7.jpg",
        foodname: "Sushi",
        price: "300rs",
        category: "Dinner"
      },
      {
        id: 25,
        imgsrc: "img8.jpg",
        foodname: "Taco",
        price: "120rs",
        category: "Lunch"
      },
      {
        id: 26,
        imgsrc: "img9.jpg",
        foodname: "Grilled Cheese Sandwich",
        price: "90rs",
        category: "Lunch"
      },
      {
        id: 27,
        imgsrc: "img10.jpg",
        foodname: "French Fries",
        price: "70rs",
        category: "Snacks"
      },
]
  
export default foodItems;
