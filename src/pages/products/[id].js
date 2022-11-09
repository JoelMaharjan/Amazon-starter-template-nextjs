import Header from "../../Component/Header";
import { useRouter } from "next/router";
import ProductDetailsComponent from "../../Component/ProductDetailsComponent";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from 'react-currency-formatter'
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

//component

export default function ProductDetails({
    title,
    ratings,
    price,
    description,
    category,
    image,
    hasPrime,}
) {
    const dispatch = useDispatch()
    const router = useRouter();
    const id = router.query.id

    const addItemsToBasket = () => {
      const products = {
          id,
          title,
          ratings,
          price,
          description,
          category,
          image,
          hasPrime,
      }
  // push into redux
  dispatch(addToBasket(products))
}


    const [product, setProduct] = useState([]);

    useEffect(() => {
      const fetchProduct = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json();
        setProduct(data)
    }
    fetchProduct();
    }, [])


  return (
    <div className="bg-gray-100">
      <Header />
       <main className="lg:flex max-w-screen-2xl mx-auto ">
       <div className="flex-grow m-5 shadow-sm">


        <div>
        <div className="flex flex-col p-5 space-y-10 bg-white ">
          <h1 className="font-extrabold text-gray-500">{product.category}</h1>
          <img 
              src = {product.image}
              width={300}
              height={300}
              objectFit="contain" 
          />
          <div className="my-20">
          <h5 className="text font-extrabold">{product.title}</h5>
          

          <div className="flex">
                        {Array(ratings)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key = {i} className="h-5 text-yellow-500" />
                        ))}
                    </div >
                    <p className="text-l my-5" >{product.description} {product.description}</p>
                    <Currency 
                     quantity = {product.price} />
                        
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 mx-2 my-auto justify-self-end">
                  <button className="mt-auto button" onClick={addItemsToBasket}>Add to Basket</button>
        </div>

        </div>
        </main>
    </div>
  )
}







