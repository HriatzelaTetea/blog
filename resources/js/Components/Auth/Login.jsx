import { createPortal } from "react-dom";
import {AiOutlineClose } from "react-icons/ai";


export default function Login(props) {
    const mutate = props.setAuth;

    return createPortal(
        <div className="fixed inset-0 z-50">
            <div className="inline-block relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-150 ease-out hover:ease-in">
                <button onClick={() => mutate("none")} className="absolute top-10 right-10 text-gray-700 hover:font-bold hover:text-black">
                    <AiOutlineClose size={20} />
                </button>
                <form autoComplete="off" className="inline-block p-10 m-4 font-comf bg-gray-100 rounded-2xl shadow-i">
                        <div className="text-center">
                            <span className="text-slate-800 text-3xl font-extrabold">
                                Login
                            </span>
                        </div>
                        <ul>
                        <li className="mt-4">
                            <input placeholder="Email" type="login_email" name="user_email" id="email"
                            className="w-80 p-2 bg-gray-300 rounded-xl focus:outline-none focus:bg-white"/>
                        </li>
                        <li className="mt-4">
                            <input placeholder="Password" type="password" name="user_password" id="login_password"
                                className="w-80 p-2 bg-gray-300 rounded-xl focus:outline-none focus:bg-white"/>
                        </li>
                        <li className="mt-4 ">
                            <button type="submit"className="px-4 py-2 text-xl text-white font-semibold bg-green-500 hover:bg-green-700 w-full rounded-xl">
                                Login
                            </button>
                        </li>
                        <li className="mt-4">
                        <div className="text-xs text-gray-500 cursor-help grid grid-cols-2">Have no Account Yet?
                            <button onClick={() => mutate("SignUp")}>
                               <p className="text-xl hover:text-black transition delay-150 duration-300 ease-in-out rounded-xl hover:bg-blue-500 hover:rounded-xl">Sign Up</p>
                            </button>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
        </div>,
        document.getElementById("login")
    );
}
