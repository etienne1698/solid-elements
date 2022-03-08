import { Component, createMemo } from "solid-js";
import { css, cx } from '@emotion/css';
import { useTheme } from "../styles/Theme";



export interface ButtonProps {
    onClick?: (e: Event) => void;
    type?: "submit" | "reset" | "button";
    color?: "primary" | "secondary" | "error" | "warning" | "success" | "info";
    variant?: 'contained' | 'text' | 'outlined';
    disabled?: boolean;
}

const Button: Component<ButtonProps> = ({ children, onClick, type, color, variant, disabled }) => {
    const [theme] = useTheme();


    return (
        <button
            onClick={onClick}
            disabled={disabled}
            class={cx(
                // @ts-ignore
                css({
                    ...theme?.typography?.button,
                    background: (!variant || variant === 'contained') ? theme?.palette?.[color || 'primary']?.main : 'transparent',
                    color: (!variant || variant === 'contained') ? theme?.palette?.[color || 'primary']?.contrastText : theme?.palette?.[color || 'primary']?.main,
                    padding: '8px 16px',
                    opacity: disabled ? .5 : 1,
                    borderRadius: '2px',
                    border: variant === 'outlined' ? `solid 1px ${theme?.palette?.[color || 'primary']?.main}` : 'none',
                    cursor: disabled ? 'default' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: (!variant || variant === 'contained') && !disabled ? 'rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px' : 'none',
                    '&:hover': {
                        boxShadow: (!variant || variant === 'contained') && !disabled ? 'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px' : 'none'
                    }
                })
            )}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;