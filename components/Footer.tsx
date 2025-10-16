import Link from "next/link";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige border-t border-muted">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-text mb-4">
              The Gromley Group
            </h3>
            <p className="text-text/70 text-sm">
              Boutique music bookings and event coordination.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-4 uppercase tracking-wide">
              Service Area
            </h4>
            <p className="text-text/70 text-sm">
              Phoenix • Scottsdale • Nationwide on request
            </p>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-text mb-4 uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:info@thegromleygroup.com"
                className="flex items-center gap-2 text-text/70 hover:text-accent transition-colors duration-fast text-sm"
              >
                <Mail className="h-4 w-4" />
                info@thegromleygroup.com
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/70 hover:text-accent transition-colors duration-fast"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/70 hover:text-accent transition-colors duration-fast"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text/60 text-sm">
            © {currentYear} The Gromley Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/about"
              className="text-text/60 hover:text-accent transition-colors duration-fast"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-text/60 hover:text-accent transition-colors duration-fast"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

