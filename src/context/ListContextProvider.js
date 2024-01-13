import React, { useState } from 'react'
import ListContext from './list-context'

const ListContextProvider = ({ children }) => {
  let lists = []
  const [listItems, setListItems] = useState(lists)

  const addItems = (item) => {
    setListItems(prevLists => {
      return [item, ...prevLists]
    })
  }
  const filterItems = (item) => {
    setListItems(item)
    console.log(item)
  }
  const clearAllItems = () => {
    setListItems([])
  }
  return (
    <ListContext.Provider value={
      {
        listItems,
        addItems: addItems,
        filterItems: filterItems,
        clearAllItems: clearAllItems
      }
    }>
      {children}
    </ListContext.Provider>
  )
}

export default ListContextProvider