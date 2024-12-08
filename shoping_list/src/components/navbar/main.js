 import LoginLogout from "./loginLogout";
export default function Navbar() {
    return (
        <>
            <div className="flex flex-rows justify-between items-center bg-violet-400 h-full w-screen px-4">
                <div className="flex space-x-4">

                    <a className="btn" href="/">Home</a>
                    <a className="btn" href="/wishlist">Wishlist</a>
                </div>
                <div>
                    <form action="" className="flex justify-between space-x-4">
                        <input type="text" className="bg-white rounded-lg" />
                        <button>Search</button>
                    </form>
                </div>
                <div className="flex space-x-4 justify-end">
                    <LoginLogout/>
                </div>
            </div>
        </>
    )
}