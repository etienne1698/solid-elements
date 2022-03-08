import { Component, Show, Signal } from "solid-js";
import { css, cx } from '@emotion/css';
import { useTheme } from "../styles/Theme";
import Card from "./Card";
import { Portal } from "solid-js/web";

export interface ModalProps {
    openSignal: Signal<boolean>;
}


const Modal: Component<ModalProps> = ({ children, openSignal }) => {
    const [theme] = useTheme();

    const [isOpen, setIsOpen] = openSignal;

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <Show when={isOpen()}>
            <Portal mount={document.body}>
                <div
                    class={cx(
                        css({
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            width: '100vw',
                            height: '100vh',
                            zIndex: 111,
                            backgroundColor: 'black',
                            opacity: .25
                        }),

                    )}
                    onClick={handleClose}
                />
                <div
                    class={cx(
                        css({
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 112
                        })
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Card>
                        {children}
                    </Card>
                </div>
            </Portal>
        </Show>

    );
};

export default Modal;