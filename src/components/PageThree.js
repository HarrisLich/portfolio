import { motion, useInView } from "framer-motion"
import React from 'react'
import js from "../imgs/js.png"

function PageThree() {

    const refTitle = React.useRef(null)
    const titleIsInView = useInView(refTitle, { once: true })

    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true })

    const refReactIcon = React.useRef(null)
    const reactIconIsInView = useInView(refReactIcon, { once: true })

    return (
        <div className="w-full flex flex-col" style={{ height: "calc(90vh)" }}>
            <motion.div className="w-full items-center justify-center flex mt-[8%] text-white laptop:text-4xl font-bold" ref={refTitle} style={{ opacity: titleIsInView ? 1 : 0, transition: "all 1s 0.5s" }}>
                Tools for Present and Future Development
            </motion.div>
            <motion.div ref={ref} style={{ transform: isInView ? "none" : "translateY(30px)", opacity: isInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s" }} className="w-full items-center justify-center mt-8 flex text-white laptop:text-2xl text-zinc-400 font-[quicksand]">
                Technologies I Prefer
            </motion.div>
            <div className="w-full flex flex-row items-center justify-center mt-[2%] laptop:gap-48 gap-12">
                <motion.div ref={refReactIcon} style={{ opacity: reactIconIsInView ? 1 : 0, transition: "all 1s 1.5s" }} className="flex flex-col items-center justify-center text-zinc-400 font-[quicksand]">
                    <img className="laptop:w-[75px] w-[50px]" src="https://img.icons8.com/plasticine/100/react.png" alt="react" />
                    <h1 className="mt-2">React js</h1>
                </motion.div>
                <motion.div style={{ opacity: reactIconIsInView ? 1 : 0, transition: "all 1s 2s" }} className="flex flex-col items-center justify-center text-zinc-400 font-[quicksand]">
                    <img className="laptop:w-[75px] w-[50px]" src={js} alt="react" />
                    <h1 className="mt-2">JavaScript</h1>
                </motion.div>
                <motion.div style={{ opacity: reactIconIsInView ? 1 : 0, transition: "all 1s 2.5s" }} className="flex flex-col items-center justify-center text-zinc-400 font-[quicksand]">
                    <img className="laptop:w-[75px w-[50px]]" src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="react" />
                    <h1 className="mt-2">Mongodb</h1>
                </motion.div>
                <motion.div style={{ opacity: reactIconIsInView ? 1 : 0, transition: "all 1s 3s" }} className="flex flex-col items-center justify-center text-zinc-400 font-[quicksand]">
                    <img className="laptop:w-[75px] w-[50px]" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="react" />
                    <h1 className="mt-2">Tailwindcss</h1>
                </motion.div>
            </div>
            <div className="w-full flex flex-row items-center justify-center mt-[2%] laptop:gap-48 gap-12">
                <motion.div style={{ opacity: reactIconIsInView ? 1 : 0, transition: "all 1s 3.5s" }} className="flex flex-col items-center justify-center text-zinc-400 font-[quicksand]">
                    <img className="laptop:w-[75px] w-[50px]" src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="react" />
                    <h1 className="mt-2">MySQL</h1>
                </motion.div>
                <motion.div style={{ opacity: reactIconIsInView ? 1 : 0, transition: "all 1s 4s" }} className="flex flex-col items-center justify-center text-zinc-400 font-[quicksand]">
                    <img className="laptop:w-[75px] w-[50px]" src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="react" />
                    <h1 className="mt-2">AWS</h1>
                </motion.div>
                <motion.div style={{ opacity: reactIconIsInView ? 1 : 0, transition: "all 1s 4.5s" }} className="flex flex-col items-center justify-center text-zinc-400 font-[quicksand]">
                    <img className="laptop:w-[75px] w-[50px]" src="https://www.vectorlogo.zone/logos/apache_maven/apache_maven-icon.svg" alt="react" />
                    <h1 className="mt-2">Maven</h1>
                </motion.div>
                <motion.div style={{ opacity: reactIconIsInView ? 1 : 0, transition: "all 1s 4.5s" }} className="flex flex-col items-center justify-center text-zinc-400 font-[quicksand]">
                    <svg fill="none" className="laptop:w-[75px] w-[50px]" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="#000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
                            <path d="m63.02 200.61-43.213-174.94 173.23 49.874z" />
                            <path d="m106.39 50.612 21.591 87.496-86.567-24.945z" />
                            <path d="m84.91 125.03-10.724-43.465 43.008 12.346z" />
                            <path d="m63.458 38.153 10.724 43.465-43.008-12.346z" />
                            <path d="m149.47 62.93 10.724 43.465-43.008-12.346z" />
                            <path d="m84.915 125.06 10.724 43.465-43.008-12.346z" />
                        </g>
                    </svg>
                    <h1 className="mt-2">Three.js</h1>
                </motion.div>
            </div>
            <motion.div style={{ transform: reactIconIsInView ? "none" : "translateY(30px)", opacity: reactIconIsInView ? 1 : 0, transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 5s" }} className="w-full items-center justify-center mt-[4%] flex text-white laptop:text-xl text-zinc-400 font-[quicksand]">Other Technologies</motion.div>
            <div className="w-full flex flex-row items-center justify-center mt-[2%] laptop:gap-48 gap-12 py-12">
                <motion.div style={{ opacity: reactIconIsInView ? 1 : 0, transition: "all 1s 5.5s" }} className="flex flex-col items-center justify-center text-zinc-400 font-[quicksand]">
                    <img className="laptop:w-[75px] w-[50px]" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"></img>
                    <h1 className="mt-2">Nodejs</h1>
                </motion.div>
                <motion.div style={{ opacity: reactIconIsInView ? 1 : 0, transition: "all 1s 6s" }} className="flex flex-col items-center justify-center text-zinc-400 font-[quicksand]">
                    <img className="laptop:w-[75px] w-[50px]" src="https://www.vectorlogo.zone/logos/java/java-icon.svg"></img>
                    <h1 className="mt-2">Java</h1>
                </motion.div>
                <motion.div style={{ opacity: reactIconIsInView ? 1 : 0, transition: "all 1s 6.5s" }} className="flex flex-col items-center justify-center text-zinc-400 font-[quicksand]">
                    <img className="laptop:w-[75px] w-[50px]" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"></img>
                    <h1 className="mt-2">Express</h1>
                </motion.div>
            </div>
            <div className="w-full border-t border-zinc-700"></div>
        </div>
    )
}

export default PageThree