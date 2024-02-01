import { motion, useInView } from "framer-motion"
import React from 'react'
import spigot from "../imgs/spigot1.png"
import harrisTracker from "../imgs/harris-tracker.png"

function PageFour() {

    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true })

    const cardA = React.useRef(null)
    const cardAIsInView = useInView(cardA, { once: true })

    const cardB = React.useRef(null)
    const cardBIsInView = useInView(cardB, {once: true})

    const cardC = React.useRef(null)
    const cardCIsInView = useInView(cardC, {once: true})


    return (
        <div className="w-full flex flex-col" style={{ height: "calc(200vh)" }}>
            <motion.div ref={ref} style={{ opacity: isInView ? 1 : 0, transition: "all 1s 0.5s" }} className="w-full flex items-center justify-center">
                <h1 className="text-white laptop:text-5xl text-3xl mt-[5%] font-bold">Projects I'm Proud Of</h1>
            </motion.div>
            <motion.div style={{ transform: isInView ? "none" : "translateY(30px)", opacity: isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s" }} className="w-full flex items-center justify-center mt-[2%] text-zinc-400 font-[quicksand]">
                No better way to get experience then real projects
            </motion.div>
            <div className="flex flex-col w-full items-center justify-center mt-[7%] gap-12">
                <div className="flex flex-row w-full items-center justify-center">
                    <motion.img style={{ opacity: cardAIsInView ? 1 : 0, transform: cardAIsInView ? "translateX(-100px)" : "translateX(-350px)", transition: "all 1s 0.5s" }} className="w-[400px]" src={spigot}></motion.img>
                    <motion.div ref={cardA} className="drop-shadow-lg laptop:w-[400px] flex flex-col justify-start items-start laptop:h-[200px] bg-zinc-300 rounded-lg w-full" style={{ opacity: cardAIsInView ? 1 : 0, transform: cardAIsInView ? "translateX(-140px)" : "translateX(-350px)", transition: "all 1s 0.5s" }}>
                        <div className="w-full h-full flex flex-col items-start justify-start px-4 py-2">
                            <h1 className="font-bold laptop:text-2xl font-[quicksand]">Backpacks</h1>
                            <h1 className="mt-2">Backpacks is an easy to use, simple backpack plugin meant to closely simulate an actual backpack. The backpacks config is small and simple!</h1>
                            <div className="w-full flex flex-row gap-4">
                                
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-row w-full items-center justify-center">
                    <motion.div ref={cardB} className="drop-shadow-lg laptop:w-[400px] flex flex-col justify-start items-start laptop:h-[200px] bg-zinc-300 rounded-lg w-full z-20" style={{ opacity: cardBIsInView ? 1 : 0, transform: cardBIsInView ? "translateX(140px)" : "translateX(350px)", transition: "all 1s 0.5s" }}>
                        <div></div>
                    </motion.div>
                    <motion.img style={{opacity: cardBIsInView ? 1 : 0, transform: cardBIsInView ? "translateX(100px)" : "translateX(350px)", transition: "all 1s 0.5s"}} className="w-[400px] z-10" src={spigot}></motion.img>

                </div>

                <div className="flex flex-row w-full items-center justify-center">
                    <motion.img style={{ opacity: cardCIsInView ? 1 : 0, transform: cardCIsInView ? "translateX(-100px)" : "translateX(-350px)", transition: "all 1s 0.5s" }} className="w-[400px]" src={harrisTracker}></motion.img>
                    <motion.div ref={cardC} className="drop-shadow-lg laptop:w-[400px] flex flex-col justify-start items-start laptop:h-[200px] bg-zinc-300 rounded-lg w-full" style={{ opacity: cardCIsInView ? 1 : 0, transform: cardCIsInView ? "translateX(-140px)" : "translateX(-350px)", transition: "all 1s 0.5s" }}>
                        <div></div>
                    </motion.div>
                </div>

            </div>

        </div>
    )
}

export default PageFour