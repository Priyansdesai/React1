import React from "react";
import "./styles/cart.css";
import Product from "./Product.js";
import ProductData from "./Data";
import Receipt from "./Receipt.jsx";
import sqlite from 'sqlite';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      discountCode: "",
      discount: 0,
      name: "",
      choice: "",
      number: "",
      address: "",
      email: "",
      total: 0,
      tax: 0
    };
    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleAddToCart(productName, price) {
      let a = [...this.state.cartItems];
      let found = false
      if (a.length >= 1) {
        for (let i = 0; i < a.length; i++){
          if (a[i].name == productName) {
            a[i].count += 1
            found = true
          }
        }
      }
      if (found == false) {
        let b = {name: productName, price, count:1}
        a = a.concat(b)
      }
      this.setState({
        cartItems: a
      });
    }

  render() {
    return (
        <div class="form-style-10">
      <h1>Welcome to Shangri-La <span>Book for the rooms!</span></h1>
      <form>
          <div class="section"><span>1</span>Personal Details</div>
          <div class="inner-wrap">
              <label>Your Full Name <input onChange={event => this.setState({name: event.target.value})}type="text" name="field1" /></label>
              <label>Address <textarea onChange={event => this.setState({address: event.target.value})} name="field2"></textarea></label>
          </div>
      
          <div class="section"><span>2</span>Email &amp; Phone</div>
          <div class="inner-wrap">
              <label>Email Address <input onChange={event => this.setState({email: event.target.value})} type="email" name="field3" /></label>
              <label>Phone Number <input type="text" onChange={event => this.setState({number: event.target.value})}name="field4" /></label>
          </div>
      
          <div class="section"><span>3</span>Room choices</div>
              <div class="inner-wrap">
							<label>Password <input onChange={event => this.setState({choice: event.target.value})}type="password" name="field5" /></label>
							</div>
					<div class="section"><span>4</span>Services</div>
					<div class="inner-wrap">
          {this.renderProducts()}
         <Receipt items= {this.state.cartItems} discount={this.state.discount} total={this.state.total} tax={this.total.tax} />
        </div>
        <div class="section"><span>5</span>Discount Code</div>
        <div class="inner-wrap">
          <label>Discount Code <input type="text" onChange={event => this.setState({discountCode: event.target.value})} name="field5" id="discount" /></label>
          <input onClick={event => this.applyDiscount()} id="discount-button" type="button" value="Apply Discount" />
        </div>
        <div class="button-section">
				 <input onClick={event => this.handleSubmit} type="submit" name="Sign Up" />
				 <span class="privacy-policy">
				 </span>
				</div>
        </form>
      </div>  
    );
  }
  renderTotal()
   {this.renderTax()
    this.setState(prevState => ({
      tax: prevState.total/0.05
    })); 
  }
  renderTax() {
    let total = 0
    for (let i = 0; i <this.state.cartItems.length; i++) {
      total += (this.state.cartItems[i].price * this.state.cartItems[i].count)
    }
    this.setState(prevState => ({
      total: ((prevState.total + total)*0.05) - (prevState.discount)
    })); 
  }
  async handleSubmit(event) {
    event.preventDefault()
    const db = await sqlite.open('../db/test.db');
    db.run(`INSERT INTO booking VALUES(${this.state.name}, ${this.state.email}, ${this.state.number}, ${this.state.total}, ${this.state.address};`)
  }
  handleRemoveFromCart (productName){
    let a = [...this.state.cartItems];
    for (let i = 0; i < a.length; i++) {
      if (a[i].name == productName && a[i].count > 1) {
        a[i].count -= 1
      }
      else if (a[i].name === productName && a[i].count == 1) {
          a.splice(i, 1)
      }
    }
    this.setState({
      cartItems: a
    });
  }

  renderProducts() {
  	return ProductData.products.map(product => {
  		return <Product price={product.cost} name={product.name} onAddToCart={this.handleAddToCart} onRemoveFromCart={this.handleRemoveFromCart} />;
  	});
  }

  applyDiscount() {
    const discountCodes = ["ABCDE", "BCDJDJED", "DJDJJS"];

    for (let i = 0; i < discountCodes.length; i++) {
        if (discountCodes[i] === this.state.discountCode) {
            window.alert("Discount Applied");
            this.setState({
                discount: discountCodes[i].length * 4
            });
        }
    }
  }
}
export default Cart;