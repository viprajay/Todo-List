function TodoAdd() {
  return (
    <div className="container text-center">
      <div className="row btn-margin">
        <div className="col-6">
          <input type="text" placeholder="Enter TODO here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoAdd;
