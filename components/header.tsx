"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/lib/site";
import { Logo } from "./logo";
export function Header() { const [open,setOpen]=useState(false); return <header className="border-b border-[#d8cab3] bg-[#faf6ed]"><div className="container-site flex min-h-[76px] items-center justify-between gap-4"><Logo/><nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">{navigation.slice(1,6).map(([label,href])=><Link className="nav-link" href={href} key={href}>{label}</Link>)}<Link href="/visit-us" className="button-primary">Visit Us</Link></nav><button className="p-2 lg:hidden" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>{open?<X/>:<Menu/>}</button></div>{open&&<nav id="mobile-menu" className="border-t border-[#d8cab3] bg-[#faf6ed] px-[7%] py-4 lg:hidden" aria-label="Mobile navigation">{navigation.map(([label,href])=><Link onClick={()=>setOpen(false)} className="block border-b border-[#e5dac8] py-3 text-sm" href={href} key={href}>{label}</Link>)}<Link onClick={()=>setOpen(false)} className="mt-4 button-primary" href="/prayer-request">Prayer Request</Link></nav>}</header> }
