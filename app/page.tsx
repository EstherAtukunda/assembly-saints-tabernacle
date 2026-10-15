import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Assembly of the Saints Tabernacle | Church in Kampala",
  description: "Assembly of the Saints Tabernacle is a Scripture-centered church in Kampala, Uganda. Join us for Sunday and Wednesday services."
};

const serviceTimes = [
  { day: "Sunday", service: "Main Service", time: "9:00 AM – 1:00 PM" },
  { day: "Wednesday", service: "Midweek Service", time: "6:00 PM – 7:00 PM" }
];

export default function Home() {
  return <>
    <section className="relative isolate overflow-hidden bg-[#351016] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[.075]" aria-hidden="true">
        <Image src="/church-logo.png" alt="" fill priority sizes="100vw" className="object-contain scale-125" />
      </div>
      <div className="container-site relative grid min-h-[670px] content-center py-20 lg:grid-cols-[1.18fr_.82fr] lg:items-center lg:gap-18">
        <div>
          <p className="eyebrow"><span className="rule"/>Kampala, Uganda</p>
          <h1 className="serif mt-5 max-w-3xl text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">Assembly of the Saints Tabernacle</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#e5dbce]">{site.statement}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="button-primary bg-[#a77935] hover:bg-[#c09049]" href="/visit-us">Plan your visit</Link>
            <Link className="button-secondary" href="/what-we-believe">What we believe</Link>
          </div>
          <Link className="mt-7 inline-flex items-center gap-2 text-sm text-[#e5dbce] underline decoration-[#a77935] underline-offset-4 hover:text-white" href="/prayer-request">Share a prayer request <ArrowRight size={15}/></Link>
        </div>
        <blockquote className="mt-14 max-w-xl border-l border-[#a77935] pl-7 lg:mt-0">
          <p className="serif text-2xl leading-relaxed text-[#f2eadf]">“God is greatly to be feared in the assembly of the saints, and to be had in reverence of all them that are about him.”</p>
          <cite className="mt-4 block not-italic text-sm tracking-[.16em] text-[#d7b77c] uppercase">Psalm 89:7 (KJV)</cite>
        </blockquote>
      </div>
    </section>

    <section className="border-b border-[#d8cab3] bg-[#f4ecdc]" aria-labelledby="service-times-heading">
      <div className="container-site grid gap-6 py-10 md:grid-cols-[.8fr_1fr_1fr] md:items-center">
        <div><p className="eyebrow"><span className="rule"/>Worship with us</p><h2 id="service-times-heading" className="serif mt-2 text-2xl text-[#351016]">Service times</h2></div>
        {serviceTimes.map(({ day, service, time }) => <div className="border-l border-[#c7b89f] pl-5" key={day}><p className="text-xs font-bold tracking-[.12em] text-[#796451] uppercase">{day} · {service}</p><p className="serif mt-1 text-2xl text-[#351016]">{time}</p></div>)}
      </div>
    </section>

    <section className="container-site grid gap-10 py-24 md:grid-cols-[.7fr_1.3fr] md:items-start">
      <p className="eyebrow"><span className="rule"/>Our foundation</p>
      <div>
        <h2 className="serif text-4xl leading-tight text-[#351016]">A reverent assembly, grounded in the Word of God.</h2>
        <p className="mt-5 max-w-2xl leading-8 text-[#5f5753]">We believe the Holy Bible is the true Word of God and the foundation of our faith. Our desire is to remain faithful to God&apos;s Word while preparing the Bride for the coming of Jesus Christ.</p>
        <Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold tracking-[.08em] text-[#591f2a] uppercase hover:text-[#a77935]" href="/about">Learn about the church <ArrowRight size={16}/></Link>
      </div>
    </section>

    <section className="bg-[#f4ecdc]"><div className="container-site grid gap-10 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border-[10px] border-[#faf6ed] shadow-[12px_14px_0_#d8cab3]"><Image src="/pastor-byanyima-stephen.png" alt="Pastor Byanyima Stephen" fill sizes="(min-width: 1024px) 350px, 90vw" className="object-cover object-[53%_center]" /></div>
      <div className="lg:pl-10"><p className="eyebrow"><span className="rule"/>Church leadership</p><h2 className="serif mt-4 text-4xl leading-tight text-[#351016]">Pastor Byanyima Stephen</h2><p className="mt-5 max-w-xl leading-8 text-[#5f5753]">Pastor Byanyima Stephen founded Assembly of the Saints Tabernacle in 2002 with his wife and son. Before being called into pastoral ministry, he served as a deacon.</p><Link className="mt-7 inline-flex items-center gap-2 text-sm font-bold tracking-[.08em] text-[#591f2a] uppercase hover:text-[#a77935]" href="/our-pastor">Meet our pastor <ArrowRight size={16}/></Link></div>
    </div></section>

    <section className="container-site py-24" aria-labelledby="next-steps-heading"><div className="max-w-2xl"><p className="eyebrow"><span className="rule"/>Find your way</p><h2 id="next-steps-heading" className="serif mt-3 text-4xl text-[#351016]">We would be glad to welcome you.</h2></div><div className="mt-10 grid gap-px bg-[#d8cab3] md:grid-cols-3">
      <Link className="group bg-[#faf6ed] p-8 transition hover:bg-white" href="/visit-us"><MapPin className="text-[#a77935]" size={22}/><h3 className="serif mt-7 text-2xl text-[#351016]">Visit Us</h3><p className="mt-3 text-sm leading-7 text-[#655c58]">Find our location in Kampala and get directions.</p><span className="mt-7 inline-block text-sm text-[#591f2a] group-hover:text-[#a77935]">Plan a visit →</span></Link>
      <Link className="group bg-[#faf6ed] p-8 transition hover:bg-white" href="/ministries"><CalendarDays className="text-[#a77935]" size={22}/><h3 className="serif mt-7 text-2xl text-[#351016]">Ministries</h3><p className="mt-3 text-sm leading-7 text-[#655c58]">Explore the ministries serving the life of the church.</p><span className="mt-7 inline-block text-sm text-[#591f2a] group-hover:text-[#a77935]">Explore ministries →</span></Link>
      <Link className="group bg-[#faf6ed] p-8 transition hover:bg-white" href="/contact"><Mail className="text-[#a77935]" size={22}/><h3 className="serif mt-7 text-2xl text-[#351016]">Contact Us</h3><p className="mt-3 text-sm leading-7 text-[#655c58]">Send a message or speak with the church.</p><span className="mt-7 inline-block text-sm text-[#591f2a] group-hover:text-[#a77935]">Get in touch →</span></Link>
    </div></section>

    <section className="bg-[#351016] text-white"><div className="container-site flex flex-col gap-7 py-14 md:flex-row md:items-center md:justify-between"><div><p className="eyebrow"><span className="rule"/>Assembly of the Saints Tabernacle</p><p className="serif mt-3 text-2xl text-[#f2eadf]">Come and worship with us.</p></div><div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#e5dbce]"><a className="inline-flex items-center gap-2 hover:text-white" href={site.phoneHref}><Phone size={16}/>{site.phone}</a><a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${site.email}`}><Mail size={16}/>Email the church</a></div></div></section>
  </>;
}
