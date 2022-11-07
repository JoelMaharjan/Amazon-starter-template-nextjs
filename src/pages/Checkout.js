import Header from "../Component/Header"
import Image from "next/image";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProducts from "../Component/CheckoutProducts";
import Currency from 'react-currency-formatter'
import { useSession } from "next-auth/react";


function Checkout( ){
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal)
  const {data: session} = useSession();

    console.log(items)
  return (
    <div className="bg-gray-100">
      <Header />
        <main className="lg:flex max-w-screen-2xl mx-auto">
            {/* left */}
            <div className="flex-grow m-5 shadow-sm">
            <Image 
                src = "https://links.papareact.com/ikj"
                width={1020}
                height={250}
                objectFit="contain" 
            />

            <div className="flex flex-col p-5 space-y-10 bg-white ">
                <h1 className="text-3xl border-b pb-4">{items.length === 0 ?"Your Amazon Basket is empty" 
                : "Shopping Basket"}</h1>
                    
                {/* Mapping Image in chekout products through props  */}

                {items.map((item, i) =>(
                  <CheckoutProducts 
                    key={item.i} 
                    id={item.id}
                    ratings={item.ratings}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    hasPrime={item.hasPrime}
                  />
                ))}
              </div>
            </div>

            {/* right */}
            <div className=" flex flex-col bg-white p-10 shadow-md">
              {items.length > 0 &&(
                <>
                  <h2 className="whitespace-nowrap">
                    Subtotals ({items.length} items):
                    <span className="font-bold ml-2">
                      <Currency 
                      quantity={total} />
                    </span>
                  </h2>

                  {/* Button */}
                  <button
                  disabled={!session}
                  className={`button mt-4 ${
                  !session &&"from-gray-500 to-gray-200 border-gray-200 text-gray-200 cursor-not-allowed "} `}
                  >
                    {!session ? "Sign In to Checkout" : "Checkout to Proceed"}
                  </button>

                </>
              )}
            </div>
        </main>
    </div>
  );
}

export default Checkout;
