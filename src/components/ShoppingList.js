import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, search, handleSearch, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [newItemName, setNewItemName] = useState('')
  const [newCategory, setNewCategory] = useState('Produce')

  function handleNewItemName(e) {
    e.preventDefault()
    setNewItemName(e.target.value)
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    console.log(event.target.value)
  }

  function handleNewCategory(e) {
    e.preventDefault()
    setNewCategory(e.target.value)
  }


  function onItemFormSubmit(e) {
    e.preventDefault()
    let element = {
      id: uuid(),
      name: newItemName,
      category: newCategory
    }
    const updatedItems = [...items, element]
    setItems(updatedItems)
  }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true
    } else {
       return item.category === selectedCategory;
    }
  }) .filter(item => item.name.includes(search))
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} handleNewItemName={handleNewItemName} handleNewCategory={handleNewCategory} newItemName={newItemName} newCategory={newCategory}/>
      <Filter onCategoryChange={handleCategoryChange} handleSearch={handleSearch} search={search}  setSelectedCategory={setSelectedCategory} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item newItemName={newItemName} newCategory={newCategory} key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
