import "./App.css";
import BarChart from "./BarChart.js";
import { useQuery } from '@apollo/client';
import { GET_GEN_3 } from "./gql/Query";
function App() {
  const { loading, error, data } = useQuery(GET_GEN_3);
  return (
    <div className="App">
      <header className="App-header">
      {loading ? (
          <p>Loading</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (<>
        <h3> Horizontal Bar Chart</h3>
        <BarChart data={data}></BarChart>
        </>
        )}
      </header>
    </div>
  );
}

export default App;
