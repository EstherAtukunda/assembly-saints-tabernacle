import type { MetadataRoute } from "next";
import { navigation, site } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{return navigation.map(([,path])=>({url:`${site.url}${path}`,lastModified:new Date(),changeFrequency:"monthly",priority:path==="/"?1:.7}))}
