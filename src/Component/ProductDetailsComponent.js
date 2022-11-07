import { StarIcon } from "@heroicons/react/solid";
import Currency from 'react-currency-formatter'
import Image from "next/image";
import ProductDetails from "../pages/ProductDetails";

function ProductDetailsComponent({
    id,
    title,
    ratings,
    price,
    description,
    category,
    image,
    hasPrime,
}) {




  return (
    <div>
            <div className="grid grid-cols-5">
                <Image 
                    src={image}
                    height={400}
                    width={400}
                    objectFit="contain"
                />

               
            </div>
        </div>
    );
}

export default ProductDetailsComponent
