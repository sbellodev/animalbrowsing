import React from "react"
import { screen, render } from "@testing-library/react"
import { BugsTable } from "../content/BugsTable"

describe("BugsTable", () => {
    it("must display an image alt text", () => {
        render(<BugsTable />)

        const expected = "Mariposa común";
        screen.getByAltText(expected)
        
    })
})