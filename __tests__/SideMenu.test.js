/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SideMenu from "../src";
import { MdStar } from "react-icons/md";

test("Component renders correctly", async () => {
    render(
        <SideMenu
            menu={[
                {
                    icon: MdStar,
                    text: "Test",
                    link: "/test",
                },
                {
                    hr: true,
                },
            ]}
        />
    );
    const text = screen.getByText("Test");
    expect(text).toBeInTheDocument();
});
