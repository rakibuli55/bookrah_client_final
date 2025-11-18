import Logo from "../../../../assets/logo/logo-primary.svg";
import { Link } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";
import { IoArrowBackOutline } from "react-icons/io5";
const Header = ({ step, setStep, handlePrev }) => {
    return (
        <div className="w-full flex border-b border-[#D7CBBF] c-md:pb-6 c-xsm:pb-3 justify-between items-center gap-5">
            <Link to={"/"} className="inline-block logo-width">
                <img className="w-full h-full" src={Logo} alt="Logo" />
            </Link>
            {
                step > 0 && (
                    <div className="flex gap-2 md:gap-6 justify-end items-center">
                        {/* back button */}
                        <button onClick={handlePrev} className="flex justify-center items-center bg-white border rounded-full border-[#D3D3D3] p-1 md:p-3 text-xl md:text-2xl cursor-pointer">
                            <IoArrowBackOutline />
                        </button>
                        {/* cancel button */}
                        <button onClick={() => setStep(0)} className="flex justify-center items-center bg-white border rounded-full border-[#D3D3D3] p-1 md:p-3 text-xl md:text-2xl cursor-pointer">
                            <HiMiniXMark />
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Header