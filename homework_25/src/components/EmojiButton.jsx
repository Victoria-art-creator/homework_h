import { Component } from "react";

class EmojiButton extends Component {
  render() {
    const { emoji, votes, onVote } = this.props;

    return (
      <div className="emoji-card">
        <button
          className="btn btn-light emoji-btn"
          onClick={() => onVote(emoji)}
        >
          {emoji}
        </button>
        <div className="my-2">Votes: {votes}</div>
      </div>
    );
  }
}

export default EmojiButton;
