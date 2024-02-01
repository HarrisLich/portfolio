import { motion, useInView } from "framer-motion"
import React from 'react'
import { FaHandsHelping } from "react-icons/fa";

function PageTwo() {


    const refA = React.useRef(null);
    const refB = React.useRef(null)
    const isInViewA = useInView(refA, { once: true })
    const isInViewB = useInView(refB, { once: true })


    return (
        <div className="relative w-full flex flex-col" style={{ height: "calc(60vh)" }}>
            <motion.div style={{ transform: isInViewA ? "none" : "translateY(30px)", opacity: isInViewA ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s" }} ref={refA} className="flex items-start w-full justify-center text-zinc-300 font-bold text-5xl">
                You're Safe And in Good Hands
            </motion.div>
            <motion.div ref={refB} style={{ transform: isInViewB ? "none" : "translateY(30px)", opacity: isInViewB ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s" }} className="mt-8 text-xl text-zinc-400 font-[quicksand] flex items-center justify-center flex w-full flex-col">
                <h1>Customer satisfaction comes first, and in order to do that I </h1>
                <h1>decided to pickup skills and principles to provide quality </h1>
                <h1>service.</h1>
            </motion.div>
            <div className="mt-8 grid w-full h-full grid-cols-3 mt-24">
                <motion.div className="items-start justify-end flex w-full h-full px-4">
                    <div className="flex flex-col items-center justify-center">
                        <div className="rounded-full bg-blue-500 p-4">
                            <FaHandsHelping className="text-3xl text-white"></FaHandsHelping>
                        </div>
                        <h1 className="mt-8 text-zinc-300 text-2xl font-bold font-[quicksand]">Continuous Support</h1>
                    </div>
                </motion.div>
                <motion.div className="items-start justify-center flex w-full h-full">
                    <div className="flex flex-col items-center justify-center">
                        <div className="rounded-full bg-blue-500 p-4">
                            <FaHandsHelping className="text-3xl text-white"></FaHandsHelping>
                        </div>
                        <h1 className="mt-8 text-zinc-300 text-2xl font-bold font-[quicksand]">Back-end Development</h1>
                    </div>
                </motion.div>
                <motion.div className="items-start justify-start flex w-full h-full">
                    <div className="flex flex-col items-center justify-center">
                        <div className="rounded-full bg-blue-500 p-4">
                            <FaHandsHelping className="text-3xl text-white"></FaHandsHelping>
                        </div>
                        <h1 className="mt-8 text-zinc-300 text-2xl font-bold font-[quicksand]">Front-end Development</h1>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PageTwo