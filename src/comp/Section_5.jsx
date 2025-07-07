import React from "react";

function Section5(params) {
    return (
        <section className="relative h-[600px] bg-[#286F6C] mt-40 flex flex-col  justify-center xl:flex-row xl:justify-start items-center gap-10">
            <div className=" hidden  ml-20 xl:block">
                <img className="" src="/person.svg" alt="" />
            </div>
            <div className=" flex flex-col gap-5 xl:gap-10 ">
                <h1 className="font-semibold text-white text-[25px] text-center xl:text-start">This is what they say about us</h1>
                <p className="font-light text-white text-[36px] w-[500px] text-center xl:text-start">I really like the result, somehow it's exactly what I expected</p>
                <div >
                    <h1 className="font-semibold text-white text-center xl:text-start">Kim Jhone</h1>
                    <p className="text-gray-500 text-[18px] text-center xl:text-start">CEO of joyhome</p>
                </div>
                <div className="flex flex-row justify-center xl:justify-start gap-5">

                    <div className="hover:bg-orange-500 hover:text-white bg-white w-[50px] h-[50px] rounded-full flex  justify-center">
                        <img  src="/str2.svg" alt="" width={30} height={30}/>
                    </div>

                    <div className="hover:bg-orange-500 hover:text-white bg-white w-[50px] h-[50px] rounded-full flex  justify-center">
                        <img  src="/str.svg" alt=""  width={30} height={30}/>
                    </div>

                </div>
            </div>

            <div className=" mt-[20px] xl:absolute  xl:left-[1000px] xl:top-[350px]">
                <div className="relative w-[360px] h-[165px] bg-white flex flex-col text-center items-center justify-center">
                    <img className="absolute bottom-[65px]" src="/,,.svg" alt="" />
                    <h1 className="text-black text-[25px] w-[250px]">We have made many people satisfied with our work</h1>
                </div>
            </div>
        </section>
    )
}

export default Section5