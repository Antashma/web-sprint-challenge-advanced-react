import React from "react";
import { fireEvent, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

//checks for header rendering by content text
test("form header renders", () => {
    const {getByText} = render(<CheckoutForm />);
    getByText('Checkout Form');
});

test("form shows success message on submit with form details", () => {
    const {getByTestId, getByText} = render(<CheckoutForm />)
    fireEvent.click(getByText('Checkout'));
    getByTestId('successMessage');
    
});
