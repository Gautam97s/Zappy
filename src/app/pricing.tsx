import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
  return (
    <div >
      <main>
        <section className="w-full pt-0 md:pt-0 lg:pt-0 pb-12 md:pb-24 lg:pb-32">
          <div className="container px-2 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
                  Choose the perfect plan for your Instagram automation needs. All plans include our core features with
                  different limits and capabilities.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <div className="flex items-center justify-center space-x-2 p-1 rounded-lg border">
                  <Button variant="outline" className="w-full rounded-md bg-background shadow-none border-none">
                    Monthly
                  </Button>
                  <Button className="w-full rounded-md">Annual (Save 20%)</Button>
                </div>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* Free Plan */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <div className="text-4xl font-bold">$0</div>
                  <CardDescription>Perfect for beginners exploring Instagram automation</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>1 Instagram account</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>10 automated responses per day</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Community support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>

              {/* Basic Plan */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <div className="text-4xl font-bold">$29</div>
                  <CardDescription>For growing creators and small businesses</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>3 Instagram accounts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>100 automated responses per day</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Custom response templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe</Button>
                </CardFooter>
              </Card>

              {/* Pro Plan - Highlighted */}
              <Card className="flex flex-col border-primary relative">
                <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <div className="text-4xl font-bold">$79</div>
                  <CardDescription>For professional creators and businesses</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>10 Instagram accounts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Unlimited automated responses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Comprehensive analytics dashboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>AI-powered response suggestions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Comment sentiment analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Priority email & chat support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe</Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <div className="text-4xl font-bold">Custom</div>
                  <CardDescription>For agencies and large businesses</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Unlimited Instagram accounts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Unlimited automated responses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Custom analytics & reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Advanced AI customization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>API access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>24/7 priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Compare Features</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
                  See which plan is right for your Instagram automation needs
                </p>
              </div>
            </div>
            <div className="mt-12 overflow-auto">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-6 text-left font-medium">Features</th>
                    <th className="py-4 px-6 text-center font-medium">Free</th>
                    <th className="py-4 px-6 text-center font-medium">Basic</th>
                    <th className="py-4 px-6 text-center font-medium">Pro</th>
                    <th className="py-4 px-6 text-center font-medium">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Instagram Accounts</td>
                    <td className="py-4 px-6 text-center">1</td>
                    <td className="py-4 px-6 text-center">3</td>
                    <td className="py-4 px-6 text-center">10</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Automated Responses</td>
                    <td className="py-4 px-6 text-center">10/day</td>
                    <td className="py-4 px-6 text-center">100/day</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Comment Management</td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">DM Automation</td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Analytics</td>
                    <td className="py-4 px-6 text-center">Basic</td>
                    <td className="py-4 px-6 text-center">Advanced</td>
                    <td className="py-4 px-6 text-center">Comprehensive</td>
                    <td className="py-4 px-6 text-center">Custom</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">AI Response Suggestions</td>
                    <td className="py-4 px-6 text-center">—</td>
                    <td className="py-4 px-6 text-center">—</td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Sentiment Analysis</td>
                    <td className="py-4 px-6 text-center">—</td>
                    <td className="py-4 px-6 text-center">—</td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">API Access</td>
                    <td className="py-4 px-6 text-center">—</td>
                    <td className="py-4 px-6 text-center">—</td>
                    <td className="py-4 px-6 text-center">—</td>
                    <td className="py-4 px-6 text-center">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Support</td>
                    <td className="py-4 px-6 text-center">Community</td>
                    <td className="py-4 px-6 text-center">Email</td>
                    <td className="py-4 px-6 text-center">Priority Email & Chat</td>
                    <td className="py-4 px-6 text-center">Dedicated Manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
                  Find answers to common questions about our pricing and features
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Can I change plans at any time?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be
                    available immediately, and we will prorate your billing. When downgrading, the changes will take
                    effect at the start of your next billing cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a 14-day free trial on our Basic and Pro plans. No credit card is required to start
                    your trial. Youll get full access to all features included in the plan during your trial period.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What happens if I exceed my plan limits?</AccordionTrigger>
                  <AccordionContent>
                    If you exceed your plans limits, such as the number of automated responses per day, the system will
                    notify you. You can either upgrade to a higher plan or wait until your limits reset the next day. We
                    dont automatically charge you for overages.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer discounts for annual billing?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer a 20% discount when you choose annual billing instead of monthly. This discount is
                    applied to all paid plans (Basic, Pro, and Enterprise).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and bank
                    transfers for Enterprise plans. All payments are processed securely through our payment providers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can cancel your subscription at any time from your account settings. When you cancel,
                    you will still have access to your plans features until the end of your current billing period. We
                    do not offer refunds for partial months.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Transform Your Instagram Engagement?
                </h2>
                <p className="text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
                  Join thousands of creators and businesses who are automating their Instagram interactions with Zappy.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="outline" className="bg-white text-black hover:bg-black hover:text-white px-8">Start Free Trial</Button>
                <Button variant="outline" className=" bg-black text-white hover:bg-white px-8">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
