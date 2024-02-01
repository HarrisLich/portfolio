import { motion, useInView } from "framer-motion"
import React from 'react'
import { FaHandsHelping } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";


function PageTwo() {


    const refA = React.useRef(null)
    const refB = React.useRef(null)
    const refHands = React.useRef(null)
    const refBackend = React.useRef(null)
    const refFrontend = React.useRef(null)
    const isInViewA = useInView(refA, { once: true })
    const isInViewB = useInView(refB, { once: true })
    const isInViewHands = useInView(refHands, { once: true })
    const isInViewBackend = useInView(refBackend, { once: true })
    const isInViewFrontend = useInView(refFrontend, { once: true })


    return (
        <div className="relative w-full flex flex-col" style={{ height: "calc(60vh)" }}>
            <motion.div style={{ transform: isInViewA ? "none" : "translateY(30px)", opacity: isInViewA ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s" }} ref={refA} className="flex items-start w-full justify-center text-zinc-300 font-bold text-lg laptop:text-5xl">
                You're Safe And in Good Hands
            </motion.div>
            <motion.div ref={refB} style={{ transform: isInViewB ? "none" : "translateY(30px)", opacity: isInViewB ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s" }} className="laptop:mt-8 mt-4 laptop:text-xl text-sm text-zinc-400 font-[quicksand] flex items-center justify-center flex w-full flex-col">
                <h1>Customer satisfaction comes first, and in order to do that I </h1>
                <h1>decided to pickup skills and principles to provide quality </h1>
                <h1>service.</h1>
            </motion.div>
            <div className="laptop:mt-24 mt-16 grid w-full h-full grid-cols-3 gap-8">
                <motion.div className="items-start justify-center flex w-full h-full">
                    <motion.div ref={refHands} style={{ transform: isInViewHands ? "none" : "translateY(30px)", opacity: isInViewHands ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s" }} className="flex flex-col items-center justify-center">
                        <div className="rounded-full bg-blue-500 p-4">
                            <FaHandsHelping className="laptop:text-3xl text-lg text-white"></FaHandsHelping>
                        </div>
                        <h1 className="laptop:mt-8 mt-4 text-zinc-300 laptop:text-2xl text-sm font-bold font-[quicksand]">Continuous Support</h1>
                        <h1 className="text-zinc-400 font-[quicksand] text-xs laptop:text-sm font-bold laptop:mt-8 mt-4">I'll work to maintain your web-based software up to date and</h1>
                        <h1 className="text-zinc-400 font-[quicksand] text-xs laptop:text-sm font-bold">competitive in the marketplace. I can release new, planned</h1>
                        <h1 className="text-zinc-400 font-[quicksand] text-xs laptop:text-sm font-bold">functional modules every other week and roll out urgent upgrades</h1>
                        <h1 className="text-zinc-400 font-[quicksand] text-xs laptop:text-sm font-bold">in a matter of hours thanks to well-established DevOps methods.</h1>
                    </motion.div>
                </motion.div>
                <motion.div className="items-start justify-center flex w-full h-full overflow-hidden">
                    <motion.div ref={refBackend} style={{ transform: isInViewBackend ? "none" : "translateY(30px)", opacity: isInViewBackend ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s" }} className="flex flex-col items-center justify-center">
                        <div className="rounded-full bg-blue-500 p-4">
                            <FaServer className="laptop:text-3xl text-lg text-white"></FaServer>
                        </div>

                        <h1 className="laptop:mt-8 mt-4 text-zinc-300 laptop:text-2xl text-sm font-bold font-[quicksand]">Back-end Development</h1>
                        <div className="flex flex-col overflow-auto">
                            <h1 className="text-zinc-400 font-[quicksand] text-xs laptop:text-sm font-bold laptop:mt-8 mt-4">I correctly carry out the back-end business logic implementation for your web </h1>
                            <h1 className="text-zinc-400 font-[quicksand] text-xs laptop:text-sm font-bold">application. I constantly rely on tested frameworks to guarantee efficient and</h1>
                            <h1 className="text-zinc-400 font-[quicksand] text-xs laptop:text-sm font-bold">well-written code. Additionally, I provide organized APIs that connect your </h1>
                            <h1 className="text-zinc-400 font-[quicksand] text-xs laptop:text-sm font-bold">online application to business or outside systems and services.</h1>
                        </div>


                    </motion.div>
                </motion.div>
                <motion.div className="items-start justify-start flex w-full h-full">
                    <motion.div ref={refFrontend} style={{ transform: isInViewFrontend ? "none" : "translateY(30px)", opacity: isInViewFrontend ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s" }} className="flex flex-col items-center justify-center">
                        <div className="rounded-full bg-blue-500 p-4">
                            <LiaLaptopCodeSolid className="laptop:text-3xl text-lg text-white"></LiaLaptopCodeSolid>
                        </div>
                        <h1 className="laptop:mt-8 mt-4 text-zinc-300 laptop:text-2xl text-sm font-bold font-[quicksand]">Front-end Development</h1>
                        <h1 className="text-zinc-400 font-[quicksand] text-xs laptop:text-sm font-bold laptop:mt-8 mt-4">As a web specialist, I usually conduct in-depth user audience analysis to </h1>
                        <h1 className="text-zinc-400 font-[quicksand] text-xs laptop:text-sm font-bold">determine their demands, then I incorporate these insights into UI design.</h1>
                        <h1 className="text-zinc-400 font-[quicksand] text-xs laptop:text-sm font-bold">I work hard to use intelligent front-end technology to bring a web application to</h1>
                        <h1 className="text-zinc-400 font-[quicksand] text-xs laptop:text-sm font-bold">life after stakeholders in the project have decided on its design and feel.</h1>


                    </motion.div>
                </motion.div>
            </div>
            <div className="w-full border-t border-zinc-700"></div>
        </div>
    )
}

export default PageTwo