// src/components/PopularDishes.js
import React from 'react';

function PopularDishes() {
  return (
    <div className="popular-dishes">
      <div className="dishes">
        <div className="center">
          <h5>Popular dishes</h5>
          <div className="cards">
            <div className="card">
              <div className="content">
                {/* Certifique-se de que a imagem "beef.avif" está dentro da pasta public ou importe-a */}
                <img className="food-picture" src={`${process.env.PUBLIC_URL}/beef.avif`} alt="Moroccan Lamb Tagine" />
                <h4>Moroccan Lamb Tagine</h4>
                <p className="p-card">
                  Moroccan Lamb Tagine is a flavorful stew made with tender lamb, spices like cumin and cinnamon, and dried fruits. It's traditionally slow-cooked in a conical pot, offering a perfect blend of savory and sweet, often served with couscous or flatbread.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                {/* Certifique-se de que a imagem "kafta.avif" está dentro da pasta public ou importe-a */}
                <img className="food-picture" src={`${process.env.PUBLIC_URL}/kafta.avif`} alt="Kafta Burger" />
                <h4>Kafta Burger</h4>
                <p className="p-card">
                  A Kafta Burger takes the flavorful essence of traditional Middle Eastern kafta—ground meat mixed with herbs, onions, and spices—and transforms it into a succulent burger patty.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                {/* Certifique-se de que a imagem "falafel.avif" está dentro da pasta public ou importe-a */}
                <img className="food-picture" src={`${process.env.PUBLIC_URL}/falafel.avif`} alt="Falafel" />
                <h4>Falafel</h4>
                <p className="p-card">
                  Falafel is a popular Middle Eastern dish made from ground chickpeas or fava beans, mixed with herbs and spices, then deep-fried into small patties or balls. Crispy on the outside and tender on the inside, falafel is commonly served in pita bread with tahini sauce, vegetables, and pickles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularDishes;
