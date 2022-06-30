import ProductItem from "./ProductsItem"

const ProductsList = (props) => {
    console.log(props.products.name);
    return (
    <div>
    <h2>Products</h2>
        {props.products.map((product, idx) => <ProductItem product={product} key={idx}/>)}
    </div>
        );
    };                   
                

export default ProductsList;