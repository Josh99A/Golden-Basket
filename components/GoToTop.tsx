'use client'
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";


const GoToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setVisible(true);
            else setVisible(false);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        visible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-[#183d1c] text-white p-3 rounded-full shadow-lg hover:bg-[#145017] transition"
            >
                <ArrowUp size={20} />
            </button>
        )
    );
};

export default GoToTopButton;