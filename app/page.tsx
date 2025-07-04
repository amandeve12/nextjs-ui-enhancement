//SSR because we put    cache: "no-store", 

export default async function BlogPage() {
  const res = await fetch("https://dummyjson.com/todos", {
    cache: "no-store", 
  });

  const data = await res.json();

  console.log("SSR - dynamic data fetch", data);

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
