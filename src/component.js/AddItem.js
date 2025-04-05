
import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }

  render() {
    return (
      <div className="row mt-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.Add(this.state.productName,Number(this.state.productPrice));
          }}
        >
          <div className="mb-3 col-6">
            <label htmlFor="productName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              name="productName"
              onChange={(e) => {
                this.setState({ productName: e.currentTarget.value });
              }}
              value={this.state.productName}
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="productPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              name="productPrice"
              onChange={(e) => {
                this.setState({ productPrice: Number(e.currentTarget.value) });
              }}
              value={this.state.productPrice}
            />
          </div>
          <button type="submit" className="btn btn-primary col-5">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
