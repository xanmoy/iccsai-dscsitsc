import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-max mb-32 text-center px-4">
            <Image
                src="/error.svg"
                alt="404"
                width={500}
                height={500}
                className="object-cover"
            
            />
            <Link href="/">
                <button className="mt-6 px-4 py-2 text-lg text-white bg-primary rounded-lg shadow-md hover:bg-primary/90 transition">
                    Return Home
                </button>
            </Link>
        </div>
    );
}
