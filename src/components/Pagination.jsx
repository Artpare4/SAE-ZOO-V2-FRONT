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
    <>
      <button
        onClick={() => {
          setPage(pagination.first);
        }}
        disabled={pagination.first == null}
      >
        <FontAwesomeIcon icon={faBackwardFast} />
      </button>
      <button
        onClick={() => {
          setPage(pagination.previous);
        }}
        disabled={pagination.previous == null}
      >
        <FontAwesomeIcon icon={faBackwardStep} />
      </button>
      <button
        onClick={() => {
          setPage(pagination.next);
        }}
        disabled={pagination.next == null}
      >
        <FontAwesomeIcon icon={faForwardStep} />
      </button>
      <button
        onClick={() => {
          setPage(pagination.last);
        }}
        disabled={pagination.last == null}
      >
        <FontAwesomeIcon icon={faForwardFast} />
      </button>
    </>
  );
}

Pagination.PropTypes = {
  pagination: PropTypes.object,
  setPage: PropTypes.func,
};
export default Pagination;
