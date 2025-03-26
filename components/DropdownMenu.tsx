import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function DropdownMenu({ closeHeader }: { closeHeader: () => void }) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    interface MenuItem {
        name: string;
        prefix: string;
        links: string[];
    }

    const toggleDropdown = (name: string, event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Prevent navigation when clicking the chevron
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const menuItems = [
        { name: "Speakers", prefix: "/speakers", links: ["#Keynote-Address", "#Plenary-Speech", "#Invited-Talk", "#Distinguished-Lecture"] },
        { name: "Committee", prefix: "/committee", links: ["/Advisory-Committee", "/Technical-Program-Committee", "/Core-Committee"] },
        { name: "Sponsors", prefix: "/sponsors", links: ["#Platinum", "#Gold", "#Silver", "#Bronze"] },
    ];

    return (
        <div>
            {menuItems.map((item) => (
                <div key={item.name} className="border-b">
                    <div className="flex justify-between items-center w-full text-base font-medium py-2">
                        {/* Clicking this navigates to the route and closes the header */}
                        <Link
                            href={item.prefix.toLowerCase()}
                            className="text-sm font-medium"
                            onClick={closeHeader} // Close header when clicking the main link
                        >
                            {item.name}
                        </Link>

                        {/* Clicking this toggles dropdown */}
                        <button onClick={(e) => toggleDropdown(item.name, e)}>
                            <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                        </button>
                    </div>

                    {/* Dropdown content */}
                    {openDropdown === item.name && (
                        <div className="pl-4 space-y-2">
                            {item.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={`${item.prefix.toLowerCase().replace(" ", "-")}${link.toLowerCase()}`}
                                    className="block text-sm hover:bg-background/30 hover:text-primary"
                                    onClick={closeHeader} // Close header when clicking a dropdown link
                                >
                                    {link.replace("#", "").replace("-", " ").replace("/", "")}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
