import { useState } from 'react';

const menuItems = [ // array of objects defining each menu link
    {label: 'Home', href: '#home'},
    {label: 'Experience', href: '#experience'}, // each href is a link that scrolls to that section
    {label: 'Projects', href: '#projects'},
    {label: 'Skills/Certifications', href: '#skills'},
    {label: 'About', href: '#about'}
];

// nav element marks up block of nav links
// looping through each menuItem and generating a nav link
export default function MenuBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 w-full bg-[#d9d9d9] z-[1000] px-6 py-3">

            {/* Desktop menubar */}
            <nav className="hidden md:flex flex-row gap-4">
                {menuItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="flex-1 text-center px-5 py-2 bg-[#555555] text-white no-underline rounded-full text-sm hover:bg-[#333333] font-['Jua']"
                >
                    {item.label}
                </a>

                ))}
            </nav>

            {/* Mobile menubar */}
            <div className="md:hidden flex justify-between items-center">
                <span className="font-['Jua'] text-sm">Menu</span>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[#555555] text-2xl font-bold"
                >
                    {isOpen ? 'X' : '☰'}
                </button>
            </div>

            {/* Mobile dropdown */}
            {isOpen && (
                <nav className="md:hidden flex flex-col gap-2 mt-2">
                {menuItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex-1 text-center px-5 py-2 bg-[#555555] text-white no-underline rounded-full text-sm hover:bg-[#333333] font-['Jua']"
                    >
                        {item.label}
                    </a>
                ))}
                </nav>
            )}
        </header>
    );
}