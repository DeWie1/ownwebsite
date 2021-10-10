export default function Header() {
    const scrollToSection = (sec) => {
        let index = sec;
        if (typeof window !== 'undefined') {
            // Get the hash from the url
            console.log(window.document)
            const document = window.document;
        
            // Use the hash to find the first element with that id
            const sections = document.querySelectorAll('section');

            sections.forEach((section, i) =>{
                if(i === index){
                    section.scrollIntoView({
                        behavior: 'smooth',
                      });

                }
            })
        }
      };

    return (
        <nav className='flex grid-rows-1 p-7 justify-center text-sm sm:text-2xl'>
            <button onClick={() => scrollToSection(0)} className='inline-flex text-yellow-500 font-bold
                            uppercase px-2 mx-5 cursor-pointer 
                            hover:text-yellow-700 active:scale-90 transition duration-200'>
                Home
            </button>
            <button onClick={() => scrollToSection(1)}
                className='inline-flex text-yellow-500 font-bold 
                            uppercase px-2 mx-5  cursor-pointer
                            hover:text-yellow-700 active:scale-90 transition duration-150'>
                About
            </button>
            <button onClick={() => scrollToSection(2)} className='inline-flex text-yellow-500 font-bold 
                            uppercase px-2 mx-5  cursor-pointer
                            hover:text-yellow-700 active:scale-90 transition duration-150'>
                Subscribe
            </button>

            <button onClick={() => scrollToSection(3)} className='inline-flex text-yellow-500 font-bold 
                            uppercase px-2 mx-5 cursor-pointer
                            hover:text-yellow-700 active:scale-90 transition duration-150'>
                Contact
            </button>
        </nav>

    )
}
