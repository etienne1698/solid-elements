import { Component, createMemo, createUniqueId, JSX } from "solid-js";
import { css, cx } from '@emotion/css';
import { useTheme } from "../styles/Theme";
import Stack from "./Stack";
import Typography from "./Typography";

export interface TextFieldProps {
    inputProps?: JSX.InputHTMLAttributes<HTMLInputElement>;
    label?: string;
    onChange?: (e: Event, newValue: any) => void;
    defaultValue?: any;
    disabled?: boolean;
}


const TextField: Component<TextFieldProps> = ({ label, inputProps, onChange, defaultValue, disabled }) => {
    const [theme] = useTheme();

    let inputRef: any;

    return (
        <label class={
            cx(
                // @ts-ignore
                css({
                    cursor: disabled ? 'default' : 'pointer',
                    display: 'block',
                    '& > .input': {
                      
                        '& > input': {
                            ...theme?.typography?.body1,
                            border: '.5px solid gray',
                            borderRadius: '2px',
                            display: 'flex',
                            padding: '6px 4px',
                            color: disabled ? theme.palette?.text?.disabled : theme.palette?.text?.default,
                            background: theme.palette?.background?.paper,
                            
                            flex: 1,
                            '&:focus': {
                                outline: 'none',

                            }
                        }
                    }
                })
            )
        }>
            <Typography variant="label" disabled={disabled}>
                {label || ''}
            </Typography>
            <div
                class="input"
                onClick={() => {
                    inputRef.click()
                }}
            >
                <input
                    ref={inputRef}
                    onInput={(event: any) => {
                        if (onChange) {
                            onChange(event, event.target.value);
                        }
                    }}
                    value={defaultValue || ''}
                    disabled={!!disabled}
                    {...inputProps || {}}
                />
            </div>
        </label>


    );
};

export default TextField;