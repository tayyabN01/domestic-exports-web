import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LeatherAnalysisCharts from '@/components/LeatherAnalysisCharts';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

const BlogPost = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog */}
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </Button>

        {/* Article Meta */}
        <div className="mb-8">
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Your Leather Guide – From Hide to Heritage
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Understand the craft behind premium leather goods by Domestic Exports
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>January 8, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Domestic Exports</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>12 min read</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="font-playfair text-2xl font-bold text-charcoal mt-12 mb-6">
            1. What Is Leather, Really?
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            Leather is the natural hide (skin) of animals — typically cow, sheep, goat, or buffalo — that is treated, tanned, and finished to become soft, durable, and stylish material for fashion, lifestyle, and utility products.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-charcoal mt-12 mb-6">
            2. Types of Leather (Based on Cut & Grade)
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            Think of a hide like a cake: the top layer is the most premium — the deeper you go, the more processed it becomes.
          </p>

          <h3 className="font-playfair text-xl font-semibold text-charcoal mt-8 mb-4">
            Full-Grain Leather
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Top surface, untouched — keeps natural marks & grain</li>
            <li>Ages beautifully with a patina</li>
            <li>Used in high-end bags, jackets, belts</li>
          </ul>

          <h3 className="font-playfair text-xl font-semibold text-charcoal mt-8 mb-4">
            Top-Grain Leather
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Slightly sanded and corrected</li>
            <li>More uniform, still high-quality</li>
            <li>Common in wallets and upscale apparel</li>
          </ul>

          <h3 className="font-playfair text-xl font-semibold text-charcoal mt-8 mb-4">
            Genuine Leather
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Processed from the lower hide layers</li>
            <li>Affordable, used for entry-level products</li>
            <li>Still real leather, but lacks natural grain</li>
          </ul>

          <h3 className="font-playfair text-xl font-semibold text-charcoal mt-8 mb-4">
            Split Leather / Suede
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Inner layer of the hide</li>
            <li>Soft, fuzzy texture (like suede)</li>
            <li>Great for linings, budget-friendly gloves</li>
          </ul>

          {/* Leather Types Comparison Chart */}
          {/* <div className="my-12">
            <LeatherAnalysisCharts />
          </div> */}

          <h2 className="font-playfair text-2xl font-bold text-charcoal mt-12 mb-6">
            3. Leather Sources (By Animal Type)
          </h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-3 text-left font-semibold">Source</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold">Features</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold">Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Cowhide</td>
                  <td className="border border-border px-4 py-3">Strong, thick, versatile</td>
                  <td className="border border-border px-4 py-3">Bags, jackets, belts, shoes</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3 font-medium">Sheepskin</td>
                  <td className="border border-border px-4 py-3">Soft, light, and smooth</td>
                  <td className="border border-border px-4 py-3">Gloves, jackets, wallets</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Goatskin</td>
                  <td className="border border-border px-4 py-3">Pebbled texture, flexible</td>
                  <td className="border border-border px-4 py-3">Wallets, small goods, gloves</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3 font-medium">Buffalo</td>
                  <td className="border border-border px-4 py-3">Coarse grain, super tough</td>
                  <td className="border border-border px-4 py-3">Duffels, boots, heavy-duty belts</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-muted-foreground italic mb-8">
            <strong>Note:</strong> We never use exotic or religiously sensitive materials like pigskin.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-charcoal mt-12 mb-6">
            4. Tanning – Making Raw Hide Into Leather
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            Tanning is how we preserve the hide, turning it from raw skin into long-lasting material.
          </p>

          <h3 className="font-playfair text-xl font-semibold text-charcoal mt-8 mb-4">
            Vegetable Tanning
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Uses tree bark and natural tannins</li>
            <li>Eco-friendly, develops rich patina</li>
            <li>Takes longer, firmer feel</li>
            <li>Great for belts, luxury goods</li>
          </ul>

          <h3 className="font-playfair text-xl font-semibold text-charcoal mt-8 mb-4">
            Chrome Tanning
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Fast, industrial process using chromium salts</li>
            <li>Softer, more flexible</li>
            <li>Bright colors, smooth finish</li>
            <li>Ideal for fashion products</li>
          </ul>

          {/* Tanning Methods Comparison Chart */}
          <div className="my-12">
            <LeatherAnalysisCharts />
          </div>

          <h2 className="font-playfair text-2xl font-bold text-charcoal mt-12 mb-6">
            5. Machinery & Tools in Leather Production
          </h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-3 text-left font-semibold">Machine</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold">What It Does</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Fleshing Machine</td>
                  <td className="border border-border px-4 py-3">Removes meat/fat from raw hide</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3 font-medium">Splitting Machine</td>
                  <td className="border border-border px-4 py-3">Cuts hide into layers (top/split)</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Shaving Machine</td>
                  <td className="border border-border px-4 py-3">Levels thickness of tanned leather</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3 font-medium">Drum Tanners</td>
                  <td className="border border-border px-4 py-3">Soak and tan hides evenly</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Drying Ovens / Toggle Dryers</td>
                  <td className="border border-border px-4 py-3">Cures and flattens leather</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3 font-medium">Buffing Machine</td>
                  <td className="border border-border px-4 py-3">Sands surface for smoothness or suede effect</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Finishing Spray Booths</td>
                  <td className="border border-border px-4 py-3">Adds color, sealants, or special finishes</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3 font-medium">Embossing Rollers</td>
                  <td className="border border-border px-4 py-3">Press patterns like pebbled or crocodile</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-foreground leading-relaxed mb-8">
            <strong>✂️ Manual tools:</strong> Skiving knives, edge cutters, burnishing tools, stamping dies
          </p>

          <h2 className="font-playfair text-2xl font-bold text-charcoal mt-12 mb-6">
            6. Leather Finishes & Effects
          </h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-3 text-left font-semibold">Finish Type</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold">Description</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold">Common Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Aniline</td>
                  <td className="border border-border px-4 py-3">Transparent dye, natural grain shows</td>
                  <td className="border border-border px-4 py-3">Luxury bags, furniture</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3 font-medium">Semi-Aniline</td>
                  <td className="border border-border px-4 py-3">Light protective layer, semi-natural look</td>
                  <td className="border border-border px-4 py-3">High-end jackets, sofas</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Pigmented</td>
                  <td className="border border-border px-4 py-3">Fully coated, durable and uniform</td>
                  <td className="border border-border px-4 py-3">Shoes, belts, auto leather</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3 font-medium">Embossed</td>
                  <td className="border border-border px-4 py-3">Pressed patterns (e.g., croc, pebbled)</td>
                  <td className="border border-border px-4 py-3">Fashion bags, accessories</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Pull-Up</td>
                  <td className="border border-border px-4 py-3">Waxy finish that ages beautifully</td>
                  <td className="border border-border px-4 py-3">Vintage-style goods</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3 font-medium">Nubuck / Suede</td>
                  <td className="border border-border px-4 py-3">Velvet-like finish from sanding</td>
                  <td className="border border-border px-4 py-3">Gloves, fashion pieces</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Patent</td>
                  <td className="border border-border px-4 py-3">Glossy, lacquered finish</td>
                  <td className="border border-border px-4 py-3">Shoes, dress accessories</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-playfair text-2xl font-bold text-charcoal mt-12 mb-6">
            7. The Leather-Making Process (Step by Step)
          </h2>

          <h3 className="font-playfair text-xl font-semibold text-charcoal mt-8 mb-4">
            Stage 1: Raw Hide to Tanned Leather
          </h3>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li><strong>Sourcing:</strong> Ethical collection from abattoirs or farms</li>
            <li><strong>Curing:</strong> Salt or air-dry to preserve hide</li>
            <li><strong>Soaking:</strong> Rehydrates and cleans</li>
            <li><strong>Liming:</strong> Removes hair and protein</li>
            <li><strong>Fleshing:</strong> Trims off excess fat/flesh</li>
            <li><strong>Splitting:</strong> Separates top grain from lower layers</li>
            <li><strong>Tanning:</strong> Either vegetable or chrome</li>
            <li><strong>Neutralizing & Dyeing:</strong> Adjust pH and add color</li>
            <li><strong>Fatliquoring:</strong> Adds oils to soften leather</li>
            <li><strong>Drying:</strong> Using vacuum, toggles, or hanging frames</li>
          </ol>

          <h3 className="font-playfair text-xl font-semibold text-charcoal mt-8 mb-4">
            Stage 2: Finishing & Customization
          </h3>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Buffing or Sanding</strong> (for suede or nubuck)</li>
            <li><strong>Staking & Softening:</strong> Makes leather pliable</li>
            <li><strong>Embossing:</strong> Texture patterns or branding</li>
            <li><strong>Spraying / Roller Coating:</strong> Apply pigments or sealants</li>
            <li><strong>Ironing / Polishing:</strong> Final appearance refinement</li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-charcoal mt-12 mb-6">
            8. How We Turn Leather Into Products
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            Once the leather is tanned and finished, it moves to cutting, stitching, and assembly:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Pattern Design:</strong> Custom shape templates for wallets, jackets, bags</li>
            <li><strong>Cutting:</strong> Precision cutting by die or laser</li>
            <li><strong>Skiving:</strong> Thinning edges for smooth joints</li>
            <li><strong>Sewing:</strong> Manual or industrial machines (single/double stitch)</li>
            <li><strong>Edge Finishing:</strong> Burnishing, painting, sealing edges</li>
            <li><strong>Branding:</strong> Embossing or foil stamping your logo</li>
            <li><strong>Lining:</strong> Fabrics, suede, or leather-backed options</li>
            <li><strong>Hardware:</strong> Zippers, buckles, snaps — matched to product aesthetics</li>
            <li><strong>QC & Packing:</strong> Each piece inspected, cleaned, and packaged</li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-charcoal mt-12 mb-6">
            9. MOQ, Lead Times & Customization
          </h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="border border-border px-4 py-3 text-left font-semibold">Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Minimum Order (MOQ)</td>
                  <td className="border border-border px-4 py-3">Starts at 10–25 units per design</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3 font-medium">Branding</td>
                  <td className="border border-border px-4 py-3">Embossed logo, printed lining, tags</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Materials</td>
                  <td className="border border-border px-4 py-3">Choose leather, hardware, thread</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border border-border px-4 py-3 font-medium">Colors</td>
                  <td className="border border-border px-4 py-3">Natural tones, bolds, seasonal palettes</td>
                </tr>
                <tr>
                  <td className="border border-border px-4 py-3 font-medium">Lead Time</td>
                  <td className="border border-border px-4 py-3">2–6 weeks depending on complexity</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-playfair text-2xl font-bold text-charcoal mt-12 mb-6">
            10. Sustainability & Ethics at Domestic Exports
          </h2>
          <ul className="list-none space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✔️</span>
              <span>We use LWG-certified tanneries</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✔️</span>
              <span>No pigskin, exotic, or unethical sourcing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✔️</span>
              <span>Skilled artisans with decades of experience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✔️</span>
              <span>Low-waste, low-volume, custom-first production</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✔️</span>
              <span>Vegetable-tanned options for eco-minded clients</span>
            </li>
          </ul>

          <h2 className="font-playfair text-2xl font-bold text-charcoal mt-12 mb-6">
            Final Word: Leather Is a Legacy
          </h2>
          <p className="text-foreground leading-relaxed text-lg">
            When you choose leather — you're choosing craft, material honesty, and timeless style. At Domestic Exports, we ensure every hide is handled with purpose and passion.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-muted rounded-lg text-center">
          <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">
            Ready to Create Your Custom Leather Goods?
          </h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss your project and bring your vision to life with our expert craftsmanship.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">
              Start Your Project
            </Link>
          </Button>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogPost;