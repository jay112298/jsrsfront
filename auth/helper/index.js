
export const isAuthenticated = () => {
    if (!localStorage.getItem('jwt')) {
        return false;
    }
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
}