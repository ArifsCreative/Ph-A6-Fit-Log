import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-gray-800 bg-[#111318] text-white px-8 py-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3">
                    <Image src={Logo} alt="FitLog logo" width={32} height={32} />

                    <span className="font-bold text-xl">
                        FITLOG
                    </span>
                    </Link>
                </div>
                <p className="text-sm text-gray-400 text-center">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
}