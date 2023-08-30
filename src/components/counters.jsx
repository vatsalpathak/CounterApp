import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counters, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
            onDecrement={onDecrement}
            //Instead of passing individual values we can encapsulate them
            // value={counter.value}
            // id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
