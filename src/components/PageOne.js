import { motion, useAnimationControls, useInView } from 'framer-motion'
import React from 'react';

const draw = {
    hidden: { pathLength: 0, opacity: 0, fill: "#ffffff" },
    visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            fill: "#000000",
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: 5.5, type: "spring", duration: 2.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
                fill: { delay: 5.5, duration: 1.5 },
            }
        };
    }
};

const buttonVariants = {
    initial: {
        opacity: 0,
        translateY: 0
    },
    animate: {
        transition: {
            duration: 1,
            delay: 1.2
        },
        opacity: 1
    },
    rest: {
        rotateX: 0,
        transition: {
            delay: 0.5,
            duration: 0.5
        }
    },
    hover: {
        rotateX: 90,
        transition: {
            delay: 0,
            duration: 0.5
        }
    }
}

const buttonVariants2 = {
    rest: {
        rotateX: -90,
        transition: {
            delay: 0,
            duration: 0.5
        }
    },
    hover: {
        rotateX: 0,
        transition: {
            delay: 0.5,
            duration: 0.5
        }
    }
}

function PageOne() {

    const controls = useAnimationControls()
    const controls2 = useAnimationControls()

    const [canAnimate, setCanAnimate] = React.useState(true);

    return (
        <div className="w-full flex items-center justify-center grid grid-cols-3 grid-rows-3" style={{ height: "calc(85vh)" }}>
            <div className="absolute top-[25%] left-[18%] flex flex-col">
                <motion.div className="flex flex-col" animate={{ translateY: 0, opacity: 1, transition: {
                    duration: 1
                }}} initial={{
                    translateY: 30, opacity: 0
                }}>
                    <h1 className="text-white text-7xl font-bold">The perfect place to</h1>
                    <h1 className="text-white text-7xl font-bold mt-4">expand your</h1>
                    <h1 className="text-white text-7xl font-bold mt-4">business</h1>
                </motion.div>


                <motion.div className="mt-6 flex flex-col font-[quicksand]" animate={{ translateY: 0, opacity: 1, transition: {
                    duration: 1, delay: 0.5
                }}} initial={{
                    translateY: 30, opacity: 0
                }}>
                    <h1 className="text-zinc-400 text-2xl">Hi! You can call me Harris. I enjoy </h1>
                    <h1 className="text-zinc-400 text-2xl">developing modern webpages using</h1>
                    <h1 className="text-zinc-400 text-2xl">the latest design techniques and patterns!</h1>
                </motion.div>

                <div className="mt-12 flex flex-row gap-6">
                    <motion.div onHoverStart={() => {
                        if (canAnimate) {
                            controls.start(buttonVariants.hover)
                            controls2.start(buttonVariants2.hover)
                            setCanAnimate(false)
                        }
                    }} onHoverEnd={() => {
                        controls.start(buttonVariants.rest)
                        controls2.start(buttonVariants2.rest)
                        setCanAnimate(true)
                    }} animate={{ translateY: 0, opacity: 1, transition: {
                        duration: 1, delay: 1
                    }}} initial={{
                        translateY: 30, opacity: 0
                    }}>
                        <motion.button onLoadStart={()=> controls.start(buttonVariants.initial)} onLoad={()=> controls.start(buttonVariants.animate)} animate={controls} className="text-blue-400 font-[quicksand] font-bold text-xl px-12 py-3">Projects</motion.button>
                        <motion.button animate={controls2}  className="absolute font-[quicksand] left-0 text-blue-400 font-[quicksand font-bold text-xl px-12 py-3 bg-blue-400 text-[#262626]" style={{ rotateX: 90 }}>Projects</motion.button>
                    </motion.div>

                    <motion.div animate={{translateY: 0, opacity: 1, transition: {
                        duration: 1, delay: 1.5
                    }}} initial={{
                        opacity: 0,
                        translateY:30
                    }}>
                        <button className="text-blue-400 font-[quicksand] text-xl hover:bg-blue-400/10 transition-all duration-500 font-bold px-12 py-3 text-blue-400">View Resume</button>
                    </motion.div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default PageOne