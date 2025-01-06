import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Guidelines = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-center mb-2">Welcome to Your Neighborhood! 🏡</h1>
            <h2 className="text-2xl font-semibold text-center mb-8">Community Guidelines</h2>

            <div className="bg-secondary/50 rounded-lg p-6 mb-8">
              <p className="text-lg">
                Hello neighbor! We're delighted you're here. TheNext is more than just a trading platform – we're building spaces where neighbors become friends, where every person's skills and offerings are valued, and where communities grow stronger together. These guidelines will help you make the most of our community while keeping everyone safe and happy.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Community Values 💝</h2>
              
              <div className="grid gap-8">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Caring for Our Planet</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Every trade helps reduce waste and environmental impact</li>
                    <li>Giving items a second life keeps them out of landfills</li>
                    <li>Sharing resources builds a more sustainable future</li>
                    <li>Local trades mean smaller carbon footprints</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Everyone Has Something to Share</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Whether it's homegrown tomatoes, handyman skills, or simply time to help a neighbor, your contributions matter</li>
                    <li>Value comes in many forms – expertise, time, care, and creativity are all worthy of exchange</li>
                    <li>New to trading? Don't worry! Everyone started somewhere, and our community loves welcoming new members</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Building Real Connections</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>This isn't just about trading – it's about getting to know the wonderful people in your neighborhood</li>
                    <li>Take time to chat, share stories, and build relationships</li>
                    <li>Remember: today's trading partner might be tomorrow's friend!</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Being a Great Neighbor 🌟</h2>
              
              <div className="grid gap-8">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Keep It Positive</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use friendly, respectful language in all communications</li>
                    <li>Appreciate each offer, even if it's not for you</li>
                    <li>Share your knowledge and experience generously</li>
                    <li>Celebrate your successful trades and connections!</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Be Reliable</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Follow through on your commitments</li>
                    <li>Communicate clearly and promptly</li>
                    <li>If plans change, let your trading partner know as soon as possible</li>
                    <li>Be on time for meet-ups</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Stay Safe</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Meet in public places when possible</li>
                    <li>Bring a friend for larger trades</li>
                    <li>Trust your instincts – if something feels off, it's okay to decline</li>
                    <li>Keep personal and financial information private</li>
                    <li>Report any concerns to our support team</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Trading Guidelines 🤝</h2>
              
              <div className="grid gap-8">
                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Before the Trade</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Be clear about what you're offering or seeking</li>
                    <li>Include helpful details (size, condition, time requirements for services)</li>
                    <li>Respond to questions honestly</li>
                    <li>Agree on the trade details before meeting</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">During the Trade</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Meet at the agreed time and place</li>
                    <li>Inspect items together</li>
                    <li>Be honest about any changes or issues</li>
                    <li>Keep the interaction friendly and respectful</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">After the Trade</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Thank your trading partner</li>
                    <li>Complete any agreed-upon follow-up</li>
                    <li>Share positive experiences with the community</li>
                    <li>Provide constructive feedback when asked</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">What to Avoid ⚠️</h2>
              <div className="bg-rose-50 rounded-lg p-6">
                <p className="mb-4">Let's keep our community safe and friendly by avoiding:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Harassment or unkind behavior</li>
                  <li>Discriminatory language or actions</li>
                  <li>Illegal items or services</li>
                  <li>Misrepresenting items or services</li>
                  <li>Aggressive or pressuring behavior</li>
                  <li>Spam or commercial solicitation</li>
                  <li>Sharing others' private information</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Problem Solving 💡</h2>
              
              <div className="grid gap-8">
                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">If Something Goes Wrong</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Start with friendly communication</li>
                    <li>Listen to understand, not to respond</li>
                    <li>Look for win-win solutions</li>
                    <li>Remember we're all neighbors</li>
                    <li>Contact support if you need help resolving an issue</li>
                  </ol>
                </div>

                <div className="bg-lime-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Tips for Positive Resolution</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Stay calm and kind</li>
                    <li>Use "I" statements to express concerns</li>
                    <li>Focus on solutions, not blame</li>
                    <li>Be open to compromise</li>
                    <li>Remember that misunderstandings happen</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Growing Our Community 🌱</h2>
              
              <div className="grid gap-8">
                <div className="bg-emerald-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Ways to Contribute</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Welcome new members</li>
                    <li>Share your trading tips and success stories</li>
                    <li>Help neighbors find what they're looking for</li>
                    <li>Spread the word about our community</li>
                    <li>Share creative ways to reduce waste through trading</li>
                  </ul>
                </div>

                <div className="bg-sky-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Recognition and Growth</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Build your reputation through reliable, friendly trades</li>
                    <li>Help others learn from your experience</li>
                    <li>Celebrate community milestones</li>
                    <li>Share ideas for community improvement</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Getting Help 🆘</h2>
              <div className="bg-fuchsia-50 rounded-lg p-6">
                <p className="mb-4">We're here to support you! Contact us if you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Have questions about trading</li>
                  <li>Need help resolving an issue</li>
                  <li>Want to report a concern</li>
                  <li>Have ideas for improving the community</li>
                  <li>Just want to share a success story!</li>
                </ul>
                <p className="mt-4">Email us at: <a href="mailto:support@thenext.community" className="text-blue-600 hover:underline">support@thenext.community</a></p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Final Thoughts 💭</h2>
              <div className="bg-violet-50 rounded-lg p-6">
                <p className="mb-4">Remember, every trade is an opportunity to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Make a new friend</li>
                  <li>Learn something new</li>
                  <li>Help a neighbor</li>
                  <li>Strengthen our community</li>
                  <li>Create positive change</li>
                  <li>Help our planet thrive</li>
                </ul>
                
                <div className="mt-8 space-y-4">
                  <p>Every time you choose to trade instead of buy new, you're making a choice that benefits both your community and the environment. Together, we're building a more sustainable, connected future!</p>
                  
                  <p>Thank you for being part of TheNext community. Together, we're building something special – one trade, one connection, and one neighborhood at a time!</p>
                  
                  <p className="italic">These guidelines will evolve as our community grows. We'll keep you informed of any updates.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guidelines;