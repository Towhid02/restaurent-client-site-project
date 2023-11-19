import error from "../../public/assets/404.png"

const Error = () => {
    return (
        <div className="w-full p-40">
            <img className="w-full " src={error} alt="" />
        </div>
    );
};

export default Error;