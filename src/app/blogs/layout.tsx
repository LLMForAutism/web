import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function BlogsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-whitesmoke min-h-screen">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
