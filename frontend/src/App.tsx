import React from "react";
import { useItunesQuery } from './services/itunesApi';

function App() {
  const { data, error, isLoading, isFetching,isSuccess } = useItunesQuery();
  console.log(data);
  return (
    <div className="App">
      <h1>RTK Query Test</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
            return <div className="data">
              <span>{JSON.stringify(data)}</span>
            </div>
        </div>
      )}
    </div>
  );
}

export default App;
