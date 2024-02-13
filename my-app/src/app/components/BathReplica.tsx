'use client'

import "./css/classes.css";
import React, { use, useState } from "react";

export default function BathReplica() {
    const [page, setPage] = useState(1);
    const SelectedClass = "mt-auto mb-auto pl-2 pr-2 selected";
    const UnselectedClass = "mt-auto mb-auto pl-2 pr-2 hover:selected unselected";
    
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
        else {    
            setPage(4);
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
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" className="ml-auto mr-auto"></img>
            </div> }
            { page === 2 && <div className="min-w-full min-h-28 max-h-28 bg-white">
                This is number 2
                <img src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" className="ml-auto mr-auto"></img>
            </div> }
            { page === 3 && <div className="min-w-full min-h-28 max-h-28 bg-white">
                This is number 3
                <img src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?cs=srgb&dl=pexels-pixabay-355508.jpg&fm=jpg" className="ml-auto mr-auto"></img>
            </div> }
            { page === 4 && <div className="min-w-full min-h-28 max-h-28 bg-white">
                This is number 4
                <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" className="ml-auto mr-auto"></img>
            </div> }

            <div className="ml-6 bg-sky-900" style={{
                paddingTop: `10px`,
                background: `#35779C`
            }}>
                <div className="min-h-14 flex" style={{
                        width: `80%`,
                        backgroundColor: `#3BC0C7`
                    }}>
                    <button type="button" className={page === 1 ? SelectedClass : UnselectedClass} id="b1" style={{height: `56px`}} onClick={Switch}>Placeholder</button>
                    <button type="button" className={page === 2 ? SelectedClass : UnselectedClass} id="b2" style={{height: `56px`}} onClick={Switch}>Placeholder</button>
                    <button type="button" className={page === 3 ? SelectedClass : UnselectedClass} id="b3" style={{height: `56px`}} onClick={Switch}>Placeholder</button>
                    <button type="button" className={page === 4 ? SelectedClass : UnselectedClass} id="b4" style={{height: `56px`}} onClick={Switch}>Placeholder</button>
                </div>
            </div>
            <div className="flex">
                <img src="/img/BathBG.jpg" className="mb-16 ml-6" style={{
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