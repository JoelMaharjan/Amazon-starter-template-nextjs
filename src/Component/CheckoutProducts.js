import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProducts({
    id,
    title,
    ratings,
    price,
    description,
    category,
    image,
    hasPrime,
}){
    const dispatch = useDispatch()

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

    const removeItemsFromBasket = () =>{
        // remove Item from redux
        dispatch(removeFromBasket({ id }))
    }
    return(
        <div>
            <div className="grid grid-cols-5">
                <Image 
                    src={image}
                    height={200}
                    width={200}
                    objectFit="contain"
                />
                {/* Middle */}
                <div className="col-span-3 mx-5">
                    {title}
                    <div className="flex">
                        {Array(ratings)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key = {i} className="h-5 text-yellow-500" />
                        ))}
                    </div >
                        <p className="text-xs my-2 line-clamp-3">{description}</p>
                        <Currency  quantity = {price} />

                        {hasPrime && (
                            <div className="flex items-center space-x-2">
                                <img
                                loading="lazy"
                                className=" w-12"
                                src="https://links.papareact.com/fdw" 
                                alt='' />
                                <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                            </div>
                        )}
                </div>
                {/* right Button */}
                <div className="flex flex-col space-y-2 my-auto justify-self-end">
                  <button className="mt-auto button" onClick={addItemsToBasket}>Add to Basket</button>
                  <button className="mt-auto button" onClick={removeItemsFromBasket}>Remove from Basket</button>
                </div>
              </div>
            </div>
    );
}

export default CheckoutProducts;
