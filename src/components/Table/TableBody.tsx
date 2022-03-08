import { Component } from "solid-js";
import { css, cx } from '@emotion/css';
import { useTheme } from "../../styles/Theme";

export interface TableBodyProps {
    
}


const TableBody: Component<TableBodyProps> = ({ children }) => {
    const [theme] = useTheme();

    return (
        <tbody class={cx(
            css({
               
            }),
            
        )}>
            {children}
        </tbody>
    );
};

export default TableBody;