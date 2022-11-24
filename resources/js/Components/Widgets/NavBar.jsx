
export default function NavBar({ children }) {
    return (<>
        <nav className=" inline-flex sticky top-0 w-full z-10 bg-gray-200 justify-end shadow-gray-300 shadow-lg">
        <p className=" fixed font-bold text-4xl p-3 left-5">ZoBlog.</p>
            <div className="flex items-center">
                {children}
            </div>
        </nav>
        </>
    );
}
