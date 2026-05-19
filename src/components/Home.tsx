import { useState, useEffect } from 'react';

const titles = ["Innovator", "Artist", "Student", "Social Advocate"];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0); // stores index of currently displayed title
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000); // sets up repeating timer

        return () => clearInterval(interval); // resets interval
        
    }, []);

    return (
        <section id="home" className="flex items-center justify-center p-10 font-['Jua']">
            <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="flex-1 bg-[#d9d9d9] rounded-lg p-6 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-normal mb-2 text-black">
                        Advika Rapolu:
                    </h1>
                    <h2 
                        key={currentIndex}
                        className="text-3xl md:text-5xl font-normal text-[#0000ff] animate-[fadeIn_0.8s_ease-in-out]"
                    >
                        {titles[currentIndex]}
                    </h2>
                </div>
                <div className="flex-1 bg-[#d9d9d9] rounded-lg p-6 md:p-8">
                    <p className="text-sm md:text-base">
                        Hi, I am a student at UT Austin double majoring in
                        computer science and mathematics with minors in Statistics
                        and Data Science and Business. Always open to new opportunities
                        that grow my boundaries and feed my curiousity. Currently looking
                        for Summer 2027 internships!
                    </p>
                </div>
            </div>
        </section>
    );
}