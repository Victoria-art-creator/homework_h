export default function EmojiButton({ emoji, votes, onVote }) {
  return (
    <div className="emoji-card">
      <button className="btn btn-light emoji-btn" onClick={() => onVote(emoji)}>
        {emoji}
      </button>
      <div className="my-2">Votes: {votes}</div>
    </div>
  );
}
