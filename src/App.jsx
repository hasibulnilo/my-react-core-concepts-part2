import Batsman from "./Batsman";
import Counter from "./counter";
import "./App.css";

function App() {
  function handleClick() {
    alert("i am clicked");
  }

  const handleClick3 = () => {
    alert("clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <Batsman></Batsman>

      <Counter></Counter>

      {/* <button onClick="handleClick()">Clik me</button> */}

      <button onClick={handleClick}>Click me 2</button>

      <button
        onClick={function handleClick2() {
          alert("clicked 2");
        }}
      >
        Click me 3
      </button>

      <button onClick={handleClick3}>Click me 4</button>
      <button onClick={() => handleAdd5(7)}>Click me 5</button>
    </>
  );
}

export default App;
