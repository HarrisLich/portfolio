import { TbSquareRoundedLetterH } from "react-icons/tb";

function Navbar(){
    return(
        <div className="h-[75px] grid grid-cols-3 w-full absolute fixed border-b-2 border-[#212121]">
            <div className="w-full h-full flex items-center justify-center justify-end">
                <a href="/" className="ml-16 text-white flex flex-row gap-2 items-center">
                    <TbSquareRoundedLetterH size={30}></TbSquareRoundedLetterH>
                    <h1 className="font-bold text-lg">Lichstein</h1>
                </a>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Navbar