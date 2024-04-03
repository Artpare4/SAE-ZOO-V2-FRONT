import React from "react";
import {CrudUrl} from "../../services/api/dataFetch.js";

function CrudButton() {
    return (
        <a
            className="bg-primary-500/70 text-4xl lg:text-2xl rounded-xl p-2 border border-primary-50 border-sbg-primary-500 text-text-950 mr-2"
            href={CrudUrl()}
        >
            Back-office
        </a>
    );
}
export default CrudButton;