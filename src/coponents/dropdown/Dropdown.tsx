import { type ReactNode } from "react";
import { Button } from "../button/Button";
import { useToggle } from "../../hooks/useToggle";
import React from "react";

type DropdownProps = {
    children?: ReactNode;
    triger?: ReactNode;
    variants?: string;
};

function DropdownContainer({ children, variants }: DropdownProps) {
    return (
        <div
            className={
                variants
                    ? `dropdownContainer dropdownContainer-${variants}`
                    : "dropdownContainer"
            }
        >
            {children}
        </div>
    );
}

function Dropdown({ children, triger, variants }: DropdownProps) {
    const [open, toggle] = useToggle();
    return (
        <div className="dropDown">
            <Button onClick={() => toggle()} className="button">
                {triger}
            </Button>
            {open && (
                <DropdownContainer variants={variants}>
                    {React.Children.map(children, (child, index) => (
                        <p key={index}> {child}</p>
                    ))}
                </DropdownContainer>
            )}
        </div>
    );
}

export { Dropdown };
