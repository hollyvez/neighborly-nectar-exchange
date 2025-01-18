import { Handshake, Leaf } from "lucide-react";

export const ValuesSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 hover:scale-105 transition-transform">
            <Handshake className="w-12 h-12 mx-auto mb-4 text-accent-blue" />
            <h3 className="text-xl font-bold mb-2">Everyone Has Value</h3>
            <p>Every neighbor has something unique to offer our community</p>
          </div>
          <div className="text-center p-6 hover:scale-105 transition-transform">
            <Leaf className="w-12 h-12 mx-auto mb-4 text-accent-green" />
            <h3 className="text-xl font-bold mb-2">Growing Together</h3>
            <p>Building stronger communities through meaningful connections</p>
          </div>
          <div className="text-center p-6 hover:scale-105 transition-transform">
            <Handshake className="w-12 h-12 mx-auto mb-4 text-accent-purple" />
            <h3 className="text-xl font-bold mb-2">Fair Exchange</h3>
            <p>Promoting equitable and friendly neighborhood bartering</p>
          </div>
        </div>
      </div>
    </section>
  );
};