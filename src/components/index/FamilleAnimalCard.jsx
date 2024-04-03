import PropTypes from "prop-types";
import React from "react";

function FamilleAnimalCard({ image, title, description }) {
  return (
    <div className="flex flex-col w-96 content-center m-3 rounded-3xl pt-2 pl-2 pr-2 bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s">
      <a className="object-contain" href="">
        <div className="bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s p-2 rounded-2xl">
          <img
            className="w-96 h-fit rounded-2xl"
            src={image}
            alt="Image de
          l'événement"
          />
        </div>
        <p className="text-center justify-center text-6xl lg:text-2xl text">
          {title}
        </p>
        <p className="justify-center text-4xl lg:text-xl text italic text-center text-text-950/60">
          {description}
        </p>
      </a>
    </div>
  );
}

FamilleAnimalCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
FamilleAnimalCard.defaultProps = {
  image: "https://via.placeholder.com/150",
  title: "Titre",
  description: "Description",
};

export default FamilleAnimalCard;
