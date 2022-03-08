import { Component } from "solid-js";
import { css, cx } from '@emotion/css';
import { useTheme } from "../styles/Theme";

export interface CardProps {
    elevation?: number;
}


const Card: Component<CardProps> = ({ children, elevation }) => {
    const [theme] = useTheme();

    return (
        <div class={cx(
            css({
                boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
                padding: '12px 16px',
                background: theme.palette?.background?.paper,
            }),
            
        )}>
            {children}
        </div>
    );
};

export default Card;