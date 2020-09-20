import React from "react";

import logoImg from "../../../assets/logo.png";
import { Img } from "./style";

export const Logo: React.FC = () => {
    return <Img src={logoImg} alt="Pokémon Logo" />;
};
