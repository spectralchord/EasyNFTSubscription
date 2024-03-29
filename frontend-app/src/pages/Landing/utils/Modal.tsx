import {useEffect, useRef} from 'react';
import Transition from './Transition';

const Modal = ({
                   children,
                   id,
                   ariaLabel,
                   show,
                   handleClose
               }: any) => {

    const modalContent = useRef<any>(null);

    useEffect(() => {
        const clickHandler = ({target}: any) => {
            if (!show || modalContent.current.contains(target)) return;
            handleClose();
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({keyCode}: any) => {
            if (keyCode !== 27) return;
            handleClose();
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <>
            <Transition
                className="fixed inset-0 z-50 bg-white bg-opacity-75 transition-opacity backdrop-blur-sm"
                show={show}
                enter="transition ease-out duration-200"
                enterStart="opacity-0"
                enterEnd="opacity-100"
                leave="transition ease-out duration-100"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
                aria-hidden="true"
            />

            <Transition
                id={id}
                className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby={ariaLabel}
                show={show}
                enter="transition ease-out duration-200"
                enterStart="opacity-0 scale-95"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-95"
            >
                <div className="bg-white overflow-auto max-w-6xl w-full max-h-full" ref={modalContent}>
                    {children}
                </div>
            </Transition>
        </>
    );
};

export default Modal;
