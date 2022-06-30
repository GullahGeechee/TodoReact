
import './App.css';
import productsData from './data/productsData';
import './components/Navbar';
import NavBar from './components/Navbar';
import ProductsList from './components/ProductsList';
import { Component } from "react";

class App extends Component {
  
  state = {
    productsData: productsData,
    productName: '',
    productDescription: '',
    productPrice: 0,


    }
    handleChange = (event) =>{
      console.log(event.target.value);
      console.log(this);
      console.dir(event)
      // this.state.value = event.target.value
      this.setState({[event.target.id] : event.target.value})
    }

    handleSubmit = (event) => {
      event.preventDefault()
//*   CREATED NEW PRODUCTS
      const newProduct = {
        name: this.state.productName,
        price: this.state.productPrice,
        description: this.state.productDescription

      }
    console.log(newProduct);
      this.setState({productsData: [...this.state.productsData, newProduct],
        productName: '',
        productPrice: 0,
        productDescription: ''
      })

    }
        render(){
    return (
      <div className="App">
        <NavBar />
        <form onSubmit={this.handleSubmit}>
      <label htmlfor="productName">Product name</label>
      <input type="text" value={this.state.value} onChange={this.handleChange} id="productName"></input>

      <label htmlfor="productPrice">Product Price</label>
      <input type="number" value={this.state.productPrice} onChange={this.handleChange} id="productPrice"></input>
   
      <label htmlfor="productDescription">Product Description</label>
      <input type="text" value={this.state.productDescription} onChange={this.handleChange} id="productDescription"></input>
   
    <input type="submit" />
      
        </form>

  {/* {} needed for Arrays and '' needed for text  */}
     {/* <input type="text" value={this.state.value} onChange={this.handleChange}/> */}
    <ProductsList products={this.state.productsData}/>
      </div>
    );

  }
}

export default App;
