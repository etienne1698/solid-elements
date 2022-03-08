import { Component } from "solid-js";
import { css, cx } from '@emotion/css';
import { useTheme } from "../../styles/Theme";

export interface TableProps {
    
}


const Table: Component<TableProps> = ({ children }) => {
    const [theme] = useTheme();

    return (
        <table class={cx(
            css({
               
            }),
            
        )}>
            {children}
        </table>
    );
};

export default Table;