import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ 
  selectedCategory, 
  newItemName, 
  onItemFormSubmit,
  handleNewCategory, 
  handleNewItemName 
}) {

  return (
    <form className="NewItem">
      <label>
        Name:
        <input onChange={handleNewItemName} type="text" name="name" value={newItemName}/>
      </label>

      <label>
        Category:
        <select onChange={handleNewCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button onClick={onItemFormSubmit} type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
