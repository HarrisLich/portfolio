import { motion, useInView, useAnimationControls } from "framer-motion"
import React from 'react'
import spigot from "../imgs/spigot1.png"
import harrisTracker from "../imgs/harris-tracker.png"
import AnimatedLink from "./AnimatedLink"

const buttonVariants = {
    rest: {
        translateX: 10,
        translateY: 10,
        transition: {
            duration: 0.5
        }
    },
    animate: {
        translateX: 0,
        translateY: 0,
        transition: {
            duration: 0.5
        }
    }
}


function PageFour() {
    const buttonControl = useAnimationControls()

    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true })

    const cardA = React.useRef(null)
    const cardAIsInView = useInView(cardA, { once: true })

    const cardB = React.useRef(null)
    const cardBIsInView = useInView(cardB, { once: true })

    const cardC = React.useRef(null)
    const cardCIsInView = useInView(cardC, { once: true })

    const shadowButton = React.useRef(null)
    const shadowButtonIsInView = useInView(shadowButton, {once: true})

    const banner = React.useRef(null)
    const bannerIsInView = useInView(banner, {once: true})


    return (
        <div className="w-full flex flex-col" style={{ height: "calc(190vh)" }}>
            <motion.div id="projects" ref={ref} style={{ opacity: isInView ? 1 : 0, transition: "all 1s 0.5s" }} className="w-full flex items-center justify-center">
                <h1 className="text-white laptop:text-5xl text-3xl mt-[5%] font-bold">Projects I'm Proud Of</h1>
            </motion.div>
            <motion.div style={{ transform: isInView ? "none" : "translateY(30px)", opacity: isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s" }} className="w-full flex items-center justify-center mt-[2%] text-zinc-400 font-[quicksand]">
                No better way to get experience then real projects
            </motion.div>
            <div className="flex flex-col w-full items-center justify-center mt-[7%] gap-12">
                <div className="flex flex-row w-full items-center justify-center">
                    <motion.img style={{ opacity: cardAIsInView ? 1 : 0, transform: cardAIsInView ? "translateX(-100px)" : "translateX(-350px)", transition: "all 1s 0.5s" }} className="w-[400px]" src={spigot}></motion.img>
                    <motion.div ref={cardA} className="drop-shadow-lg laptop:w-[400px] flex flex-col justify-start items-start laptop:h-[200px] bg-zinc-300 rounded-lg w-full" style={{ opacity: cardAIsInView ? 1 : 0, transform: cardAIsInView ? "translateX(-140px)" : "translateX(-350px)", transition: "all 1s 0.5s" }}>
                        <div className="w-full h-full flex flex-col items-start justify-start px-4 py-2 font-[quicksand]">
                            <h1 className="font-bold laptop:text-2xl font-[quicksand]">Backpacks</h1>
                            <h1 className="mt-2">Backpacks is an easy to use, simple backpack plugin meant to closely simulate an actual backpack. The backpacks config is small and simple!</h1>
                            <div className="w-full h-full items-end flex flex-row gap-4 mt-4">

                                <AnimatedLink href="https://github.com/HarrisLich/Backpacks/releases/tag/1.0" title="Source Code" />
                                <AnimatedLink href="https://www.spigotmc.org/resources/backpacks.114526/" title="Project Page"></AnimatedLink>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-row w-full items-center justify-center">
                    <motion.div ref={cardB} className="drop-shadow-lg laptop:w-[400px] flex flex-col justify-start items-start laptop:h-[200px] bg-zinc-300 rounded-lg w-full z-20" style={{ opacity: cardBIsInView ? 1 : 0, transform: cardBIsInView ? "translateX(140px)" : "translateX(350px)", transition: "all 1s 0.5s" }}>
                        <div className="w-full h-full flex flex-col items-start justify-start px-4 py-2 font-[quicksand]">
                            <h1 className="font-bold laptop:text-2xl font-[quicksand]">Balloons</h1>
                            <h1 className="mt-2">Balloons is a simple to use Minecraft Plugin. A balloon is an appliciable item to a weapon/tool which while holding will display a balloon!</h1>
                            <div className="w-full w-full h-full items-end flex flex-row gap-4 mt-4">

                                <AnimatedLink href="https://github.com/HarrisLich/Balloons/releases/tag/1.2" title="Source Code" />
                                <AnimatedLink href="https://www.spigotmc.org/resources/balloons.114430/" title="Project Page"></AnimatedLink>
                            </div>
                        </div>
                    </motion.div>
                    <motion.img style={{ opacity: cardBIsInView ? 1 : 0, transform: cardBIsInView ? "translateX(100px)" : "translateX(350px)", transition: "all 1s 0.5s" }} className="w-[400px] z-10" src={spigot}></motion.img>

                </div>

                <div className="flex flex-row w-full items-center justify-center">
                    <motion.img style={{ opacity: cardCIsInView ? 1 : 0, transform: cardCIsInView ? "translateX(-100px)" : "translateX(-350px)", transition: "all 1s 0.5s" }} className="w-[400px]" src={harrisTracker}></motion.img>
                    <motion.div ref={cardC} className="drop-shadow-lg laptop:w-[400px] flex flex-col justify-start items-start laptop:h-[200px] bg-zinc-300 rounded-lg w-full" style={{ opacity: cardCIsInView ? 1 : 0, transform: cardCIsInView ? "translateX(-140px)" : "translateX(-350px)", transition: "all 1s 0.5s" }}>
                        <div className="w-full h-full flex flex-col items-start justify-start px-4 py-2 font-[quicksand]">
                            <h1 className="font-bold laptop:text-2xl font-[quicksand]">Harris-Tracker</h1>
                            <h1 className="mt-2">Harris-Tracker is a simple static frontend site, it actively tracks a persons age to a large precision.</h1>
                            <div className="w-full w-full h-full items-end flex flex-row gap-4 mt-4">

                                <AnimatedLink href="https://github.com/HarrisLich/age-tracker" title="Source Code" />
                                <AnimatedLink href="https://harris-tracker.netlify.app/" title="Project Page"></AnimatedLink>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div ref={shadowButton} style={{opacity: shadowButtonIsInView ? 1 : 0, transition: "all 1s 0.5s"}} className="mt-[5%] w-full flex flex-col items-center justify-center">
                    <motion.a href="https://github.com/HarrisLich" onHoverStart={() => {
                        buttonControl.start(buttonVariants.animate)
                    }} onHoverEnd={() => {
                        buttonControl.start(buttonVariants.rest)
                    }} className="relative w-[185px] h-[50px] z-20 font-[quicksand] font-bold border border-2 border-black">
                        <div className="w-full h-full justify-center flex items-center">See More</div>
                    </motion.a>
                    <motion.div className="absolute w-[180px] h-[45px] bg-blue-400/70 z-10" animate={buttonControl} initial={buttonVariants.rest}></motion.div>
                </motion.div>
            </div>
            <motion.div ref={banner} className="h-[200px] laptop:py-16 bg-blue-400/70 mt-[8%] flex items-center justify-center" style={{width: bannerIsInView ? "100%" : 0, transition: "all 1s 0.5s"}}>
                <motion.div style={{opacity: bannerIsInView ? 1 : 0, transition: "all 1s 1s"}} className="laptop:text-5xl text-white font-bold flex flex-row">What are you waiting for, 
                    <a href="mailto:harris.lichstein1@marist.edu" className="ml-3 hover:text-[#262626] transition-all duration-300">send a message!</a>
                </motion.div>
            </motion.div>
            
            <div className="w-full h-full flex grid grid-cols-3">
            <div className="w-full h-full flex flex-col laptop:px-12 mt-8">
                    <div className="laptop:text-xl font-[quicksand] font-bold text-zinc-300">About Me</div>
                    <h1 className="font-bold text-zinc-400 font-[quicksand] mt-4">I am Harris Lichstein. A learning Software Developer, currently studying at Marist College. Programming caught my interest at an early age, and as an individual I have pursued my interest. I have mainly produced applications using Java, JavaScript, HTML, JSX, CSS, TailwindCSS and Python.</h1>
                </div>
                <div className="w-full h-full flex flex-col laptop:px-12 mt-8">
                    <div className="laptop:text-xl font-[quicksand] font-bold text-zinc-300">Contact Me</div>
                    <a href="mailto:harris.lichstein1@marist.edu" className="mt-4 font-bold font-[quicksand] text-zinc-400">Email</a>
                    <a href="https://github.com/HarrisLich" className="mt-4 font-bold font-[quicksand] text-zinc-400">Github</a>
                </div>
                <div className="w-full h-full flex flex-col laptop:px-12 mt-8">
                    <div className="laptop:text-xl font-[quicksand] font-bold text-zinc-300">Links</div>
                    <a href="/" className="mt-4 font-bold font-[quicksand] text-zinc-400">Home</a>
                    <button onClick={()=> {
                        ref.current.scrollIntoView({behavior: 'smooth'})
                    }} className="mt-2 w-fit font-bold font-[quicksand] text-zinc-400">Projects</button>
                </div>
            </div>
        </div>
    )
}

export default PageFour