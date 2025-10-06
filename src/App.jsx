import React from "react";
import { useState } from "react";
import Details from "./components/Details/Details";
import Episodes from "./components/Episodes/Episodes";
import "./index.css";
import { episodeList } from "./data";

export default function App() {
  const [episodes, setEpisodes] = useState();
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Episodes episodeData={episodeList} setEpisodes={setEpisodes} />
        <Details episodes={episodes} />
      </main>
    </>
  );
}
