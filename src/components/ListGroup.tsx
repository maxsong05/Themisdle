import { MouseEvent } from "react";
function ListGroup() {
  const modes = ["Card Mode", "Skills Mode"];

  //Click event handling
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>THEMISDLE</h1>
      <ul className="list-group">
        {modes.map((mode, index) => (
          <li className="list-group-item" key={mode} onClick={handleClick}>
            {mode}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
