"use client"
import React from "react";
import featureJson from "@/public/Data/featured.json" with {type: "json"};

type FeaturedDisplayData = {
    id: string,
    side: string
}
let items = featureJson;

export default function FeaturedItemDisplay({id, side} : FeaturedDisplayData){
    //grabbing the featured data
    let featureData
    for(const i in items){
        if(id==items[i].id) { featureData = items[i]}
    }
    
    
    return(
        side==="left" ? (
        <div className="flex flex-col md:flex-row p-10 pb-0 justify-between mt-6">
            <div className="flex justify-self-start items-center max-w-full md:max-w-7/16 mb-14 md:mb-0">
                <div className="shadow-lg shadow-black/50">
                    <img src={featureData?.image} className="max-h-150"></img>
                </div>
            </div>
            <div className="flex items-center max-w-full md:max-w-7/16">
                <div className="justify-items-end mr-4">
                    <p className="text-gray-600 text-2xl w-fit indent-8 font-manrope">"{featureData?.comment}"</p>
                    <h1 className="text-black text-xl w-fit font-bold text-right mt-4">{featureData?.project}</h1>
                </div>
            </div>
        </div>) : 
        (
        <div className="flex flex-col md:flex-row-reverse p-10 pb-0 justify-between mt-6 ">
            <div className="flex justify-self-end items-center max-w-full md:max-w-7/16 mb-14 md:mb-0">
                <div className="shadow-lg shadow-black/50">
                    <img src={featureData?.image} className="max-h-150"></img>
                </div>
            </div>
            <div className="flex items-center max-w-full md:max-w-7/16">
                <div className="justify-items-end ml-4">
                    <p className="text-gray-600 text-2xl w-fit indent-8 font-manrope">"{featureData?.comment}"</p>
                    <h1 className="text-black text-xl w-fit font-bold text-right mt-4">{featureData?.project}</h1>
                </div>
            </div>
        </div>
        )
    )
    
}