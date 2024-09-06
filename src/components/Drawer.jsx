import { NavLink } from "react-router-dom"


const Drawer = () => {
    return (
        <>
            <div className="drawer z-[999999999999999999999]">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="hidden btn btn-primary drawer-button">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="min-h-full p-4 menu bg-base-200 text-base-content w-80">
                        {/* Sidebar content here */}
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/food">Food</NavLink></li>
                        <li><NavLink to="/articles">Article</NavLink></li>
                        <li><NavLink to="/timeline">Timeline</NavLink></li>
                        <li><NavLink to="/doctor">Doctor</NavLink></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Drawer
