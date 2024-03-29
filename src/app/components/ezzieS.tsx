'use client'

import React, { useState } from "react";

export default function EzzieS() {
    const [display, setDisplay] = useState(true);

    const Change = () => {
        if (display === false) {
            setDisplay(true);
        }
        else {
            setDisplay(false);
        };
    };
    
    return (
        <div className='min-h-full min-w-full' style={{
            backgroundImage: `url(/img/web_background.jpg)`,
            backgroundRepeat: `no-repeat`,
            backgroundAttachment: `fixed`,
            backgroundSize: `cover`
        }}>
            
            <div className="ml-auto mr-auto flex">
                <div className="min-w-fit min-h-full bg-gray-600/75 inline-block ml-auto mr-auto">
                    <h1 className="p-2 text-center text-5xl">My Website!</h1>
                    <h2 className="pl-2 text-lg">Images:</h2>
                    { display === true && <img className="px-2 pt-2 ml-auto mr-auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU' /> }
                    { display === false && <img className="px-2 pt-2 ml-auto mr-auto" src='https://images.immediate.co.uk/production/volatile/sites/30/2008/01/EasyWhiteBread-7756545.jpg?quality=90&webp=true&resize=375,341' />}
                    <button className="ml-auto mr-auto pt-4 bg-green-500 rounded-md" type="button" onClick={Change}>Change Image</button>
                    <img className="px-2 pt-2 ml-auto mr-auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU' />
                    <img className="px-2 pt-2 ml-auto mr-auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU' />
                    <img className="px-2 pt-2 ml-auto mr-auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU' />
                    <img className="px-2 pt-2 ml-auto mr-auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU' />

                    <img className="px-2 pt-2 ml-auto mr-auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU' />
                    <img className="px-2 pt-2 ml-auto mr-auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU' />
                    <img className="px-2 pt-2 ml-auto mr-auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU' />
                    <img className="px-2 pt-2 ml-auto mr-auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU' />

                </div>
            </div>
        </div>
    );
}