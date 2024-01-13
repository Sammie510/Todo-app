import React from 'react'

const ListContext = React.createContext({
  listItems: [],
  addItems: (item) => { },
  filterItems: (item) => { },
  clearAllItems: () => { }

})
export default ListContext