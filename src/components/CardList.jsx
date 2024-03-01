import PropTypes from "prop-types";
import FamilleAnimalCard from "./FamilleAnimalCard.jsx";

function CardList({ data = {}, type, ...props }) {}

CardList.PropTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
};
export default CardList;
