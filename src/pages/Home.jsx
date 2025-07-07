import Button from "../comp/Button";
import Section1 from "../comp/section_1";
import Section2 from "../comp/section_2";
import Section3 from "../comp/Section_3";
import Section_4 from "../comp/Section_4";
import Section5 from "../comp/Section_5";
import Footer from "../comp/Footer";
import Header from "./Header";

function Home() {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/fon.svg"
        alt="altofimage"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10  h-full  flex flex-col">
        <Header className="mt-[26px] flex justify-between items-center px-4 md:px-12 relative" />

        <main>
          <div className="mt-[120px] flex justify-start pl-4 md:pl-12 lg:pl-[100px]">
            <div className="flex flex-col gap-5 text-start ">
              <h1 className="relative font-semibol w-[350px] text-[38px] sm:w-[700px] sm:text-[48px] md:text-[48px] lg:text-[50px] xl:w-[703px] xl:text-[58px]  2xl:w-[703px] 2xl:text-[60px]">
                We are ready to help you in making your{" "}
                <span className="text-orange-500">Dream Home</span>
              </h1>
              {/* <img className="absolute left-[430px] top-[360px] md:" src="/line.svg" alt="" width={330} /> */}
              <p className="font-light text-gray-500  sm:text-[20px] xl:w-[703px] xl:text-[25px]  2xl:w-[703px] 2xl:text-[28px]">
                We try to understand as best we can because of your desire to
                realize your dream home, of course with minimal costs but the
                best quality possible
              </p>
              <Button
                className="border border-orange-500 pt-[20px] pb-[20px] pl-[25px] pr-[25px] text-orange-500"
                title={"Lets start building"}
              />
            </div>
          </div>
        </main>
      </div>

      <Section1 />

      <Section2 />

      <Section3 />

      <Section_4 />

      <Section5 />

      <Footer />
    </div>
  );
}

export default Home;
