import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import { albumApi, Album } from "./store";

function AlbumApp() {
  const { data: albums } = albumApi.useGetAllQuery();
  return <div className="App">
    {JSON.stringify(albums)}
  </div>;
}

function App() {
  return (
    <ApiProvider api={albumApi}>
      <AlbumApp />
    </ApiProvider>
  );
}

export default App;
