import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
    useEffect(() => {
        const handleClick = e => {
            if (ref && ref.current && !ref.current.contains(e.target)) {
                callback(e);
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    })
};
