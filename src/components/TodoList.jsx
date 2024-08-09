function TodoList() {
  let todoName = "College";
  let todoDate = "11/10/2024";

  return (
    <div className="container">
      <div className="row btn-margin">
        <div className="col-6 todo-item">
          <p>{todoName}</p>
        </div>
        <div className="col-4 todo-item">
          <p>{todoDate}</p>
        </div>
        <div className="col-2 delete-btn">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
