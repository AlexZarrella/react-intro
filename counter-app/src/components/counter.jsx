import React, { Component } from "react";

class Counter extends Component {
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement = product => {
  //     console.log(product);
  //     this.setState({ count: this.state.count + 1 });
  //   };

  render() {
    // console.log("props", this.props);
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  //refactored into new method
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
