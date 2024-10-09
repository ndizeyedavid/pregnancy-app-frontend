import { Link } from "react-router-dom";

const Options = () => {
    return (
        <>
            <div className="w-full h-[40%] px-3 mt-4 mb-5">
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

                <Link to="/sports" className="btn w-full h-[123px] mt-2 pl-[46px] pr-[41px] pt-7 pb-[38px] bg-white rounded-[10px] hover:bg-gray-100 justify-center items-center inline-flex">
                    <div className="self-stretch flex-col justify-start items-center gap-2.5 inline-flex">
                        <div className="w-[30px] h-[30px] relative">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ec407a"><path d="M520-40v-240l-84-80-40 176-276-56 16-80 192 40 64-324-72 28v136h-80v-188l158-68q35-15 51.5-19.5T480-720q21 0 39 11t29 29l40 64q26 42 70.5 69T760-520v80q-66 0-123.5-27.5T540-540l-24 120 84 80v300h-80Zm20-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/></svg>
                        </div>
                        <div className="font-normal text-center text-black">Sports</div>
                    </div>
                </Link>

            </div>
        </>
    )
}

export default Options
