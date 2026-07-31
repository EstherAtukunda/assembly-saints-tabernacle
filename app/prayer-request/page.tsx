import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
export const metadata={title:"Prayer Request"};
export default function Prayer(){return <><PageHero eyebrow="We are here to pray" title="Prayer Request"><p>You may share a request with the church prayer team, or submit anonymously.</p></PageHero><section className="container-site grid gap-12 py-20 md:grid-cols-[.65fr_1.35fr]"><div><p className="eyebrow"><span className="rule"/>Prayer</p><p className="mt-5 leading-8 text-[#5f5753]">We welcome you to share your prayer request. Your submission will be treated with care.</p></div><ContactForm prayer/></section></>}
