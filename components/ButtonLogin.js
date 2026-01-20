import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name }) => {
    if (isLoggedIn) {
        return <Link href="/dashboard"> 
                <button className='btn btn-primary rounded-lg p-4 mb-4'>Welcome back {name}</button>
            </Link>; 
    }
    
    return <button>Login</button>;

    
};

export default ButtonLogin; 