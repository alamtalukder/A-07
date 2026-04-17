import { Plus } from "lucide-react";
import React from "react";

const Banners = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-14 space-y-5  text-center">
        <div className="">
            <h1 className="font-bold text-5xl text-gray-700">Friends to keep close in your life</h1>
            <p className="text-lg text-gray-600 mt-4">
                Your personal shelf of meaningful connections. Browse, tend, and nurture
                the <br /> relationships that matter most.
            </p>      
        </div>
            <button className="flex mx-auto py-4 px-6 bg-emerald-700 rounded-xl cursor-pointer  hover:bg-emerald-800 transition-colors text-white"><Plus /> Add a Friend</button>
    </div>
  );
};

export default Banners;
