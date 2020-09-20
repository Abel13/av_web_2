import React from "react";

import { Logo, Title } from "../../components/atoms";
import { SearchBox } from "../../components/molecules";

import { TitleContainer } from "./styles";

const Dashboard: React.FC = () => {
    return (
        <>
            <Logo />
            <TitleContainer>
                <Title>All Pokémons</Title>
            </TitleContainer>

            <SearchBox />
        </>
    );
};

export default Dashboard;
