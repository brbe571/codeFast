"use client"

import { useState } from "react";

const FAQListItem = ({ qa }) => {
    {/* Set isOpen to false by default */}    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <li key={qa.question}>
            {/* 1. Question clickable onClick true becomes false and vice versa*/}
            <button className="py-5 font-semibold border-b w-full text-left flex items-centre justify-between" onClick={() => {setIsOpen(!isOpen)}}>
                <p>{qa.question}</p>
                {isOpen ? (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                        className="size-6">
                        <path 
                            strokeLinecap="round" strokeLinejoin="round" 
                            d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                ) : (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                        className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M5 12h14" />
                    </svg>

                )}
            </button>
            {/* 2. Answer if isOpen is true styling is block else hidden*/}
            <div className={`${isOpen ? "block" : "hidden"} mt-3 mb-6 opacity-90`}>{qa.answer}</div>
        </li>
    )
}

export default FAQListItem;