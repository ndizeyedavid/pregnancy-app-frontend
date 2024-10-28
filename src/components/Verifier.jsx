
const Verifier = () => {
  return (
    <>
     <div className="fixed w-full h-full z-[99999999]" style={{background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(4px)"}}>
        <div className="fixed z-0 inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">

                <div className="my-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="inline w-14 " fill="#ec407a"><path d="m438-452-58-57q-11-11-27.5-11T324-508q-11 11-11 28t11 28l86 86q12 12 28 12t28-12l170-170q12-12 11.5-28T636-592q-12-12-28.5-12.5T579-593L438-452ZM326-90l-58-98-110-24q-15-3-24-15.5t-7-27.5l11-113-75-86q-10-11-10-26t10-26l75-86-11-113q-2-15 7-27.5t24-15.5l110-24 58-98q8-13 22-17.5t28 1.5l104 44 104-44q14-6 28-1.5t22 17.5l58 98 110 24q15 3 24 15.5t7 27.5l-11 113 75 86q10 11 10 26t-10 26l-75 86 11 113q2 15-7 27.5T802-212l-110 24-58 98q-8 13-22 17.5T584-74l-104-44-104 44q-14 6-28 1.5T326-90Z" /></svg>
                    <h4 className="mt-4 text-lg font-semibold text-gray-800">Wait for confirmation</h4>
                    <p className="mt-4 text-sm text-gray-600">In order to use this application, you have to wait for the doctor to confirm your identity, and you will be granted to access this system <hr className="my-5" /> If the problem proceeds, please contact the app admnistrator</p>
                </div>
            </div>
        </div>
     </div> 
    </>
  )
}

export default Verifier
