import { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";

export default function Usericon(props) {
    const [state, setState] = useState(false);

    const mutate = props.setAuth;

    function handleState() {
        mutate("login");
    }

    return (
        <div onClick={handleState} className="inline-block m-4">
            {state ? (
                <button className="block p-2 text-white bg-blue-500">
                    <HiOutlineUserCircle size={24} />
                </button>
            ) : (
                <button className="block p-2 rounded-3xl text-white bg-blue-400 hover:bg-blue-600">
                    <HiOutlineUserCircle size={24} />
                </button>
            )}
        </div>
        
    );
}
