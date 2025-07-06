import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQ() {
  return (
   <section className="mx-auto py-16 px-4 bg-white backdrop-blur-sm text-slate-600 border-t border-slate-100 ">
      <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
      <p className="text-center mb-8 text-gray-700">
        Here are some common questions I receive from clients. If you have any other questions, feel free to reach out!
      </p>
      <div className="max-w-2xl mx-auto">
      <Accordion type="single"
        collapsible
        className="w-full"
        >
        <AccordionItem value="item-1">
          <AccordionTrigger>What are your fees?</AccordionTrigger>
          <AccordionContent className="text-balance">
            <p>
              My standard session fee is $XXX per 50-minute session. I offer an initial consultation at a reduced rate to discuss your needs and determine if we&apos;re a good fit.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Do you take insurance?</AccordionTrigger>
          <AccordionContent className="text-balance">
            <p>
              I am an in-network provider with several insurance companies including [list insurances]. I can also provide superbills for out-of-network reimbursement.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Do you provide online counseling?</AccordionTrigger>
          <AccordionContent className="text-balance">
            <p>
              Yes, I offer secure video therapy sessions through a HIPAA-compliant platform. Online counseling is available to all clients residing in [state/region].
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>What are your office hours?</AccordionTrigger>
          <AccordionContent className="text-balance">
            <p>
              My regular office hours are Monday through Friday, 9:00 AM to 6:00 PM. I offer some evening appointments on Tuesdays and Thursdays until 8:00 PM.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>What geographic areas do you serve?</AccordionTrigger>
          <AccordionContent className="text-balance">
            <p>
              I serve clients in the [city/region] area for in-person sessions. For telehealth, I can work with anyone residing in [state/region] due to licensing requirements.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>What services do you offer?</AccordionTrigger>
          <AccordionContent className="text-balance">
            <p>
              I provide individual therapy, couples counseling, and group therapy. My areas of specialization include anxiety, depression, trauma, relationship issues, and life transitions.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </section>
  );
}