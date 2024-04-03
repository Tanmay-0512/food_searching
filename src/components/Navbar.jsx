import React from 'react'

const Navbar = () => {
    return (
        <div className='main lg:flex md:flex flex-wrap justify-between items-center 
        px-4 bg-[#F8EFBA] py-4 shadow-md'>
            <div className="left">
                <div className="logo font-bold text-2xl text-black text-center">
                    Food App</div>
            </div>
            <div className="right ">
                <ul className='flex space-x-4 text-black justify-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar