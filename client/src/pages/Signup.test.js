import {act, render, fireEvent, getByText, getByLabelText} from "@testing-library/react"
import React from "react"
import Signup from ".//Signup"

describe("Signup Test Component", () => {

    it("rendered input", () =>{
        const { getByText } = render(<Signup />)
        const input = getByText("Email:")
        expect(input).toBeTruthy()
    })

    it("Signup email field should have label", () => {
        const component = render(<Signup />)
        const emailInput = component.getByLabelText("Email:")
        expect(emailInput.getAttribute("name")).toBe("email")
    })

    it("Signup First name field should have label", () => {
        const component = render(<Signup />)
        const fNameInput = component.getByLabelText("First Name:")
        expect(fNameInput.getAttribute("name")).toBe("firstName")
    })
    
    it("Signup Last name field should have label", () => {
        const component = render(<Signup />)
        const lNameInput = component.getByLabelText("Last Name:")
        expect(lNameInput.getAttribute("name")).toBe("lastName")
    })

    it("Signup Password field should have label", () => {
        const component = render(<Signup />)
        const pwdInput = component.getByLabelText("Password:")
        expect(pwdInput.getAttribute("name")).toBe("password")
    })

    it("Email input should accept text", () => {
        const { getByLabelText } = render(<Signup />)
        const emailInput = getByLabelText("Email:")
        expect(emailInput.value).toBe("")
        fireEvent.change(emailInput, { target: { value: 'testing' } })
        expect(emailInput.value).toBe("testing")
    })

    
    it("First Name input should accept text", () => {
        const { getByLabelText } = render(<Signup />)
        const fNameInput = getByLabelText("First Name:")
        expect(fNameInput.value).toBe("")
        fireEvent.change(fNameInput, { target: { value: 'testing' } })
        expect(fNameInput.value).toBe("testing")
    })

    it("Last Name input should accept text", () => {
        const { getByLabelText } = render(<Signup />)
        const lNameInput = getByLabelText("Last Name:")
        expect(lNameInput.value).toBe("")
        fireEvent.change(lNameInput, { target: { value: 'testing' } })
        expect(lNameInput.value).toBe("testing")
    })

    it("Password input should accept text", () => {
        const { getByLabelText } = render(<Signup />)
        const pwdInput = getByLabelText("Password:")
        expect(pwdInput.value).toBe("")
        fireEvent.change(pwdInput, { target: { value: 'testing' } })
        expect(pwdInput.value).toBe("testing")
    })

})
