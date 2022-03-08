import { Component, createMemo, createUniqueId } from "solid-js";
import { css, cx } from '@emotion/css';
import { useTheme } from "../styles/Theme";
import Stack from "./Stack";
import Typography from "./Typography";

export interface CheckboxProps {
    color?: "primary" | "secondary" | "error" | "warning" | "success" | "info";
    label?: string;
    onChange?: (e: Event, newValue: boolean) => void;
    defaultChecked?: boolean;
    disabled?: boolean;
}


const Checkbox: Component<CheckboxProps> = ({ children, color, label, onChange, defaultChecked, disabled }) => {
    const [theme] = useTheme();



    return (
        <label class={
            cx(
                // @ts-ignore
                css({
                    ...theme.typography?.body1,
                    cursor: disabled ? 'default' : 'pointer',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    opacity: disabled ? .5 : 1,
                    '& > input': {
                        display: 'none'
                    },
                    '& input:checked ~ .checkmark': {
                        backgroundColor: theme?.palette?.[color || 'primary']?.main,
                    },
                    '& input:checked ~ .checkmark:after': {
                        content: String.raw`"\2713"`,
                        color: theme?.palette?.[color || 'primary']?.contrastText,
                        fontWeight: 650,
                    },
                    '& > .checkmark': {
                        backgroundColor: 'transparent',
                        border: `solid 1px ${theme?.palette?.[color || 'primary']?.main}`,
                        // @ts-ignore
                        marginRight: `${.5 * theme?.spacing}px`,
                        borderRadius: '2px',
                        width: '16px',
                        height: '16px',
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '14px',
                        alignItems: 'center',

                    }
                })


            )
        }>
            <input
                type="checkbox"
                onChange={(event: any) => {
                    if (onChange) {
                        onChange(event, event.target.checked);
                    }
                }}
                checked={defaultChecked}
                disabled={disabled}
            />
            <span class="checkmark">

            </span>

            {label || ''}

        </label>


    );
};

export default Checkbox;