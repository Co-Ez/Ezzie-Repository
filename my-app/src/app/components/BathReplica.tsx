'use client'

import React, { useState } from "react";

export default function BathReplica() {
    const Switch = () => {
        document.getElementById("b1").style.color = "#00B0BD";
        document.getElementById("b1").style.backgroundColor = "white";

        document.getElementById("b2").style.color = "black";
        document.getElementById("b2").style.backgroundColor = "";
        
        document.getElementById("b3").style.color = "black";
        document.getElementById("b3").style.backgroundColor = "";

        document.getElementById("b4").style.color = "black";
        document.getElementById("b4").style.backgroundColor = "";
    }

    const Switch2 = () => {
        document.getElementById("b2").style.color = "#00B0BD";
        document.getElementById("b2").style.backgroundColor = "white";

        document.getElementById("b1").style.color = "black";
        document.getElementById("b1").style.backgroundColor = "";
        
        document.getElementById("b3").style.color = "black";
        document.getElementById("b3").style.backgroundColor = "";

        document.getElementById("b4").style.color = "black";
        document.getElementById("b4").style.backgroundColor = "";
    }

    const Switch3 = () => {
        document.getElementById("b3").style.color = "#00B0BD";
        document.getElementById("b3").style.backgroundColor = "white";

        document.getElementById("b1").style.color = "black";
        document.getElementById("b1").style.backgroundColor = "";
        
        document.getElementById("b2").style.color = "black";
        document.getElementById("b2").style.backgroundColor = "";

        document.getElementById("b4").style.color = "black";
        document.getElementById("b4").style.backgroundColor = "";
    }

    const Switch4 = () => {
        document.getElementById("b4").style.color = "#00B0BD";
        document.getElementById("b4").style.backgroundColor = "white";

        document.getElementById("b1").style.color = "black";
        document.getElementById("b1").style.backgroundColor = "";
        
        document.getElementById("b2").style.color = "black";
        document.getElementById("b2").style.backgroundColor = "";

        document.getElementById("b3").style.color = "black";
        document.getElementById("b3").style.backgroundColor = "";
    }

    return(
        <div className="min-h-full min-w-full flex flex-col-reverse" style={{
            backgroundImage: `url(/img/BathBG.jpg)`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            backgroundSize: `cover`
        }}>
            
            
            <div className="min-w-full min-h-28 max-h-28 bg-white">
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
                Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder 
            </div>
            <div className="ml-8 bg-sky-900" style={{
                paddingTop: `8px`,
                background: `#005A71`
            }}>
                <div className="min-h-14 flex" style={{
                        width: `75%`,
                        backgroundColor: `#00B0BD`
                    }}>
                    <button type="button" className="mt-auto mb-auto pl-2 pr-2" id="b1" style={{height: `56px`}} onClick={Switch}>Placeholder</button>
                    <button type="button" className="mt-auto mb-auto pl-2 pr-2" id="b2" style={{height: `56px`}} onClick={Switch2}>Placeholder</button>
                    <button type="button" className="mt-auto mb-auto pl-2 pr-2" id="b3" style={{height: `56px`}} onClick={Switch3}>Placeholder</button>
                    <button type="button" className="mt-auto mb-auto pl-2 pr-2" id="b4" style={{height: `56px`}} onClick={Switch4}>Placeholder</button>
                </div>
            </div>
            <div className="flex">
                <img src="/img/BathBG.jpg" className="mb-16 ml-8" style={{
                    width: `150px`,
                    height: `150px`,
                    border: `7px solid #FFF`,
                    borderRadius: `24px`
                }}></img>
                <h1 className="text-white text-5xl ml-8 mt-3 overline" style={{textDecorationColor: `#EA8000`}}>Placeholder</h1>
                <h1 className="text-white absolute mt-16 text-lg" style={{marginLeft: `216px`}}>Placeholder</h1>
            </div>
        </div>
    );
}