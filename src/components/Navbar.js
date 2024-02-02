import { TbSquareRoundedLetterH } from "react-icons/tb";
import {motion} from 'framer-motion'

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

function Navbar() {
    return (
        <div className="h-[75px] grid grid-cols-3 w-full fixed border-b-2 border-[#212121] bg-blend-normal z-20 backdrop-blur-sm">
            <div className="w-full h-full flex items-center justify-center justify-end">
                <a href="/" className="ml-16 text-white flex flex-row gap-2 items-center">
                    <motion.svg initial="hidden" animate="visible" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><motion.path stroke="none" d="M0 0h24v24H0z" fill="none"></motion.path><motion.path variants={draw} className="blob" d="M10 16v-8m4 0v8"></motion.path><motion.path variants={draw} className="blob" d="M10 12h4"></motion.path><motion.path variants={draw} className="blob" d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></motion.path></motion.svg>
                    <h1 className="font-bold text-lg">Lichstein</h1>
                </a>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Navbar