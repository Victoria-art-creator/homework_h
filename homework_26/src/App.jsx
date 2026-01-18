import { useEffect, useState } from "react";
import EmojiButton from "./components/EmojiButton";
import ControlButtons from "./components/ControlButtons";
import Winner from "./components/Winner";
import "./App.css";

const EMOJIS = ["😀", "😂", "😍", "😎", "😢"];

export default function App() {
  const [votes, setVotes] = useState(() => {
    return JSON.parse(localStorage.getItem("emojiVotes")) || {};
  });

  const [winner, setWinner] = useState(null);

  useEffect(() => {
    localStorage.setItem("emojiVotes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (emoji) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [emoji]: (prevVotes[emoji] || 0) + 1,
    }));
  };

  const showResults = () => {
    let maxVotes = 0;
    let winner = null;

    for (let emoji in votes) {
      if (votes[emoji] > maxVotes) {
        maxVotes = votes[emoji];
        winner = emoji;
      }
    }
    setWinner(winner);
  };

  const сlearResults = () => {
    localStorage.removeItem("emojiVotes");
    setVotes({});
    setWinner(null);
  };

  return (
    <div className="container text-center">
      <h1 className="mb-4">Emoji Voting</h1>
      <div className="d-flex justify-content-center gap-3 m-4">
        {EMOJIS.map((emoji) => (
          <EmojiButton
            key={emoji}
            emoji={emoji}
            votes={votes[emoji] || 0}
            onVote={handleVote}
          />
        ))}
      </div>
      <ControlButtons onShowResults={showResults} onClear={сlearResults} />
      <Winner winner={winner} />
    </div>
  );
}
