import { useState } from "react";

export default function list() {
  const [active, setActive] = useState(true);

  function handleClick() {
    setActive(!active);
    console.log(active);
  }

  return (
    <>
      <h1>To Do List</h1>
      <section className="item">
        <li className="content">hi</li>
        <button
          onClick={handleClick}
          className={`btn ${active ? ["btn-active"] : ["btn-deactive"]}`}
        >
          done
        </button>
        <button className="btn btn-delete">delete</button>
      </section>
      <button className="btn-add">Add Item</button>
    </>
  );
}
