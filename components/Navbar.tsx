export default function Navbar() {
    return (
        <nav>
            <div className="flex justify-between max-w-6xl mx-auto pt-5">
                <div className="flex ">
                    <h2 className="hover:cursor-pointer 00000000text-xl rounded-xl py-3"> story </h2>
                </div>
                <a href={"/"}><h1 className="text-4xl  hover:cursor-pointer">ficfork</h1></a>
                <div className="flex ">
                    <h2 className="hover:cursor-pointer hover:bg-red-500 text-xl bg-black text-white rounded-xl p-3 px-5"> sign in </h2>
                </div>
            </div>
        </nav>
    )
}

