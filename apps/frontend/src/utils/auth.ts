import { destroyCookie } from 'nookies';


export const Logout = () => {
    destroyCookie(null,"token")
    window.location.href = '/'
}

