import Link from 'next/link'

export default function Navbar() {
    return (
        <>
            <nav className='flex grid-rows-1 m-7 justify-center text-sm sm:text-2xl' >
                <Link href='/'>
                    <button className='inline-flex text-yellow-500 font-bold
                        uppercase px-2 mx-5 cursor-pointer 
                        hover:text-yellow-700 active:scale-90 transition duration-200'>
                            Home</button>
                </Link>
                <Link href='/About'>
                    <button className='inline-flex text-yellow-500 font-bold 
                        uppercase px-2 mx-5  cursor-pointer
                        hover:text-yellow-700 active:scale-90 transition duration-150'>
                            About</button>
                </Link>
                <Link href='/Subscribe'>
                    <button className='inline-flex text-yellow-500 font-bold 
                        uppercase px-2 mx-5  cursor-pointer
                        hover:text-yellow-700 active:scale-90 transition duration-150'>
                            Subscribe</button>
                </Link>
                <Link href='/Contact'>
                    <button className='inline-flex text-yellow-500 font-bold 
                        uppercase px-2 mx-5 cursor-pointer
                        hover:text-yellow-700 active:scale-90 transition duration-150'>
                            Contact</button>
                </Link>
 
            </nav>
            
            {/* right - Log In */}
        </>
    )
}
