import React from "react";

export default function EzzieS() {
    return (
        <div className='min-h-full min-w-full' style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU")`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`
        }}>
            <h1 className="p-2 text-center text-5xl">My Website!</h1>
            <div className="ml-auto mr-auto flex" style={{
                height: `650px`,
                width: `1500px`
            }}>
                <div className="min-w-full min-h-full bg-gray-600/75 overflow-auto inline-block ml-auto mr-auto">
                    <h2 className="pl-2 text-lg">Images:</h2>
                    <img className="pl-4 pt-2" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU' />

                </div>
            </div>
        </div>
    );
}