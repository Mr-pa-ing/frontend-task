import SearchIcon from "../assets/search.png";
import CompleteIcon from "../assets/complete.png";
import ShopIcon from "../assets/shop.png";
import Bell from "../assets/bell.png";
import Profile from "../assets/profile.png";
import MyanmarFlag from "../assets/flag.png"

const Navbar = () => {
    return (
        <div className="block md:flex justify-between align-middle w-full">
            <div className="bg-black w-64 flex justify-center align-middle md:m-6 rounded-lg">
                <input type="text" className="bg-transparent text-white focus:outline-none placeholder-stone-50 p-3" placeholder="Search product" />
                <button><img src={SearchIcon} alt="search" className="ml-4 w-4 h-4"/></button>
            </div>
            
            <div className="m-4 md:flex justify-center align-middle hidden">
                <div>
                    <button type="button" className="text-white bg-transparnet flex items-center justify-center w-full rounded-md  px-4 py-3 ">
                        <img src={MyanmarFlag} alt="flag" />
                        <span className="mx-2">Ks</span>
                        <svg width="20" height="20" className="" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>  
                <ul className="flex">
                    <li className="ml-4">
                        <a href="#"><img src={CompleteIcon} alt="complete" /></a>
                    </li>
                    <li className="ml-4">
                        <a href="#"><img src={ShopIcon} alt="complete" /></a>
                    </li>
                    <li className="ml-4">
                        <a href="#"><img src={Bell} alt="bell" /></a>
                    </li>
                    <li className="ml-4">
                        <a href="#"><img src={Profile} alt="profile" /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;