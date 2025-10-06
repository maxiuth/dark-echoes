import React from "react";
import "./Details.css";

export default function Details({ episodes }) {
  if (!episodes) {
    return (
      <section className="details">
        <h2>Select an episode to see details</h2>
      </section>
    );
  }
  return (
    <section className="details">
      <h2>Episode {episodes.id}</h2>
      <h3>{episodes?.title}</h3>
      <p>{episodes?.description}</p>
      <button>Watch now</button>
    </section>
  );
}
