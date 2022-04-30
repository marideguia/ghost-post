import {act, render, fireEvent, getByText, getByLabelText} from "@testing-library/react"
import React from "react"
import CreateSession from "./CreateSession"
import { MemoryRouter as Router } from "react-router-dom"

describe("Create Session Test", () => {

    it("Create Session container has Label", () =>{
        const { getByPlaceholderText } = render(
            <Router>
            <CreateSession />
          </Router>)
        const input = getByPlaceholderText("Name of Session")
        expect(input).toBeTruthy()
    })

    it("Create Session input should accept text", () => {
        const { getByPlaceholderText } = render(            
            <Router>
                <CreateSession />
            </Router>)
        const sInput = getByPlaceholderText("Name of Session")
        expect(sInput.value).toBe("")
        fireEvent.change(sInput, { target: { value: 'testing' } })
        expect(sInput.value).toBe("testing")
    })


})
