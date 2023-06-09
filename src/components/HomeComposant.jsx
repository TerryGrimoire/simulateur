import React from "react";

function HomeComposant() {
  return (
    <>
      <Image title={id} />
      <section className="articles_container">
        <article>
          <h2>Découvrez notre entreprise</h2>
          <p>
            Bienvenue chez Planet Pizza, votre destination pour des pizzas
            délicieuses à Saint-Denis. Ici, chaque pizza est cuite avec soin et
            amour dans nos fours. Nous sommes fiers d'être une entreprise
            familiale qui offre des pizzas délicieuses à nos clients depuis de
            nombreuses années. Que vous optiez pour une margherita classique,
            une pepperoni épicée, ou quelque chose de plus original, nous avons
            la pizza parfaite pour vous.
          </p>
        </article>
        <article>
          <h2>Des pizzas de qualité</h2>
          <p>
            Nous utilisons les ingrédients les plus frais et conformes aux
            normes halal pour préparer nos pizzas. Tous nos produits sont
            d'ailleurs labelisés halal Réunion. Nous attachons un soin
            particulier à la selection de nos ingrédients et à la satisfaction
            de vos papilles.
          </p>
        </article>
      </section>
      <section>
        <div className="iframe">
          <h2>Nous retrouver</h2>
          <div className="locaux">
            <p>
              Nous sommes ravis de vous retrouver dans nos locaux à Saint-Denis.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1262.0745646142047!2d55.45360514743608!3d-20.8829594607785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21827f06fb2d8581%3A0x24bcf04f3459092f!2s94%20Rue%20Sainte-Marie%2C%20Saint-Denis%2097400%2C%20La%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1675499040432!5m2!1sfr!2sfr"
              title="google maps"
            />
          </div>
        </div>
        <div>
          <h2>Nous contacter</h2>
          <div>
            <p>
              Téléphone :<a href="tel:+262262 00 00 00"> 02 62 00 00 00</a>
            </p>
            <p>
              Email : {"  "}
              <a
                href="mailto:test@live.fr
    "
              >
                {`contact@${id.toLowerCase().replaceAll(" ", "")}.com`}
              </a>
            </p>
          </div>

          <ul>
            <li>Lundi : 11h-14h | 18h-22h</li>
            <li>Mardi : 11h-14h | 18h-22h</li>
            <li>Mercredi : 11h-14h | 18h-22h</li>
            <li>Jeudi : 11h-14h | 18h-22h</li>
            <li>Vendredi : 11h-14h00 | 18h-22h</li>
            <li>Samedi : 18h-22h</li>
            <li>Dimanche :18h-22h</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default HomeComposant;
