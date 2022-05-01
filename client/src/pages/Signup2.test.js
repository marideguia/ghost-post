import Signup from "./Signup"
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

test('on intial render the submit button should be disabled',async ()=> {
   render(<Signup/>)
   expect(await screen.findByRole('button', {name: /sign up/i})).toBeEnabled();
});