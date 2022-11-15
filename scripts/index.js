"use strict";

let menu = 
{
drinks : 
[
    "Water", "Tea", "Sweet Tea",
    "Coke", "Dr. Pepper", "Sprite",
     "Pepsi", "Beer", "Orange Soda"
],
entrees : 
[
    "Hamburger w/ Fries",
    "Turkey Club w/ Fries",
    "Grilled Chicken w/ Veggies",
    "Veggie Plate" 
],
desserts: 
[
    "Cheesecake", "Chocolate Cake", "Chocolate Chip Cookie",
    "Mousse Cake", "Tiramisu"
]
};

window.onload = function () 
{
    const menuList = document.getElementById("menuList");
    const foodList = document.getElementById("foodList")
    menuList.onchange = foodListChange;
}

function foodListChange() {
    const currentChoice = document.getElementById("menuList").value;
    const foodListBox = document.getElementById("foodList");

    if (currentChoice == "drink")/*this calls option value */
    {
        let drinks = menu.drinks;           //line 39 - 42
        let length = drinks.length;        /* Section off the part of menu I need to display */
        foodListBox.length = 0;
        for(let i = 0; i < length; i++)
        {
            let makeOption = new Option(drinks[i]);
            foodListBox.appendChild(makeOption);
        }
    }
    else if (currentChoice == "dessert")/*this calls option value */
    {
        let desserts = menu.desserts;        //line 50 - 53
        let length = desserts.length;       /* Section off the part of menu I need to display */
        foodListBox.length = 0;
        for(let i = 0; i < length; i++)
        {
            let makeOption = new Option(desserts[i]);
            foodListBox.appendChild(makeOption);
        }
    }
    else if (currentChoice == "entree")/*this calls option value */
    {
        let entrees = menu.entrees;         //line 61 - 64
        let length = entrees.length;        /* Section off the part of menu I need to display */
        foodListBox.length = 0;             
        for(let i = 0; i < length; i++)
        {
            let makeOption = new Option(entrees[i]);
            foodListBox.appendChild(makeOption);
        }
    }



}