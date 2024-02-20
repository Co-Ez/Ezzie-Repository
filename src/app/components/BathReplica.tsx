'use client'

import { motion } from "framer-motion"
import "./css/classes.css";
import React, { useState } from "react";

export default function BathReplica() {
    const [page, setPage] = useState(1);
    const SelectedClass = "mt-auto mb-auto pl-2 pr-2 selected";
    const UnselectedClass = "mt-auto mb-auto pl-2 pr-2 hover:selected unselected";
    const imgClass = "w-28 p-1 grow ml-auto mr-auto basis-1/4";
    
    const container = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }
    const item = {
        hidden: {opacity: 0},
        show: {opacity: 1}
    }
    const item2 = {
        hidden: {scale: 0.001},
        show: {
            scale: 1,
            transition: {
                type: "spring", bounce: 0.5
            }
        }
    }
    const item3 = {
        hidden: {opacity: 0, rotate: 0},
        show: {opacity: 1, rotate: 360}
    }
    const item4 = {
        hidden: {opacity: 0, skew: 0},
        show: {
            opacity: 1,
            transition: {
                type: "circIn"
            }
        }
    }

    const img = <motion.img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" className={imgClass} variants={item}></motion.img>
    const img2 = <motion.img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" className={imgClass} variants={item2}></motion.img>
    const img3 = <motion.img src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?cs=srgb&dl=pexels-pixabay-355508.jpg&fm=jpg" className={imgClass} variants={item3}></motion.img>
    const img4 = <motion.img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" className={imgClass} variants={item4}></motion.img>
    
    const Switch = (event: { currentTarget: { id: React.SetStateAction<string>; }; }) => {
        console.log(event.currentTarget.id);

        if (event.currentTarget.id === "b1") {
            setPage(1);
        }
        else if (event.currentTarget.id === "b2") {
            setPage(2);
        }
        else if (event.currentTarget.id === "b3") {
            setPage(3);
        }
        else if (event.currentTarget.id === "b4"){    
            setPage(4);
        }
        else {
            setPage(5);
        }
    }

    return(
        <div className="min-h-full min-w-full flex flex-col-reverse" style={{
            backgroundImage: `url(/img/BathBG.jpg)`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            backgroundSize: `cover`
        }}>
            

            
            { page === 1 && <div className="min-w-full min-h-28 max-h-28 bg-white">
                This is number 1
                <motion.img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" className="ml-auto mr-auto" 
                    initial={{ scale: 0.001 }} 
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}>
                </motion.img>
            </div> }
            
            { page === 2 && <div className="min-w-full min-h-28 max-h-28 bg-white">
                This is number 2
                <motion.img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" className="ml-auto mr-auto"
                    initial={{ scale: 0.001 }} 
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}>
                </motion.img>
            </div> }
            
            { page === 3 && <div className="min-w-full min-h-28 max-h-28 bg-white">
                This is number 3
                <motion.img src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?cs=srgb&dl=pexels-pixabay-355508.jpg&fm=jpg" className="ml-auto mr-auto"
                    initial={{ scale: 0.001 }} 
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}>
                </motion.img>
            </div> }
            
            { page === 4 && <div className="min-w-full min-h-28 max-h-28 bg-white">
                This is number 4
                <motion.img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" className="ml-auto mr-auto"
                    initial={{ scale: 0.001 }} 
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}>
                </motion.img>
            </div> }

            { page === 5 && <div className="min-w-full min-h-28 max-h-28 bg-white flex-wrap">
                <h1>A fifth page 🤔</h1>
                <motion.div className="flex flex-wrap" variants={container} initial="hidden" animate="show">
                    {img}
                    {img2}
                    {img3}
                    {img4}
                    {img}
                    {img2}
                    {img3}
                    {img4}
                    {img}
                    {img2}
                    {img3}
                    {img4}
                    {img}
                    {img2}
                    {img3}
                    {img4}
                </motion.div>
            </div>}

            <div className="ml-6 bg-sky-900" style={{
                paddingTop: `10px`,
                background: `#35779C`
            }}>
                <div className="min-h-14 flex" style={{
                        width: `80%`,
                        backgroundColor: `#3BC0C7`
                    }}>
                    <motion.button type="button" className={page === 1 ? SelectedClass : UnselectedClass} id="b1" style={{height: `56px`}} onClick={Switch} animate={{scale:1}} whileDrag={{}} transition={{}}>Placeholder</motion.button>
                    <button type="button" className={page === 2 ? SelectedClass : UnselectedClass} id="b2" style={{height: `56px`}} onClick={Switch}>Placeholder</button>
                    <button type="button" className={page === 3 ? SelectedClass : UnselectedClass} id="b3" style={{height: `56px`}} onClick={Switch}>Placeholder</button>
                    <button type="button" className={page === 4 ? SelectedClass : UnselectedClass} id="b4" style={{height: `56px`}} onClick={Switch}>Placeholder</button>
                    <button type="button" className={page === 5 ? SelectedClass : UnselectedClass} id="b5" style={{height: `56px`}} onClick={Switch}>Placeholder</button>
                </div>
            </div>
            <div className="flex">
                <img src="/img/BathBG.jpg" className="mb-16 ml-6" onClick={() => setPage(1)} style={{
                    width: `150px`,
                    height: `150px`,
                    border: `7px solid #FFF`,
                    borderRadius: `24px`
                }}></img>
                <h1 className="text-white text-5xl ml-8 mt-3 overline" style={{textDecorationColor: `#FBAF17`}}>Placeholder</h1>
                <h1 className="text-white absolute mt-16 text-lg" style={{marginLeft: `208px`}}>Placeholder</h1>
            </div>
        </div>
    );
}