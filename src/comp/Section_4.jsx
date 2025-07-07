import React from 'react'

export default function Section_4() {
    return (
        <section className="mt-[150px] px-4">
            <div className="flex flex-col items-center text-center  ">
                <h1 className="font-semibold text-[28px] sm:text-3xl md:text-4xl xl:text-[50px]">
                    Levyna Blogs
                </h1>
                <p className="font-light text-gray-500 text-[16px] sm:text-[18px] md:text-[20px] mt-2 mb-20">
                    Various updated readings about interior and construction
                </p>

                <div className="flex flex-col xl:flex-row gap-10 items-center xl:items-start">
                    <div className="flex flex-col items-start gap-12">
                        <div className="flex flex-col text-start gap-5">
                            <p className="font-light text-gray-500 text-[16px]">
                                Sunday, 27 Jun 2022
                            </p>
                            <h1 className="font-semibold text-[24px] sm:text-[28px] max-w-[400px]">
                                How to choose the right contractor
                            </h1>
                            <p className="font-light text-gray-500 text-[16px] max-w-[500px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            </p>
                        </div>

                        <div className="flex justify-center xl:justify-start">
                            <img src="/section_shelfs_1.svg" alt="" className="w-full max-w-[400px]" />
                        </div>
                    </div>


                    <div className="flex flex-col gap-10">
                        {[
                            "/section_shelfs_2.svg",
                            "/shelfs_3.svg",
                            "/shelfs_4.svg"
                        ].map((img, index) => (
                            <div key={index} className="flex flex-col sm:flex-row gap-5 items-start">
                                <div>
                                    <img src={img} alt="" className="hidden xl:block w-[160px]" />
                                </div>
                                <div className="flex flex-col text-start gap-3">
                                    <p className="font-light text-gray-500 text-[16px]">
                                        Sunday, 27 Jun 2022
                                    </p>
                                    <h1 className="font-semibold text-[20px] sm:text-[24px]">
                                        How to choose the right contractor
                                    </h1>
                                    <div>
                                        <p className="font-light text-gray-500 text-[16px] max-w-[500px]">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                        </p>
                                        <p className="font-light text-gray-500 text-[16px] mt-3">
                                            Lorem Ipsum has been the industry's
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
