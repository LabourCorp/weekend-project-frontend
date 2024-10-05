// 'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook, Instagram, X, Linkedin } from "lucide-react"; // Lucide icons for social media

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4">
                {/* About Us */}
                <div>
                    <h2 className="text-lg font-semibold">About Us</h2>
                    <p className="mt-4 text-sm">
                        LabourCorp connects skilled labor workers with customers looking for services. We aim to make the process seamless and efficient.
                    </p>
                </div>

                {/* Contact Information */}
                <div>
                    <h2 className="text-lg font-semibold">Contact</h2>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li>Email: <a href="mailto:support@labourcorp.com" className="underline">support@labourcorp.com</a></li>
                        <li>Phone: +1 234 567 890</li>
                        <li>Address: 123 Labour Street, Industry City</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold">Quick Links</h2>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><Link href="/about" className="hover:underline">About Us</Link></li>
                        <li><Link href="/services" className="hover:underline">Our Services</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                        <li><Link href="/faq" className="hover:underline">FAQs</Link></li>
                    </ul>
                </div>

                {/* Social Media & Call to Action */}
                <div>
                    <h2 className="text-lg font-semibold">Stay Connected</h2>
                    <div className="flex mt-4 space-x-4">
                        <Link href="https://facebook.com" target="_blank">
                            <Facebook className="w-5 h-5 hover:text-blue-500" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <X className="w-5 h-5 hover:text-blue-400" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank">
                            <Instagram className="w-5 h-5 hover:text-pink-500" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank">
                            <Linkedin className="w-5 h-5 hover:text-blue-700" />
                        </Link>
                    </div>
                    <Button variant="outline" className="mt-4 text-gray-900 hover:text-black">
                        <Link href="/signup-worker">
                            Join as a Worker
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} LabourCorp. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
