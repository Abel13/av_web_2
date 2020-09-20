import React from "react";

import { Form } from "./styles";

export const SearchBox: React.FC = () => {
    return (
        <Form>
            <input type="text" placeholder="Search a pokémon" />
            <button type="submit"> GO </button>
        </Form>
    );
};
