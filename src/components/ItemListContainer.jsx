
import { useEffect, useState } from "react";
import React from 'react';
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import ClipLoader from "react-spinners/ClipLoader";



const ItemListContainer = () => {

  const [loading, setLoading] = useState(false);
  useEffect(()=> {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)

    },1500)
  },[])



  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");



  const category = useParams().category
  console.log(category);

  useEffect(() => {

   

    const productosRef = collection(db, "productos");

    const q = category ? query(productosRef, where("category", "==", category)) : productosRef;



    getDocs(q)
      .then((res) => {


        setProductos(

          res.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })

        )
      })
 
  }, [category])

  return (
    <div className='Spinner'>
    {
      loading ?
      <ClipLoader
      color={`#7950f2`}
      loading={loading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    :
    
   
   
      <ItemList productos={productos} titulo={titulo} />
    }
  </div>
  
  )
};

export default ItemListContainer;