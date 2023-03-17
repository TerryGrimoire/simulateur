import React from "react";
import bg from "../../../assets/bg.jpg";

function Image({ title }) {
  /* Pour utiliser ce composant, suivre les étapes suivantes :

    1/ Remplacer background.png par l'image souhaitée dans Assets
    2/ Remplir landingData
    3/ Importer Image dans le composant souhaitée

    Depuis n'importe quelle page, on peut importer Image de la façon suivante :

    import Image from "../components/Home/LandingPage/Image"
    <Image title={helmet.title} />

  */

  const landingData = {
    h2: "La pizza préférée des réunionnais !",
    alt: "pizzas",
  };
  return (
    <div className="landing_page container">
      <h1>{title}</h1>
      <h2>{landingData.h2}</h2>
      <img src={bg} alt="pizza découpée" className="background_img" />
      <div className="veil" />
    </div>
  );
}

export default Image;
