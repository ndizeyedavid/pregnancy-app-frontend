import { Link } from "react-router-dom";

const Options = () => {
    return (
        <>
            <div className="w-full h-[40%] px-3 mt-16 mb-5">
                <div className="grid w-full grid-cols-2 gap-4">

                    <Link to="/food" className="btn w-[155px] h-[123px] pl-[46px] pr-[41px] pt-7 pb-[38px] bg-white rounded-[10px] hover:bg-gray-100 justify-center items-center inline-flex">
                        <div className="self-stretch flex-col justify-start items-center gap-2.5 inline-flex">
                            <div className="w-[30px] h-[30px] relative">
                                <img src="/images/art/food.svg" alt="Food" />
                            </div>
                            <div className="font-normal text-center text-black">Food</div>
                        </div>
                    </Link>


                    <Link to="/articles" className="btn w-[155px] h-[123px] pl-[46px] pr-[41px] pt-7 pb-[38px] bg-white rounded-[10px] hover:bg-gray-100 justify-center items-center inline-flex">
                        <div className="self-stretch flex-col justify-start items-center gap-2.5 inline-flex">
                            <div className="w-[30px] h-[30px] relative">
                                <img src="/images/art/articles.svg" alt="Articles" />
                            </div>
                            <div className="font-normal text-center text-black">Article</div>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Options
