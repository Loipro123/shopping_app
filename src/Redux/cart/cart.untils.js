export const addItemtoList = (listItems, addItem) => {
   const checkExist = listItems.find(item => item.id === addItem.id);

   if (checkExist) {
       return listItems.map(item => 
          item.id === addItem.id? {
            ...item, quantity: item.quantity +1
         }: item
       )
   }
      
   return [...listItems, {...addItem, quantity: 1}]
}
