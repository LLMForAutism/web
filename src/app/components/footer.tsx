import { Mail, Github, Linkedin } from "lucide-react";

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
              <a href="https://github.com/LLMForAutism" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors" target="_blank">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors" target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary-dark transition-colors">Tentang kami</a></li>
              <li><a href="#" className="hover:text-primary-dark transition-colors">Program kami</a></li>
              <li><a href="#" className="hover:text-primary-dark transition-colors">Relawan</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-muted-foreground">
              <a href="mailto:hello@autismtech.org" className="flex items-center gap-2 hover:text-primary-dark transition-colors">
                <Mail className="w-4 h-4" />
                hello@llmforautism.com
              </a>
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
