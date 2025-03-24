import Card from "./components/Card";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context";

function App() {
  const { list, theme } = useGlobalContext();

  return (
    <main
      className={`min-h-screen ${
        theme === "light" ? "bg-Neutral-200" : "dark-gradient"
      } py-5 px-10 md:px-18`}
    >
      <Navbar />
      <div className="flex flex-col items-center md:flex-row md:justify-between mt-10 gap-5">
        <h1
          className={`text-4xl text-center font-bold ${
            theme === "light" ? "text-Neutral-900 " : "text-Neutral-0"
          }`}
        >
          Extensions List
        </h1>
        <Filter />
      </div>
      <div className="mt-6 grid grid-cols-1 place-self-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((item) => (
          <Card key={item.name} data={item} />
        ))}
      </div>
    </main>
  );
}

export default App;
