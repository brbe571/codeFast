import Image from "next/image";
import Link from "next/link";
import ButtonLogin from "@/components/ButtonLogin";
import ListItem from "@/components/ListItem";
import FAQListItem from "@/components/FAQListItem";
import productDemo from "./productDemo.jpeg";
import { auth } from "@/auth";
import houseLogo from "./house_logo.jpeg";


export default async function Home() {
  
  const session = await auth();

  

  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200" id="header">
          <div className="bg-base-200 flex justify-between items-center py-2 px-8 max-w-5xl mx-auto">
            <div className="flex items-centre gap-2">
              <Image src={houseLogo} alt="House logo" className="w-12"  />
              
            </div>
            <div className="space-x-4 max-md:hidden">
              <a className="link link-hover" href="#pricing">Pricing</a>
              <a className="link link-hover" href="#FAQ">FAQ</a>
            </div>
            <div>
              <ButtonLogin session={session} />
            </div>
          </div>
      </section>
      {/* HERO */}
      <section className='text-center lg:text-left py-32 px-8 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start' id="hero">

        <Image src={productDemo} alt="Product Demo" className="w-96 rounded-xl"/>
        <div>
          <h1 className='text-4xl lg:text-5xl font-extrabold mb-6'>Send, Track and Store Property Information Securely </h1>
          <div className='opacity-90 mb-10'>Reduce Admin time and track prospective buyers</div>

          <ButtonLogin session={session} />
        </div>
      </section>
      {/* PRICING */ }
      <section className="bg-base-200" id="pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">A one time payment per listing</h2>
        

          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="font-black text-4xl">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">/listing</div>
            </div>

            <ul className="space-y-2">
              <ListItem>Send Property Info packs</ListItem>
              <ListItem>Track views and accessed documents</ListItem>
              <ListItem>Store</ListItem>
              <ListItem>24/7 Support</ListItem>
            </ul>
              
            
            <ButtonLogin session={session} extraStyle="w-full" />
            
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-base-200" id="FAQ">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">FAQ</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">Frequently Asked Questions</h2>
        </div>

        <ul className="max-w-lg mx-auto">
          {[
            {
              question: "What do I get exactly?",
              answer: "Lorem Ipsum"
            },
            {
              question: "Can I get a refund?",
              answer: "Lorem Ipsum"
            },
            {
              question: "I have another question?",
              answer: "Lorem Ipsum"
            }
          ].map((qa) => (
            <FAQListItem key={qa.question} qa={qa} />
          ))}
        </ul>
      </section>

       

    </main>
  );
}
