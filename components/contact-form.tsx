"use client";
import { FormEvent, useState } from "react";
const contactThanks = "Thank you for contacting Assembly of the Saints Tabernacle, we'll get in touch with you soon.";

export function ContactForm({ prayer=false }: { prayer?:boolean }) {
  const [sent,setSent]=useState(false);
  const [error,setError]=useState("");
  const [submitting,setSubmitting]=useState(false);

  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const form=e.currentTarget;
    if(prayer){setSent(true);return}
    setSubmitting(true);setError("");
    const data=Object.fromEntries(new FormData(form));
    try {
      const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
      if(!response.ok) throw new Error("Unable to send message");
      setSent(true);form.reset();
    } catch { setError("Your message could not be sent just now. Please call or email the church directly."); }
    finally { setSubmitting(false); }
  }

  if(sent) return <p className="border-l-4 border-[#a77935] bg-[#f4ecdc] p-5 leading-7">{prayer ? "Thank you. Your prayer request has been received." : contactThanks}</p>;
  return <form onSubmit={submit} className="grid gap-5" aria-label={prayer ? "Prayer request form" : "Contact form"}>
    <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm">Name {prayer&&<span className="text-[#6b6260]">(optional)</span>}<input className="form-input mt-2" name="name" autoComplete="name" required={!prayer}/></label><label className="text-sm">Email {prayer&&<span className="text-[#6b6260]">(optional)</span>}<input className="form-input mt-2" type="email" name="email" autoComplete="email" required={!prayer}/></label></div>
    {!prayer&&<label className="text-sm">Phone <input className="form-input mt-2" type="tel" name="phone" autoComplete="tel" /></label>}
    <label className="text-sm">{prayer ? "Prayer request" : "Message"}<textarea className="form-input mt-2 min-h-36 resize-y" name="message" required /></label>
    {prayer&&<p className="text-sm leading-6 text-[#6b6260]">You may submit this request anonymously. Please do not include information you would not want shared with the prayer team.</p>}
    {error&&<p className="text-sm text-[#8f1e2d]" role="alert">{error}</p>}
    <button className="button-primary w-fit disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={submitting}>{submitting ? "Sending…" : prayer ? "Send Prayer Request" : "Send Message"}</button>
  </form>
}
