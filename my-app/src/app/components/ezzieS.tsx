import React from "react";

export default function EzzieS() {
    return (
        <div className='min-h-full min-w-full' style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU")`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`
        }}>
            
            <div className="ml-auto mr-auto flex" style={{
                height: `100vh`
            }}>
                <div className="min-w-fit min-h-full bg-gray-600/75 overflow-auto inline-block ml-auto mr-auto">
                    <h1 className="p-2 text-center text-5xl">My Website!</h1>
                    <h2 className="pl-2 text-lg">Images:</h2>
                    <img className="px-2 pt-2 ml-auto mr-auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU' />

                </div>
            </div>
        </div>
    );
}