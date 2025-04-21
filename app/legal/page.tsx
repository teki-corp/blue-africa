"use client";

import Link from "next/link";

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Legal Information</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Image Credits</h2>
        <p className="text-muted-foreground mb-4">
          All images are licensed under the Pexels License and are free to use. We appreciate the work of these talented photographers:
        </p>
        <ul className="space-y-3">
          <li>
            <Link 
              href="https://www.pexels.com/@kelly-1179532" 
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kelly
            </Link>
            {" - Environmental sustainability image"}
          </li>
          <li>
            <Link 
              href="https://www.pexels.com/@tomfisk" 
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tom Fisk
            </Link>
            {" - Environmental project image"}
          </li>
          <li>
            <Link 
              href="https://www.pexels.com/@cottonbro" 
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cottonbro
            </Link>
            {" - Sustainable development image"}
          </li>
          <li>
            <Link 
              href="https://www.pexels.com/@kirill-bai-34484890" 
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kirill Bai
            </Link>
            {" - Environmental conservation image"}
          </li>
          <li>
            <Link 
              href="https://www.pexels.com/@daydream-753072845" 
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daydream
            </Link>
            {" - Sustainable future image"}
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Copyright Notice</h2>
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Blue Capital. All rights reserved. The content of this website is protected by copyright and other intellectual property rights.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
        <p className="text-muted-foreground mb-4">
          The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
        </p>
      </section>

      <div className="mt-8">
        <Link 
          href="/"
          className="text-primary hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
} 