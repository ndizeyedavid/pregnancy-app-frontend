
const View = ({ children }) => {
    return (
        <>
            {/* <div className="mockup-phone"> */}
            {/* <div className="camera"></div> */}
            {/* <div className="display"> */}
            {/* <div id="view" className="relative overflow-y-auto bg-[#f8fafc] artboard phone-1" style={{ width: 360, height: 'calc(100vh - 50px)' }}> */}
            <div id="view" className="relative overflow-y-auto bg-[#f8fafc] artboard phone-1" style={{ width: "100vw", height: '100vh' }}>
                {children}
            </div>
            {/* </div> */}
            {/* </div > */}
        </>
    )
}

export default View
