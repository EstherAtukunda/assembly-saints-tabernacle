import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
export const metadata:Metadata={metadataBase:new URL(site.url), title:{default:site.name,template:`%s | ${site.name}`},description:site.statement,keywords:["Assembly of the Saints Tabernacle","church Kampala","End-Time Message","Bride of Jesus Christ"],openGraph:{type:"website",locale:"en_UG",siteName:site.name,title:site.name,description:site.statement},twitter:{card:"summary",title:site.name,description:site.statement},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){const structuredData={"@context":"https://schema.org","@type":"Church",name:site.name,description:site.statement,address:{"@type":"PostalAddress",addressLocality:"Kampala",addressCountry:"UG"},telephone:site.phone,email:site.email,foundingDate:"2002",url:site.url};return <html lang="en"><body><a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3" href="#main-content">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body></html>}
