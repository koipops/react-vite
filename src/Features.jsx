import React from "react";

function Features({ features }) {
  return (
    <section>
      <h2>App Features</h2>
      <ul>
        {features.map((feature) => (
          <li key={feature.id}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;