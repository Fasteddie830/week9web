import React, {useState} from 'react';
import Item from "./Items";
import { items } from '../data/FoodData'
import Nutrition from './Nutrition';

const DisplayFoodItems = () => {
    const [selectedItem, setSelectedItem] = useState({})
    const handleClick = (currentItem) => {
    setSelectedItem(currentItem)
    }
    return (
        <>        <ul>
            {items.map((food) => {
                return (
                    <li key={food.id} onClick={() => handleClick(food)}> 
                    <Item item={food}></Item></li>
                )
            })}
        </ul>
        <h1>Name: {selectedItem.name}</h1>
        <h1>Description: {selectedItem.description}</h1>
        <h1>Price: {selectedItem.price}</h1>
        </>

    );
};

export default DisplayFoodItems;