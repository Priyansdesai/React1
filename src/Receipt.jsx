import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (<div className="receipt-item" key={item.name}>
    <div className="receipt-text">
      {item.name} X {item.count}
    </div>
    <div className="receipt-text">
      ${(item.price).toFixed(2)}
    </div>
  </div>);
  }

  render() {
    const items = this.props.items;
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}

        <div className="receipt-item">
          <div className="receipt-text">Tax:</div>
          <div className="receipt-text">${(this.renderTax()).toFixed(2)}</div>
        </div>
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${(this.renderTotal()).toFixed(2)}</div>
        </div>
      </div>
    );
  }

  renderTotal() {
    return this.renderTax()/0.05
  }
  renderTax() {
    let total = 0
    for (let i = 0; i <this.props.items.length; i++) {
      total += (this.props.items[i].price * this.props.items[i].count)
    }
    return (total * 0.05)
  }
}
export default Receipt;