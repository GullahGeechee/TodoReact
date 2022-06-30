import ProductsList from "./ProductsList"

const ProductItem = (props) => {
    return(
        <div>
          <h3>{props.product.name}</h3>
          <h2>$ {props.product.price}</h2>
          <p>{props.product.description}</p>
        </div> 
    )
}

export default ProductItem;