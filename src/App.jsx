
import { useEffect } from "react";
import Table from "./components/Table";
import useFetchPokemon from "./hooks/useFetchPokemon";

export default function App() {
  const { data } = useFetchPokemon();
  useEffect(() => {
    console.log(data);
  }, [data])
  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}
