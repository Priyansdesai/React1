import React from "react";
import "./styles/cart.css";
let numberClicks = 0


const Product = props =>{
	return (
		<div className="ui cards">
			<div className="card">
    			<div className="content">
	      			<div className="header">{props.name}</div>
	      			<div className="description"> {props.price} </div>
	    			<div className="ui bottom attached button" onClick={() => addToCart(props)}>
	      				<i className="add icon"></i> Add to Cart 
	  				</div>
	  			</div>
  			</div>
  		</div>
  		);
}
function addToCart (props) {
  if (props.limit === 0) {
  	alert('Out of stock!')
  }
  else if (numberClicks >= props.limit  ) {
    alert("There are " + numberClicks + " " + props.name + " in your cart.");
  }
  else {
  	numberClicks++;
  	alert(props.name + " added!")
  }
}

export default Product;