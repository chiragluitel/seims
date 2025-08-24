import NavbarLoggedIn from "./navbarLoggedIn";
import NavbarLoggedOut from "./navbarLoggedOut";

const Navbar = () =>{

    let isLoggedin = true;
    return (
        <>
        <div className="flex">
            {isLoggedin? (<NavbarLoggedIn />):( <NavbarLoggedOut />)}
        </div>
            
        </>
    )
}
export default Navbar;
