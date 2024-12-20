import React, { useState } from "react";

const TodoList = () => {
  const [count, setCount] = useState("");
  const [todolist, setTodolist] = useState([]);

  return (
    <div className="p-10">
      <div className="p-10 border border-red-600">
        <h1 className="text-center w-[200px] text-xl font-bold mb-5">
          To-do List
        </h1>
        <div>
          <input
            onChange={(e) => setCount(e.target.value)}
            type="text"
            className="border border-black me-2"
            placeholder="Enter text"
            value={count}
          />
          <button
            onClick={() => {
              if (count.trim() !== "") {
                setTodolist([...todolist, count]);
                setCount(""); // Clear input after adding
              }
            }}
            className="bg-slate-600 text-white px-2 py-2 text-sm"
          >
            Add
          </button>
        </div>
        <div>
          <h2 className="mt-5">Your List:</h2>
          <div className="m-3 mx-3 my-4">
            <ul>
              {todolist.map((el) => (
                <li
                  key={el}
                  className="flex justify-between w-[500px] m-2 border border-black p-2"
                >
                  <p>{el}</p>
                  <button
                    onClick={() => {
                      if (confirm("Are you Sure")) {
                        setTodolist(todolist.filter((todo) => todo !== el));
                      }
                    }}
                    className="bg-slate-400 border border-black py-1 px-1"
                  >
                    delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
