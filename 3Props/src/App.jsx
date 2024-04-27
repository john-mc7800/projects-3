import "./App.css";
import Card from "./components/Card";

function App() {
  // let text =
  //   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis labore dolorem, eius laudantium blanditiis eum tempore temporibus culpa, ratione voluptatum, illo eos excepturi vitae ipsam consequatur praesentium quam incidunt quae.";
  let obj = {
    login: "mojombo",
    id: 1,
    node_id: "MDQ6VXNlcjE=",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    pic: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
  };
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <Card name="Usama" caption={obj} arr1={arr} />
    </>
  );
}

export default App;
