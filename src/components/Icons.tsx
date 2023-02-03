import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Icons = () => {
    return(
        <div className="flex justify-center lg:justify-end  w-4/5 m-auto gap-4 lg:gap-6 pb-8 lg:pb-0 Icons">
            <a className="border-2 rounded-full text-white hover:text-[#e882e8] border-white hover:border-[#e882e8] p-4" href="#"><FaFacebookF/></a>
            <a className="border-2 rounded-full text-white hover:text-[#e882e8] border-white hover:border-[#e882e8] p-4" href="#"><FaTwitter/></a>
            <a className="border-2 rounded-full text-white hover:text-[#e882e8] border-white hover:border-[#e882e8] p-4" href="#"><FaInstagram/></a>
        </div>
    )
}

export default Icons;