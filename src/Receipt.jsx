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
          <div className="receipt-text">${(this.props.tax)}</div>
        </div>
        <div className="receipt-item">
          <div className="receipt-text">Discount:</div>
          <div className="receipt-text">${this.props.discount}</div>
        </div>
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${(this.props.total)}</div>
        </div>
      </div>
    );
  }
}
export default Receipt;