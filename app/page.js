import Link from "next/link";
import ButtonLogin from "@/components/ButtonLogin";
import ListItem from "@/components/ListItem";
import FAQListItem from "@/components/FAQListItem";


export default function Home() {
  const isLoggedIn = true;
  const name = "Ben";

  

  return (
    <main>
      {/* HEADER */}
      <section className="bg-base-200" id="header">
          <div className="bg-base-200 flex justify-between items-center py-2 px-8 max-w-3xl mx-auto">
            <div>CodeFastSaas</div>
            <div className="space-x-4 max-md:hidden">
              <a className="link link-hover" href="#pricing">Pricing</a>
              <a className="link link-hover" href="#FAQ">FAQ</a>
            </div>
            <div>
              <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
            </div>
          </div>
      </section>
      {/* HERO */}
      <section className='text-center py-32 px-8 max-w-3xl mx-auto' id="hero">
        <h1 className='text-4xl lg:text-5xl font-extrabold mb-6'>Collect Customer feedback to build better products</h1>
        <div className='opacity-90 mb-10'>Create a feedback board in minutes, prioritize features, abd build products your customers will love</div>

        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />

      </section>
      {/* PRICING */ }
      <section className="bg-base-200" id="pricing">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">A pricing that adapts to your needs</h2>
        

          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline">
              <div className="font-black text-4xl">$19</div>
              <div className="uppercase text-sm font-medium opacity-60">/month</div>
            </div>

            <ul className="space-y-2">
              <ListItem>Collect Customer Feedback</ListItem>
              <ListItem>Unlimited Boards</ListItem>
              <ListItem>Admin Dashboard</ListItem>
              <ListItem>24/7 Support</ListItem>
            </ul>
              
            
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} extraStyle="w-full" />
            
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
