import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function Home() {
  return <>
    <section className="bg-[#351016] text-white">
      <div className="container-site grid min-h-[610px] content-center py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-18">
        <div>
          <p className="eyebrow"><span className="rule"/>Kampala, Uganda</p>
          <h1 className="serif mt-5 max-w-3xl text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">Assembly of the Saints Tabernacle</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#e5dbce]">{site.statement}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="button-primary bg-[#a77935] hover:bg-[#c09049]" href="/visit-us">Visit Us</Link>
            <Link className="button-secondary" href="/what-we-believe">What We Believe</Link>
            <Link className="button-secondary" href="/prayer-request">Prayer Request</Link>
          </div>
        </div>
        <blockquote className="mt-14 border-l border-[#a77935] pl-7 lg:mt-0">
          <p className="serif text-2xl leading-relaxed text-[#f2eadf]">“God is greatly to be feared in the assembly of the saints, and to be had in reverence of all them that are about him.”</p>
          <cite className="mt-4 block not-italic text-sm tracking-[.16em] text-[#d7b77c] uppercase">Psalm 89:7 (KJV)</cite>
        </blockquote>
      </div>
    </section>

    <section className="border-b border-[#d8cab3] bg-[#f4ecdc]">
      <div className="container-site grid gap-6 py-10 md:grid-cols-[.8fr_1fr_1fr] md:items-center">
        <p className="eyebrow"><span className="rule"/>Service times</p>
        <div className="border-l border-[#c7b89f] pl-5">
          <p className="text-xs font-bold tracking-[.12em] text-[#796451] uppercase">Sunday main service</p>
          <p className="serif mt-1 text-2xl text-[#351016]">9:00 AM – 1:00 PM</p>
        </div>
        <div className="border-l border-[#c7b89f] pl-5">
          <p className="text-xs font-bold tracking-[.12em] text-[#796451] uppercase">Wednesday service</p>
          <p className="serif mt-1 text-2xl text-[#351016]">6:00 PM – 7:00 PM</p>
        </div>
      </div>
    </section>

    <section className="container-site grid gap-10 py-20 md:grid-cols-[.8fr_1.2fr] md:items-start">
      <p className="eyebrow"><span className="rule"/>Our foundation</p>
      <div>
        <h2 className="serif text-4xl leading-tight text-[#351016]">A reverent assembly, grounded in the Word of God.</h2>
        <p className="mt-5 max-w-2xl leading-8 text-[#5f5753]">We believe the Holy Bible is the true Word of God and the foundation of our faith. Our desire is to remain faithful to God&apos;s Word while preparing the Bride for the coming of Jesus Christ.</p>
        <Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold tracking-[.08em] text-[#591f2a] uppercase hover:text-[#a77935]" href="/about">Learn about the church <ArrowRight size={16}/></Link>
      </div>
    </section>

    <section className="bg-[#f4ecdc]"><div className="container-site grid gap-px py-16 md:grid-cols-3">
      <Link className="group bg-[#faf6ed] p-8 transition hover:bg-white" href="/our-pastor"><p className="eyebrow">Leadership</p><h2 className="serif mt-3 text-2xl text-[#351016]">Our Pastor</h2><p className="mt-3 text-sm leading-7 text-[#655c58]">Pastor Byanyima Stephen</p><span className="mt-7 inline-block text-sm text-[#591f2a] group-hover:text-[#a77935]">Read more →</span></Link>
      <Link className="group bg-[#faf6ed] p-8 transition hover:bg-white" href="/ministries"><p className="eyebrow">Life together</p><h2 className="serif mt-3 text-2xl text-[#351016]">Ministries</h2><p className="mt-3 text-sm leading-7 text-[#655c58]">Serving the church through worship, prayer, evangelism, teaching, and youth ministry.</p><span className="mt-7 inline-block text-sm text-[#591f2a] group-hover:text-[#a77935]">Explore ministries →</span></Link>
      <Link className="group bg-[#faf6ed] p-8 transition hover:bg-white" href="/contact"><p className="eyebrow">Get in touch</p><h2 className="serif mt-3 text-2xl text-[#351016]">Contact Us</h2><p className="mt-3 text-sm leading-7 text-[#655c58]">We welcome your questions and prayer requests.</p><span className="mt-7 inline-block text-sm text-[#591f2a] group-hover:text-[#a77935]">Contact the church →</span></Link>
    </div></section>
  </>;
}
