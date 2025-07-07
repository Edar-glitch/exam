import React from "react";
import Card from "./Card";

function Section1() {
    return (
        <section className="min-h-screen px-4 py-10 md:py-20">
            <div className=" md:mt-[150px] flex flex-col justify-center items-center">
                <div className="flex flex-col lg:flex-row  xl:items-center xl:gap-[230px] lg:gap-40 text-center lg:text-left">
                    <h1 className="font-semibold text-start text-[32px] sm:text-[40px] lg:text-[50px] max-w-[503px] ">
                        The best service we offer to you
                    </h1>
                    <p className="font-light text-start text-gray-500 text-[16px] sm:text-[18px] lg:text-[20px] max-w-[553px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
                <div className="flex flex-wrap justify-center mt-10 gap-4 md:gap-6 lg:gap-8 lg:pl-[20px] lg:pr-3">
                    <Card className=" w-[280px] md:w-[300px] lg:mb-20" img={"/section_1.svg"} title={'Choose Interior'} />
                    <Card className=" w-[280px] lg:mb-20 md:w-[300px]" img={"/section_2.svg"} title={'Best Construction'} />
                    <Card className=" w-[280px] lg:mb-20 md:w-[300px]" img={"/section_3.svg"} title={'Color Provider'} />
                    <Card className=" w-[280px] lg:mb-20 md:w-[300px]" img={"/section_4.svg"} title={'Security Contract'} />
                </div>
            </div>
        </section>
    )
}

export default Section1