export default function TodoItem(name, done, id) {
  const handleClick = () => {};
  return (
    <div className="todo_item">
      Hello world
      <checkbox
        checked={done}
        color="priamry"
        // onChange={handleCheck}
        inputProps={{ "arial-label": "secondary checkboxx" }}
      />
      {console.log("hello")}
    </div>
  );
}
