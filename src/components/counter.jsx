import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };
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
      <div>
        <span className={this.getBadgeMethod()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeMethod() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
