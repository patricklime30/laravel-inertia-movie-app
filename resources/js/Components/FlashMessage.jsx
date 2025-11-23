import { useEffect, useState } from "react";

export default function FlashMessage({ message, type = "success" }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    const colors = {
        success: "bg-green-100 border border-green-300 text-green-700",
        error: "bg-red-100 border border-red-400 text-red-700",
    };

    return (
        <div
            className={`fixed top-4 right-4 px-4 py-3 rounded shadow-lg ${colors[type]}`}
        >
            {message}
        </div>
    );
}