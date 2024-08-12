import Item from "./Item";


const ItemList = ({productos, titulo}) => {
  return (
    <div>
         
      
         
      {
        
        productos.length > 0 &&
        productos.map((producto) => {

          return (

            <Item producto={producto} key={producto.id}/>
          )
        })


      }
    </div>
  )
};

export default ItemList
