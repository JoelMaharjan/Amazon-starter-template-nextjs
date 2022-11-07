import Header from "../../Component/Header";
import { useRouter } from "next/router";

//component

function ProductDetails() {
    const router = useRouter();
    const {params} = router.query
  return (
    <div>
      <Header />

      <h1>Product ID is {params}</h1>
    </div>
  )
}

export default ProductDetails


//dyanamic next page <Header />id useParam(id)


// products.find(product=> id === product.id)

//set that single product > pass to component render...




