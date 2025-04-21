import Link from "next/link";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <motion.footer 
      ref={containerRef}
      style={{ opacity, y }}
      className="w-full bg-gradient-to-b from-background to-muted/50 border-t border-border/50"
    >
      <div className="container py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Blue Capital</h3>
            <p className="text-muted-foreground">
              Empowering sustainable development through innovative financing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <a 
                  href="mailto:info@bluecapital.com" 
                  className="hover:text-foreground transition-colors"
                  rel="noopener noreferrer"
                >
                  info@bluecapital.com
                </a>
              </li>
              <li className="text-muted-foreground">
                <a 
                  href="tel:+1234567890" 
                  className="hover:text-foreground transition-colors"
                  rel="noopener noreferrer"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-muted-foreground">
                123 Green Street,<br />
                Sustainable City, SC 12345
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} Blue Capital. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
} 