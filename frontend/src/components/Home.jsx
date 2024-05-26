export default function Home() {
    return (
        <>
            <div className="bg-zinc-900">
                {/* Navbar */}
                <nav className="flex justify-between items-center py-4 px-10 shadow-2xl ">
                    <div className="text-3xl font-bold text-purple-600">SIP Portal</div>
                    <div className="flex px-3 space-x-4 md:space-x-8 lg:space-x-10 xl:space-x-12  ">
                        <a href="/" className=" hover:text-yellow-500 text-lg">Home </a>
                        <a href="#" className=" hover:text-yellow-500 text-lg">About us </a>
                        <a href="#" className=" hover:text-yellow-500 text-lg">Info </a>
                    </div>
                    <a href="/login" className="bg-yellow-500 text-black py-2 px-6 rounded-2xl hover:bg-yellow-600">Login</a>
                </nav>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-7xl px-6 py-12 my-20">
                    {/* Text Section */}
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-bold text-purple-700">Internship</h1>
                        <p className="mt-4 text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero feugiat,
                            faucibus libero id, scelerisque quam.
                        </p>

                    </div>

                    {/* Image Section */}
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg" alt="Internship" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}