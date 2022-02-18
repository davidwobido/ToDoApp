import { useState } from "react";

export default function list() {
  const [list, setList] = useState<any>([]);

  const Input = () => {
    const [active, setActive] = useState(false);

    function handleClick() {
      setActive(!active);
      console.log(active);
    }

    return (
      <section className="item">
        <input className="content" placeholder="Type Text" />
        <button
          onClick={handleClick}
          className={`btn ${active ? ["btn-active"] : ["btn-deactive"]}`}
        ></button>
      </section>
    );
  };

  function addItem() {
    const newArray = [...list, <Input key={list.length} />];
    setList(newArray);
    console.log(Input);
  }

  return (
    <div className="wrapper">
      <h1 className="title">To Do List</h1>
      <Input />
      <div>{list}</div>
      <button className="btn btn-add" onClick={addItem}>
        Add Item
      </button>
    </div>
  );
}
