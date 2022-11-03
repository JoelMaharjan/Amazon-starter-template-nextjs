import Image from "next/image";
import {MenuIcon, SearchIcon, ShoppingCartIcon,} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
    {/* top NavBar */}
    <div className='flex items-center bg-black flex-grow py-2 '>
        <div className="mt-2 flex item-center flex-grow-8">
            <Image
                src="https://links.papareact.com/f90"
                width={150}
                height={40}
                objectFit="contain"
                className="cursor-pointer"   
            />
        </div>
        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
            <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" 
            type="text" />
            <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-no-wrap">
            <div className="link hover:underline" >
                <p>Hello Joel Maharjan</p>
                <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>

            <div className="link hover:underline">
                <p>Returns</p>
                <p className="font-extrabold md:text-sm">& Lists</p>
            </div>

            <div className="relative link hover:underline">
                <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold " tex >0</span>
                <ShoppingCartIcon className="h-10" />
                <p className="md:inline font-extrabold md:text-sm">Basket</p>
            </div>
        </div>
    </div>

      {/* bottom Navbar */}
      <div className="flex items-center space-x-4 p-2 pl-4 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
            <MenuIcon className="h-6 mr-1" />
            All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronic</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
