
const Sport = ({ Sportname, prescription }) => {
    return (
        <>
            <div className="w-full p-2 space-y-2">
                <div className="flex flex-row gap-[15px] items-center bg-white w-full p-[10px] rounded-md shadow-md">
                    <div className="flex items-center justify-center bg-[#FFCDD2] w-[50px] h-[50px] rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ec407a"><path d="M520-40v-240l-84-80-40 176-276-56 16-80 192 40 64-324-72 28v136h-80v-188l158-68q35-15 51.5-19.5T480-720q21 0 39 11t29 29l40 64q26 42 70.5 69T760-520v80q-66 0-123.5-27.5T540-540l-24 120 84 80v300h-80Zm20-700q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/></svg>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-black font-[500]">{Sportname}</h3>
                        <p className="text-[14px] font-[400] text-[#8c8a8a]">{prescription}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sport
