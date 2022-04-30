import {render} from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom';
import BrowserRouter from "react-router-dom";

describe("renders login page", () => {
    it("linked to right page", () =>{
        const { container, getByText } = render(<App/>, ['/']);
        const aboutLink = getByText('Welcome to GhostPost');
        aboutLink.click();
        expect(container).aboutLink;
    });
});
