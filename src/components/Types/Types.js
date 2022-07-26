import React from "react";
import './Types.css';
import { useState, useEffect } from "react";

import { getTypes, captalizeFirstLetter } from "../../util/PokeAPI";
import { Link } from "react-router-dom";

export function Types() {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const pokeTypes = async () => {
            const types = await getTypes();
            setTypes(types);
        }

        pokeTypes();
    }, []);

    return (
        <div>
            <h2 className="h2">Search by Type</h2>
            <ul className="list">
                {types ? types.map(type => {
                    return  <li className="type-list" key={type}>
                                <Link
                                    to={`/types/${type}`}
                                    className="link-type"
                                    key={type}>
                                        {captalizeFirstLetter(type)}
                                </Link>
                            </li>;
                }) : 'No types'}
            </ul>
        </div>
    );
}