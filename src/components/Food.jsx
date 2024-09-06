
const Food = ({ foodName, prescription }) => {
    return (
        <>
            <div className="w-full p-2 space-y-2">
                <div className="flex flex-row gap-[15px] items-center bg-white w-full p-[10px] rounded-md shadow-md">
                    <div className="flex items-center justify-center bg-[#FFCDD2] w-[50px] h-[50px] rounded-md">
                        <img src="/images/art/food_card.svg" className="w-[25px] h-[25px]" alt="Seasame" />
                    </div>

                    <div className="flex flex-col gap-[2px]">
                        <h3 className="text-black font-[500]">{foodName}</h3>
                        <p className="text-[14px] font-[400] text-[#8c8a8a]">{prescription}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Food
