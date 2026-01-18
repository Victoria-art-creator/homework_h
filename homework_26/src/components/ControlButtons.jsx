export default function ControlButtons({ onShowResults, onClear }) {
  return (
    <div className="mb-3">
      <button className="btn btn-primary me-2" onClick={onShowResults}>
        Show Results
      </button>
      <button className="btn btn-danger" onClick={onClear}>
        Clear Results
      </button>
    </div>
  );
}
