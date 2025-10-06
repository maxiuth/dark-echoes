import React from "react";
import "./Episodes.css";

export default function Episodes({ episodeData, setEpisodes }) {
  return (
    <section className="episodes">
      <h2>Episodes</h2>
      <ul>
        {episodeData.map((episode) => (
          <li
            key={episode.id}
            onClick={() => {
              setEpisodes(episode);
            }}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
