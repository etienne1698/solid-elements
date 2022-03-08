import { Component } from "solid-js";
import { css, cx } from '@emotion/css';
import { useTheme } from "../../styles/Theme";

export interface TableRowProps {
    
}


const TableRow: Component<TableRowProps> = ({ children }) => {
    const [theme] = useTheme();

    return (
        <tr class={cx(
            css({
               
            }),
            
        )}>
            {children}
        </tr>
    );
};

export default TableRow;