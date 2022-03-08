import { Component } from "solid-js";
import { css, cx } from '@emotion/css';
import { useTheme } from "../../styles/Theme";

export interface TableCellProps {
    align?: 'right' | 'center' | 'left'
}


const TableCell: Component<TableCellProps> = ({ children }) => {
    const [theme] = useTheme();

    return (
        <td class={cx(
            css({
               
            }),
            
        )}>
            {children}
        </td>
    );
};

export default TableCell;