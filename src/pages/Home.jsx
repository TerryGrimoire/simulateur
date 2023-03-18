import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [id, setId] = useState("Grimoire");
  const [type, setType] = useState("pizza");

  return (
    <main className="flex-col simulateur">
      <Helmet>
        <title> Simulateur site Grimoire Numérique </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <h1>Simulez votre site internet </h1>
      <form>
        <label htmlFor="nom">
          Nom de votre entreprise
          <input type="text" onChange={(e) => setId(e.target.value)} />
        </label>
        <select
          name="select"
          id="select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="pizza">pizzeria</option>
          <option value="coiffeur">Barber Shop</option>
          <option value="coiffeur2">Salon de coiffure</option>
          <option value="snack">Snack bar</option>
          <option value="restaurant">restaurant</option>
        </select>
        <Link to={`/${type}/${id}`}>
          <button type="button">Voir le résultat</button>
        </Link>
      </form>
    </main>
  );
}
