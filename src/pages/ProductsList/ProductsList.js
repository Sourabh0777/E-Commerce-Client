import axios from "axios"
import ProductListPageComponent from "../../components/ProductListPageComponent"
const getProducts = async () => {
  const {data} = await axios.get("/api/products")
  return data 
}
const ProductsList = () => {
	return <ProductListPageComponent getProducts={getProducts}/>
}

export default ProductsList
