import React from "react";
import "./styles/cart.css";
const Product = props =>{
	return (
		<div className="ui cards">
			<div className="card">
    			<div className="content">
	      			<div className="header">{props.name}</div>
	      			<div className="description"> {props.price} </div>
	    			<div className="ui bottom attached button" onClick={() => props.onAddToCart(props.name, props.price)}>
	      				<i className="add icon"></i> Add to Cart 
	  				</div>
					<div className="ui bottom attached button" onClick={() => props.onRemoveFromCart(props.name)}>
	      				<i className="remove icon"></i> Remove from Cart 
	  				</div>
	  			</div>
  			</div>
  		</div>
  		);
}
export default Product;