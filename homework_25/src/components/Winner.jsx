import { Component } from "react";

class Winner extends Component {
  render() {
    const { winner } = this.props;

    if (!winner) return null;

    return (
      <div className="alert alert-success mt-4">
        Winner: <span className="fs-3">{winner}</span>
      </div>
    );
  }
}

export default Winner;
