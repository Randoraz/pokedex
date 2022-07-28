import React from "react";
import { useHistory } from "react-router-dom";

import './BackButton.css';

export function BackButton() {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return <button className="back-button" onClick={goBack}>Back</button>;
}