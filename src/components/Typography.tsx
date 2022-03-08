import { Component, createMemo } from "solid-js";
import { css, cx } from '@emotion/css';
import { useTheme } from "../styles/Theme";
import { Typographies } from "../styles/types";

export interface TypographyProps {
    variant?: keyof Typographies;
    color?: "primary" | "secondary" | "error" | "warning" | "success" | "info" | "text";
    fontWeight?: number;
    disabled?: boolean;
}


const Typography: Component<TypographyProps> = ({ children, variant, color, fontWeight, disabled }) => {
    const [theme] = useTheme();

    return (
        <span class={cx(
            // @ts-ignore
            css({
                ...theme?.typography?.[variant || 'body1'],
                color: color && color != 'text' ? (theme?.palette?.[color]?.main) : (
                    disabled ? theme?.palette?.text?.disabled : theme?.palette?.text?.default
                ),
            }),
            {
                [css({ fontWeight })]: !!fontWeight
            }

        )}>
            {children}
        </span>
    );
};

export default Typography;