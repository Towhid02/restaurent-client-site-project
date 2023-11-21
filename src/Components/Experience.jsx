import experience from "../../public/assets/experience.png"

const Experience = () => {
    return (
        <div className=" bg-experienceBg bg-cover rounded-2xl">
            <h1 className=" pt-5 text-2xl md:text-3xl font-galada font-bold text-slate-700">Our Restaurant 5 years working experience.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  justify-center items-center px-5 py-10 gap-10">
            <div className="">
                    <p className="font-itim text-lg text-slate-900  lg:text-xl ">
                    Over the past half-decade, our restaurant has become a beacon of culinary excellence and hospitality. Our journey has been marked by unwavering commitment to delivering exceptional dining experiences, and we take pride in the  key aspects of our 5-year restaurant experience
                    </p>
                </div>
                <div className="" data-aos="zoom-out-down">
                    <img className=" rounded-lg" src={experience} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Experience;