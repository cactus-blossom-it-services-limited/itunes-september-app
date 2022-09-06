import * as React from "react";
import { useItunesQuery } from './services/itunesApi';

function App() {
  const { data: itunes, error, isLoading, isFetching,isSuccess } = useItunesQuery();
  return (
    <div className="App">
      <h1>Itunes API Query</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
            <div className="data">
              <span>{JSON.stringify(itunes.results[0].wrapperType)}</span>
            </div>
        </div>
      )}
    </div>
  );
}

export default App;
