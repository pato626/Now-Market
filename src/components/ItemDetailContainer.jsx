import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import ClipLoader from "react-spinners/ClipLoader";



const ItemDetailContainer = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    }, 1000)
  }, [])


  const [product, setProduct] = useState(null);
  const id = useParams().id;


  useEffect(() => {

    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((res) => {
        setProduct(
          { ...res.data(), id: res.id }
        );
      })


  }, [id])


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
           product && <ProductDetail product={product} />
    }

    </div>





  )
}

export default ItemDetailContainer
