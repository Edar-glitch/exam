import React from "react";

function Section2(params) {
    return (

        <section className="mt-[100px] bg-[#286F6C] py-10 px-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around gap-8">
                <div className="text-center lg:text-left max-w-[350px]">
                    <h1 className="text-white text-[28px]  sm:text-[36px]">How much have we accomplished?</h1>
                </div>
                <div className="grid grid-cols-2 gap-6 lg:flex lg:flex-row lg:gap-[10px]">
                    <div className="flex flex-col items-start text-start">
                        <h1 className="text-orange-600 text-[30px] lg:text-[35px]">36+</h1>
                        <p className="text-white w-[200px] text-[16px] lg:text-[20px]">Project Complete</p>
                    </div>

                    <div className="flex flex-col items-start text-start">
                        <h1 className="text-orange-600 text-[30px] lg:text-[35px]">36+</h1>
                        <p className="text-white w-[200px] text-[16px] lg:text-[20px]">Project Complete</p>
                    </div>

                    <div className="flex flex-col items-start text-start">
                        <h1 className="text-orange-600 text-[30px] lg:text-[35px]">36+</h1>
                        <p className="text-white w-[200px] text-[16px] lg:text-[20px]">Project Complete</p>
                    </div>

                    <div className="flex flex-col items-start text-start">
                        <h1 className="text-orange-600 text-[30px] lg:text-[35px]">36+</h1>
                        <p className="text-white w-[200px] text-[16px] lg:text-[20px]">Project Complete</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Section2