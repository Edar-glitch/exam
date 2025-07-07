import React from "react";
import Button from "./Button";

function Section3(params) {
    return (
        <section className="mt-24 px-4 md:px-8 lg:px-16">
            <div className="flex flex-col xl:flex-row justify-center gap-10 max-w-[1200px] mx-auto ">

                <div className="hidden xl:block ">
                    <img src="/section2.svg" alt="" className="w-full max-w-[400px]" />
                </div>

                <div className="flex flex-col justify-start gap-12 text-center xl:text-start">
                    <h1 className="font-semibold text-[28px] sm:text-3xl md:text-4xl xl:text-[50px] max-w-md sm:max-w-lg xl:max-w-[650px] mx-auto xl:mx-0"> Levyna will provide a pleasant experience in making a house</h1>
                    <p className="font-light text-gray-500 text-[16px] sm:text-[18px] md:text-[20px] max-w-md sm:max-w-lg xl:max-w-[660px] mx-auto xl:mx-0" style={{ wordSpacing: "0.625rem" }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="flex justify-center xl:justify-start">
                        <Button className="py-4 px-5 bg-orange-600 text-white " title="Consultation with us" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3