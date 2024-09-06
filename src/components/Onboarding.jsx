import { useState } from "react"

const Onboarding = () => {
    const [page, setPage] = useState(0);
    const cont = [
        {
            id: "1",
            image: "4.svg",
            black_head: "Monitor",
            pink_head: "Pregnancy",
            desc_head: "Welcome",
            desc: "Welcome to pregnancy, your trusted partner for a safe and healthy pregnancy journey."
        },
        {
            id: "2",
            image: "3.svg",
            black_head: "Tracking",
            pink_head: "Tools",
            desc_head: "",
            desc: "The app will provide tracking tools to help users monitor their pregnancy and postpartum progress, including weight tracking, contraction timing, and breastfeeding tracker."
        },
        {
            id: "3",
            image: "1.svg",
            black_head: "Educational",
            pink_head: "Resources",
            desc_head: "",
            desc: "The app will provide educational resources to help users learn about maternal health, including articles, videos, and podcasts."
        },
        {
            id: "4",
            image: "11.svg",
            black_head: "Community",
            pink_head: "Support",
            desc_head: "",
            desc: "The app will provide a community support feature to help users connect with other users, share experiences, and receive support."
        },
        {
            id: "5",
            image: "9.svg",
            black_head: "Appointment",
            pink_head: "Scheduler",
            desc_head: "",
            desc: "The app will allow users to schedule and manage their appointments with healthcare providers, such as doctors and midwives.",
        },
    ]

    function nextPage() {
        if (page < 4) {
            let this_page = page + 1;
            document.getElementById('body').classList.toggle('animate-fade')
            setPage(this_page);
        }
    }

    function prevPage() {
        if (page != 0) {
            let this_page = page - 1;
            document.getElementById('body').classList.toggle('animate-fade')
            setPage(this_page);
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-full">

                <div id="body" className="bg-slate-50 animate-fade">
                    <div className="w-[300px] h-[444px]">
                        <div className="flex flex-col justify-start items-center absolute left-[30px] top-[186px] gap-[59px]">

                            <img src={"/images/art/" + cont[page].image} className="w-[200px] h-[200px]" alt={"onboard-" + cont[page].id} />

                            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[15px]">
                                <p className="flex-grow-0 flex-shrink-0 text-2xl text-center text-black">{cont[page].desc_head}</p>
                                <p className="flex-grow-0 flex-shrink-0 w-[300px] text-sm text-center text-black">
                                    {cont[page].desc}
                                </p>
                                {cont[page].id == 5 ? <button className="w-full h-[40px] min-h-[40px] text-lg btn bg-[#ec407a] text-white hover:bg-[#ec407a] hover:bg-opacity-85">Get Started</button> : null}
                            </div>
                        </div>
                        <p className="w-[153px] absolute left-[104px] top-[100px] text-3xl font-bold text-center">
                            <span className="w-[153px] text-3xl font-bold text-center text-black">{cont[page].black_head} </span>
                            <span className="w-[153px] text-3xl font-bold text-center text-[#ec407a]">{cont[page].pink_head} </span>
                        </p>
                    </div>

                    <div className="absolute top-0 right-0 w-20 h-full" onTouchStart={() => nextPage()} onClick={() => nextPage()}></div>
                    <div className="absolute top-0 left-0 w-20 h-full" onTouchStart={() => prevPage()} onClick={() => prevPage()}></div>
                </div>

                <div className="absolute bottom-0 flex flex-row items-center justify-between w-full p-5">
                    <a href="#!" className={page == 4 ? "invisible" : ""} onClick={() => setPage(4)}>Skip</a>

                    <div className="dots">
                        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[5px]">

                            {cont.map((item, index) => (
                                <svg
                                    key={index}
                                    width={10}
                                    height={11}
                                    viewBox="0 0 10 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-grow-0 flex-shrink-0"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <circle cx={5} cy="5.5" r={5} fill={index === page ? "#EC407A" : "#D9D9D9"}
                                    />
                                </svg>
                            ))}

                        </div>
                    </div>

                    <a href="#!" className={page == 4 ? "invisible" : ""} onClick={() => nextPage()}>Next</a>
                </div>
            </div >
        </>
    )
}

export default Onboarding
