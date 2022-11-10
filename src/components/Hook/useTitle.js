import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Bandaid Dental`;
    }, [title]);
};

export default useTitle;