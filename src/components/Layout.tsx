import React, { ReactNode, useLayoutEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [headerHeight, setHeaderHeight] = useState<number | null>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (headerRef.current) {
            const height = headerRef.current.clientHeight;
            setHeaderHeight(height);
        }
    }, []);

    useLayoutEffect(() => {
        if (headerHeight !== null) {
            document.body.style.paddingTop = `${headerHeight}px`;
        }
    }, [headerHeight]);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="fixed w-full z-10" ref={headerRef}>
                <Header />
            </div>
            <main className="flex-1 overflow-y-auto mt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
