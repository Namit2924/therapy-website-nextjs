export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold">
            Dr. Maya Reynolds, PsyD
          </h3>
          <p className="mt-4 text-green-200">
            Licensed Clinical Psychologist providing compassionate,
            evidence-based therapy in Santa Monica and throughout California.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold">Office</h4>
          <p className="mt-4 text-green-200">
            123th Street 45 W <br />
            Santa Monica, CA
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-4 text-green-200">
            email@example.com <br />
            (123) 456-7890
          </p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-green-700 pt-6 text-center text-green-300 text-sm">
        © {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.
      </div>
    </footer>
  );
}
