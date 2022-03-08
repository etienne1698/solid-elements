import { Component } from "solid-js";
import { css, cx } from '@emotion/css';
import { useTheme } from "../styles/Theme";

export interface StackProps {
    direction?: 'row' | 'column' | 'column-reverse';
    spacing?: number;
    alignItems?: 'center' | 'flex-end' | 'flex-start';
    justifyContent?: 'center' | 'flex-end' | 'flex-start';
    // todo : type sx
    sx?: any;
    className?: string;
}


const Stack: Component<StackProps> = ({ children, direction, spacing, alignItems, justifyContent, sx, className }) => {
    const [theme] = useTheme();

    return (
        <div class={cx(
            css({
                display: 'flex',
                flexDirection: direction || 'column',
                alignItems: alignItems || 'flex-start',
                justifyContent: justifyContent || 'flex-start',
                '& > *': {
                    // @ts-ignore
                    marginRight: `${direction === 'row' ? ((spacing || 0) * (theme?.spacing || 0)) : 0}px`,
                    // @ts-ignore
                    marginBottom: `${direction !== 'row' ? ((spacing || 0) * (theme?.spacing || 0)) : 0}px`,
                },
                '& > *:last-child': {
                    marginRight: `0px`,
                    marginBottom: `0px`,
                }
            }),
            {
                [css(sx)]: !!sx,
                [className || '']: !!className,
            }
        )}>
            {children}
        </div>
    );
};

export default Stack;