const Form = () => (
  <>
    <h1 className="text-center">SWAPI</h1>
    <input
      type="text"
      className="form-control"
      placeholder="Enter SWAPI resource (e.g. people/1)"
    />
    <button className="btn btn-primary">Get Data</button>

    <div className="card custom-card">
      <div className="card-header">Result</div>
      <div className="card-body">
        <p className="text-muted">SWAPI response will be displayed here</p>
      </div>
    </div>
  </>
);

export default Form;
