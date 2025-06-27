"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

interface ItemInputProps {
    placeholder?: string;
}

type OptionType = "return" | "lease";

interface ItemInputProps {
    placeholder?: string;
    option: OptionType;
}

export function ItemInput({ placeholder, option }: ItemInputProps) {
    const [value, setValue] = React.useState("");

    const handleChange = (input: EventTarget & HTMLInputElement) => {

        const match = input.value.match(/^(RSV)\d{0,10}$/);
        const outputDiv = document.getElementById("output");
        if (match || input.value.match(/^(RS)$/) || input.value.match(/^(R)$/)) {
            if (!input.value.match(/^(RSV)\d{10}$/)) {
                return;
            }
            const inId = input.value;

            if (option === "return") {
                setValue(`Item with code ${inId} has been returned.`);
                if (outputDiv) {
                    outputDiv.style.backgroundColor = "lightgreen"; // Change background color to light green
                }
            } else if (option === "lease") {
                setValue(`Item with code ${inId} has been leased.`);
                if (outputDiv) {
                    outputDiv.style.backgroundColor = "lightgreen"; // Change background color to light green
                }
            }
            setTimeout(() => {
                setValue("");
                if (outputDiv) {
                    outputDiv.style.backgroundColor = ""; // Reset background color
                }
            }, 1500);
            input.value = ""; // Clear the input field
        } else {
            setValue("Invalid input. Please start with 'RSV' and have 10 digits.");
            if (outputDiv) {
                outputDiv.style.backgroundColor = "lightcoral"; // Change background color to light coral
            }
            setTimeout(() => {
                setValue("");
                if (outputDiv) {
                    outputDiv.style.backgroundColor = ""; // Reset background color
                }
            }, 1500);
            input.value = ""; // Clear the input field
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <Input
                type="text"
                onChange={e => handleChange(e.target)}
                placeholder={placeholder || "Type here..."}
                className="text-base"
            />
            <div id="output" className="mt-4 p-2 border rounded bg-muted">
                <pre className="whitespace-pre-wrap break-words">{value}</pre>
            </div>
            <div className="mt-2 text-sm text-gray-500">
                Option: {option}
            </div>
        </div>
    );
}
