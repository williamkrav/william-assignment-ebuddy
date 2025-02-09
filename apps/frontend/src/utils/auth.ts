import { destroyCookie } from 'nookies';
import { useRouter } from "next/navigation";


export const Logout = () => {
    destroyCookie(null,"token")
    const router = useRouter();
    router.push("/");
}

