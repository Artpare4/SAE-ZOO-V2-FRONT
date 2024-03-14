import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faForwardStep,
  faForwardFast,
  faBackwardStep,
  faBackwardFast,
} from "@fortawesome/free-solid-svg-icons";

function Pagination({ pagination, setPage, ...props }) {
  return (
    <div className="flex justify-evenly">
      <button
        className="bg-secondary-800"
        onClick={() => {
          setPage(pagination.first);
        }}
        disabled={pagination.first == null}
      >
        <FontAwesomeIcon className="text-primary-100" icon={faBackwardFast} />
      </button>
      <button
        className="bg-secondary-800"
        onClick={() => {
          setPage(pagination.previous);
        }}
        disabled={pagination.previous == null}
      >
        <FontAwesomeIcon className="text-primary-100" icon={faBackwardStep} />
      </button>
      <button
        className="bg-secondary-800"
        onClick={() => {
          setPage(pagination.next);
        }}
        disabled={pagination.next == null}
      >
        <FontAwesomeIcon className="text-primary-100" icon={faForwardStep} />
      </button>
      <button
        className="bg-secondary-800"
        onClick={() => {
          setPage(pagination.last);
        }}
        disabled={pagination.last == null}
      >
        <FontAwesomeIcon className="text-primary-100" icon={faForwardFast} />
      </button>
    </div>
  );
}

Pagination.PropTypes = {
  pagination: PropTypes.object,
  setPage: PropTypes.func,
};
export default Pagination;
