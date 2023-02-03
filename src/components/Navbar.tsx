import Logo from '../assets/images/logo.svg';


const Navbar = () =>{
    return(
        <div className="flex flex-col lg:flex-row lg:w-4/5 m-auto mt-20 lg:mt-0">
            <img src={Logo} alt="" />
        </div>
    )
}

export default Navbar;