import Image from "next/image"
import { useState } from "react"
import { StarIcon } from "@heroicons/react/solid";
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useRouter } from "next/router";

const MIN_RATING = 1;
const MAX_RATING = 5;

function Product({id, title, price, description, category, image}) {

  const router = useRouter()
  const dispatch = useDispatch()
  const [ratings] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() > 0.5)

  const addItemsToBasket= ()=>{
    const product ={
      id, 
      title, 
      price, 
      description,
      category, 
      image,
      ratings,
      hasPrime,
    };
    //sending an product to an action to the Redux store ... the basket
    dispatch(addToBasket(product));
  }

  return (
    <div className="relative flex flex-col m-5  bg-white p-10 z-30">
      <p className="absolute top-2 right-2 text-xs italic text-gray-500">{category}</p>

      <Image
        className="cursor-pointer"
        onClick= {() => router.push(`/products/${id}`)}
        src={image} width={200} height={200} objectFit="contain" />
      
      <h4>{title}</h4>

      <div className="flex">
        {Array(ratings).fill()
        .map((_,i) => (
          <StarIcon className="h-5 text-yellow-500"/>
        ))} 
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-400">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemsToBasket} className="mt-auto button">Add to Basket</button>
    </div>
  )
}

export default Product
