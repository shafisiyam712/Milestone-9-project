/* eslint-disable no-nonoctal-decimal-escape */

import { Link } from "react-router-dom";


const Blogs = () => {
    return (
        <div className="w-11/12 mx-auto mt-16">
            <h1 className="text-center font-bold text-2xl text-[#1E2A47] animate__animated animate__bounce animate__repeat-3">Reed Experts Blogs</h1>
            <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
                <div className='card border border-rounded-xl border-[#1E2A47] shadow-xl overflow-hidden p-4 mb-2 gap-3'>
                    <div className='mb-2  space-y-4 '>
                        <img className='w-80 h-72 border rounded-full' src="https://i.ibb.co.com/kBNXnG3/Bio-self-care-while-traveling-960x950.png" />
                    </div>
                    <div className=''>
                        <h4 className='font-extrabold text-xl text-center'>Barbara Kamholz</h4>
                    </div>
                    <div className='my-1 text-center'>
                        <h4 className="font-bold">Doctorate In Clinical Psychology</h4>
                        <Link
                            to='https://blog.eftours.com/article/mental-wellbeing-and-self-care-while-traveling/' className="text-blue-500 hover:underline hover:text-blue-700" target="_blank">Reed Blog</Link>

                    </div>
                </div>

                <div className='card border border-rounded-xl  border-[#1E2A47] shadow-xl overflow-hidden p-4 mb-2 gap-3'>
                    <div className='mb-2  space-y-4 '>
                        <img className='w-80 h-72 border rounded-full' src="https://i.ibb.co.com/qjSjTXq/Cleveland-Way-North-Yorkshire-hiking-trails-min.png" />
                    </div>
                    <div className=''>
                        <h4 className='font-extrabold text-xl text-center'>Tom Smallwood </h4>
                    </div>
                    <div className='my-1 text-center'>
                        <h4 className="font-bold">Wild Life Expert</h4>
                        <Link
                            to='https://armchairmountaineer.com/blog/2021/8/6/cleveland-way-scarborough-to-high-hawsker' className="text-blue-500 hover:underline hover:text-blue-700" target="_blank">Reed Blog</Link>
                    </div>
                </div>
                <div className='card border border-rounded-xl  border-[#1E2A47] shadow-xl overflow-hidden p-4 mb-2 gap-3'>
                    <div className='mb-2  space-y-4 '>
                        <img className='w-80 h-72 border rounded-full' src="https://i.ibb.co.com/Z1fgvN7/John-Burns-Last-Hillwalker.jpg" />
                    </div>
                    <div className=''>
                        <h4 className='font-extrabold text-xl text-center'>Jhon D Burns</h4>
                    </div>
                    <div className='my-1 text-center'>
                        <h4 className="font-bold">An Expert Ice Climber</h4>
                        <Link
                            to='https://armchairmountaineer.com/blog/2018/4/13/leave-your-worries-behind-a-guest-post-by-john-d-burns' className="text-blue-500 hover:underline hover:text-blue-700" target="_blank">Reed Blog</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;