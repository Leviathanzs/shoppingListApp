import Header from "./header"
import GroceryList from "./GroceryList"
import Form from "./Form"
import Footer from "./Footer"
import { useState } from "react"

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];



export default  function App () { 
  const [items, setItems] = useState(groceryItems)

  function handleAddItem (item) {
    setItems([...items, item])

  }

  function handleDeleteItem (id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToogleItem (id) {
    setItems((items) => items.map((item) => item.id === id ? {...item, checked: !item.checked} : item))
  }

  function handleClearItems () {
    setItems([])
  }

  return ( 
    <>
      <Header />
      <Form onAddItem = {handleAddItem} />
      <GroceryList items = {items} onDeleteItem = {handleDeleteItem} onToogleItem = {handleToogleItem} 
      onClearItems = {handleClearItems} /> 
      <Footer items={items}/>
    </>
  );
  }

