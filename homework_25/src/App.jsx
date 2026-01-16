import { Component } from "react";
import EmojiButton from "./components/EmojiButton";
import ControlButtons from "./components/ControlButtons";
import Winner from "./components/Winner";
import "./App.css";

const EMOJIS = ["😀", "😂", "😍", "😎", "😢"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: {},
      winner: null,
    };
  }

  componentDidMount() {
    const savedVotes = JSON.parse(localStorage.getItem("emojiVotes")) || {};
    this.setState({ votes: savedVotes });
  }

  handleVote = (emoji) => {
    this.setState(
      (prevState) => {
        const newVotes = {
          ...prevState.votes,
          [emoji]: (prevState.votes[emoji] || 0) + 1,
        };
        return { votes: newVotes };
      },
      () => {
        localStorage.setItem("emojiVotes", JSON.stringify(this.state.votes));
      }
    );
  };

  showResults = () => {
    const { votes } = this.state;
    let maxVotes = 0;
    let winner = null;

    for (let emoji in votes) {
      if (votes[emoji] > maxVotes) {
        maxVotes = votes[emoji];
        winner = emoji;
      }
    }
    this.setState({ winner });
  };

  сlearResults = () => {
    localStorage.removeItem("emojiVotes");
    this.setState({ votes: {}, winner: null });
  };

  render() {
    const { votes, winner } = this.state;
    return (
      <div className="container text-center">
        <h1 className="mb-4">Emoji Voting</h1>
        <div className="d-flex justify-content-center gap-3 m-4">
          {EMOJIS.map((emoji) => (
            <EmojiButton
              key={emoji}
              emoji={emoji}
              votes={votes[emoji] || 0}
              onVote={this.handleVote}
            />
          ))}
        </div>

        <ControlButtons
          onShowResults={this.showResults}
          onClear={this.сlearResults}
        />

        <Winner winner={winner} />
      </div>
    );
  }
}

export default App;
