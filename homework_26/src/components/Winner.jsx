export default function Winner({ winner }) {
  if (!winner) return null;

  return (
    <div className="alert alert-success mt-4">
      Winner: <span className="fs-3">{winner}</span>
    </div>
  );
}
