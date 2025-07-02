function TodoItem3() {
  let TodoName = "Go to College";
  let TodoDate = "4/10/23";

  return (
    <div>
      <div class="row">
        <div class="col-5">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem3;
