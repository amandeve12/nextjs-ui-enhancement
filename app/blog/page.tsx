// this is an ssg page

import Generate from "@/components/Generate";

export default async function BlogPage() {
  const res = await fetch("https://dummyjson.com/todos");
  const data = await res.json();

  console.log("static generate data", data);

  const todos = data.todos;
  const mydata = "this is my data";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* <Generate todos={todos} /> */}
      <p>{mydata}</p>
      <p>Fetched {todos.length} todos</p>
      THIS IS THE PAGE
    </div>
  );
}
