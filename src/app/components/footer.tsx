import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">LLMForAutism</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Sebuah organisasi relawan yang berdedikasi untuk memanfaatkan teknologi dan kecerdasan buatan (AI) dalam menciptakan solusi inovatif dan mudah diakses bagi komunitas autisme.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/LLMForAutism" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors" target="_blank">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors" target="_blank">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary-dark transition-colors">Tentang kami</Link></li>
              <li><Link href="#" className="hover:text-primary-dark transition-colors">Program kami</Link></li>
              <li><Link href="#" className="hover:text-primary-dark transition-colors">Relawan</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-muted-foreground">
              <Link href="mailto:hello@autismtech.org" className="flex items-center gap-2 hover:text-primary-dark transition-colors">
                <Mail className="w-4 h-4" />
                hello@llmforautism.com
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LLMForAutism. Proyek penuh kasih dari para relawan.</p>
        </div>
      </div>
    </footer>
  );
}
