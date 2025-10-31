import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impedix Patent | Jordan Oiknine",
  description: "Impedix Patent Documentation",
};

export default function ImpedixPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="w-full h-screen">
        <iframe
          src="/Impedix-Patent.pdf"
          className="w-full h-full border-0"
          title="Impedix Patent"
          style={{ minHeight: "100vh" }}
        />
      </div>
    </div>
  );
}

