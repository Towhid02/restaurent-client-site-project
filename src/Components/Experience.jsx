import experience from "../../public/assets/experience.png"

const Experience = () => {
    return (
        <div className=" bg-experienceBg">
            <div className="flex flex-row-reverse  justify-center items-center px-5 py-10 gap-10">
                <div className="flex-1">
                    <img className=" rounded-lg" src={experience} alt="" />
                </div>
                <div className="flex-1">
                    <h1 className=" text-xl lg:text-3xl font-grand font-bold text-slate-600">Our Restaurant 5 years working experience.</h1>
                    <p className="font-itim text-base lg:text-xl ">
                    Over the past half-decade, our restaurant has become a beacon of culinary excellence and hospitality. Our journey has been marked by unwavering commitment to delivering exceptional dining experiences, and we take pride in the  key aspects of our 5-year restaurant experience
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;