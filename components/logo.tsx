import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
export function Logo({ light = false }: { light?: boolean }) { return <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} home`}><span className={`relative h-11 w-11 shrink-0 overflow-hidden border ${light ? "border-[#cba969]" : "border-[#8d652b]"}`} aria-hidden="true"><Image src="/church-logo.png" alt="" fill sizes="44px" className="object-cover object-[center_33%]" priority /></span><span className={`serif text-[.88rem] leading-tight tracking-[.05em] uppercase ${light ? "text-white" : "text-[#351016]"}`}>Assembly of the Saints<span className={`block text-[.62rem] tracking-[.22em] ${light ? "text-[#ddc188]" : "text-[#8d652b]"}`}>Tabernacle</span></span></Link> }
