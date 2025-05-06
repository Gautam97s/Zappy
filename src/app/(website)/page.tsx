import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import PricingPage from "../pricing"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            Zappy
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
            <Link href="#resources" className="text-sm font-medium hover:underline">
              Resources
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:underline">
              Blog Topics
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline hidden md:block">
              Start
            </Link>
            <Button variant="default">Join</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transform Your Instagram Engagement into Opportunities
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Zappy simplifies your Instagram interactions, allowing you to respond instantly to DMs and comments.
                  Turn every engagement into a potential opportunity with our automated solutions.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="px-8">Learn More</Button>
                  <Button variant="outline" className="px-8">
                    Sign Up
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm h-80 bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Instagram Engagement Illustration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transform Your Instagram Engagement with Automated Interaction Features
                </h2>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-3">
              <div className="flex flex-col items-start space-y-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Effortless Communication with AI-Driven Messaging Solutions</h3>
                <p className="text-gray-500">
                  Our platform automates DM responses, ensuring timely engagement with your audience.
                </p>
                <Link href="#" className="text-primary font-medium hover:underline">
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Seamless Comment Management for Enhanced Interaction</h3>
                <p className="text-gray-500">
                  Automatically handle comments on your posts, boosting your interaction effortlessly.
                </p>
                <Link href="#" className="text-primary font-medium hover:underline">
                  Read more
                </Link>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                    <path d="M8.5 8.5v.01" />
                    <path d="M16 15.5v.01" />
                    <path d="M12 12v.01" />
                    <path d="M11 17v.01" />
                    <path d="M7 14v.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI-Powered Responses Tailored to Your Audience Needs</h3>
                <p className="text-gray-500">
                  Utilize AI to craft personalized messages that resonate with your followers.
                </p>
                <Link href="#" className="text-primary font-medium hover:underline">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <PricingPage />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm h-80 bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Automation Illustration
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Automate Your Instagram Interactions Effortlessly
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Zappy seamlessly integrates with Instagram to automate direct messages and comments. Our platform
                  ensures that every interaction is timely and personalized, enhancing user engagement.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Instant Responses to Direct Messages</h3>
                      <p className="text-gray-500">
                        When a lead sends a DM with a keyword, Zappy responds automatically.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Automated Engagement on Comments</h3>
                      <p className="text-gray-500">
                        Zappy triggers automations to like and reply to comments on your posts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Streamlined Interaction for Better Opportunities</h3>
                      <p className="text-gray-500">Turn every engagement into a potential opportunity with Zappy.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="px-8">Learn More</Button>
                  <Button variant="outline" className="px-8">
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="engage" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Unlock the Power of Instagram Engagement
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With Zappy, transform your Instagram interactions into meaningful connections. Experience increased
                  engagement and efficiency through our automated solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Boost your audience engagement effortlessly with automation.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Save time managing interactions and focus on growth.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-primary"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>Seamlessly manage comments and messages in one place.</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="px-8">Learn More</Button>
                  <Button variant="outline" className="px-8">
                    Sign Up
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm h-80 bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Engagement Illustration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Customer testimonials</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Zappy transformed our Instagram engagement completely!
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-start space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-500">
                    Zappy has revolutionized how we interact with our audience. Our response rates have skyrocketed!
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full overflow-hidden w-10 h-10 bg-gray-200"></div>
                    <div>
                      <h3 className="font-bold">Emily Johnson</h3>
                      <p className="text-sm text-gray-500">Marketing Director, BrandX</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-500">
                    Thanks to Zappy, we engage with our followers like never before. The automation is seamless and
                    effective!
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full overflow-hidden w-10 h-10 bg-gray-200"></div>
                    <div>
                      <h3 className="font-bold">Michael Smith</h3>
                      <p className="text-sm text-gray-500">Social Media Manager, CompanyY</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-500">
                    Our engagement metrics improved drastically after using Zappy. Its a game changer for our
                    marketing strategy!
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full overflow-hidden w-10 h-10 bg-gray-200"></div>
                    <div>
                      <h3 className="font-bold">Sarah Lee</h3>
                      <p className="text-sm text-gray-500">CEO, StartupZ</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 bg-gray-50 rounded-lg">
                <div className="space-y-2">
                  <p className="text-gray-500">
                    Zappy has made our customer interactions more personal and efficient. We couldnt be happier!
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full overflow-hidden w-10 h-10 bg-gray-200"></div>
                    <div>
                      <h3 className="font-bold">David Brown</h3>
                      <p className="text-sm text-gray-500">Founder, TechCo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Transform Your Instagram Engagement</h2>
                <p className="text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the power of automated conversations. Sign up for a demo or start your free trial today!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="outline" className="bg-white text-black hover:bg-black hover:text-white px-8">Learn More</Button>
                <Button variant="outline"className=" bg-black text-white hover:bg-white px-8">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Blog Topics</h2>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="aspect-video w-full bg-gray-100 rounded-md overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">Blog Image</div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Maximize Engagement</h3>
                  <p className="text-gray-500">Discover how to enhance your Instagram interactions.</p>
                  <Link href="#" className="text-primary font-medium hover:underline">
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="aspect-video w-full bg-gray-100 rounded-md overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">Blog Image</div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Engagement Insights</h3>
                  <p className="text-gray-500">Analyze what drives your audience interaction.</p>
                  <Link href="#" className="text-primary font-medium hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="aspect-video w-full bg-gray-100 rounded-md overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">Blog Image</div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Instagram Growth</h3>
                  <p className="text-gray-500">Strategies to grow your audience effectively.</p>
                  <Link href="#" className="text-primary font-medium hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="newsletter" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Subscribe to our newsletter for the latest features and updates.
                </h2>
                <p className="text-gray-500">
                  By subscribing, you accept our Privacy Policy and consent to receive updates.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="flex-1">
                  <Input placeholder="Your email here" className="h-12" />
                </div>
                <Button className="h-12">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 md:py-24 lg:py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                Zappy
              </Link>
              <p className="text-gray-500">© 2025 Zappy. All rights reserved.</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Blog Posts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Connect With Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Facebook Page
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Instagram Feed
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Twitter Profile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    LinkedIn Page
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    YouTube Channel
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Follow Us</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
              <div className="space-y-2">
                <Link href="#" className="text-gray-500 hover:text-gray-900 block">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900 block">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900 block">
                  Cookie Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
