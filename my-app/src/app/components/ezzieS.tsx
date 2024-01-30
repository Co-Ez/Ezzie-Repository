import React from "react";

export default function EzzieS() {
    return (
        <div className='overflow-auto min-h-full min-w-full' style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU")`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`
        }}>
            <h1 className="text-center">Let's make some bread!</h1>
            <div className="ml-auto mr-auto flex">
                <img className="inline-block ml-auto mr-auto" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVbCxkT0Q3UV36nni8epTYBb2LfvA5IqczA&usqp=CAU' />
            </div>
        </div>
    );
}