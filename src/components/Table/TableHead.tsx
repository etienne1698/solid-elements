import { Component } from "solid-js";
import { css, cx } from '@emotion/css';
import { useTheme } from "../../styles/Theme";

export interface TableHeadProps {
    
}


const TableHead: Component<TableHeadProps> = ({ children }) => {
    const [theme] = useTheme();

    return (
        <thead class={cx(
            css({
               
            }),
            
        )}>
            {children}
        </thead>
    );
};

export default TableHead;