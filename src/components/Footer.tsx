export default function Footer() {
  return (
    <footer className="relative mt-10 bg-[#0b1220]">
      {/* fine top line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-3">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          
          {/* Left */}
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Group Eurocom SA (GESA). All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Legal Notice
            </a>
            <a href="/contact-us" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
  
}
