import React, { Component } from "react";

class Counter extends Component {
  // state = { //we don't need the state now as we will use parents state
  //   value: this.props.counter.value,
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // }; //we don't need the state now as we will use parents state
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //   return (
  //     <ol>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ol>
  //   );
  // }
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeMethod()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            // onClick={() => this.handleIncrement({ id: 1 })}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            // onClick={() => this.handleIncrement({ id: 1 })}
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  getBadgeMethod() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
