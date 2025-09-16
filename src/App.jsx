import Posts from "./Posts";
import Users from "./Users";
import Batsman from "./Batsman";
import Counter from "./counter";
import Friends from "./Friends";
import "./App.css";
import { Suspense } from "react";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const fetchFriends = async () =>{
// const res = await fetch('https://jsonplaceholder.typicode.com/users')
// return res.json();
// }

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  // const friendsPromise = fetchFriends();
 const postsPromise = fetchPosts();
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

      <Suspense fallback={<h4>All posts are comming:</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are comes for treat...</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
      
      </Suspense> */}

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
