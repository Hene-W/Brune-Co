export default function Footer() {
  return (
    <footer className="bg-dark text-cream px-6 py-12 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        <div className="flex flex-wrap justify-between gap-8">
          <div>
            <p className="font-heading text-lg mb-2">Brune & Co.</p>
            <p className="text-sm text-brown max-w-56 leading-relaxed">
              Coffee & quiet corners, since 2019.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Visit</p>
            <p className="text-sm text-brown">12 Rue ..., Pays</p>
            <p className="text-sm text-brown">Mon–Sat · 08:00–20:00</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gold mb-2">Follow</p>
            <a href="#" className="block text-sm text-brown hover:text-cream transition-colors">
              Instagram
            </a>
            <a href="#" className="block text-sm text-brown hover:text-cream transition-colors">
              Facebook
            </a>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-4 flex justify-between text-xs text-muted">
          <span>© {new Date().getFullYear()} Brune & Co.</span>
          <span>Made by Hènè</span>
        </div>

      </div>
    </footer>
  );
}