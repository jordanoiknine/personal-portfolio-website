import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LactaSense Patent | Jordan Oiknine",
  description: "LactaSense Patent Documentation",
};

export default function LactaSensePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="w-full h-screen">
        <iframe
          src="/LactaSense-Patent.pdf"
          className="w-full h-full border-0"
          title="LactaSense Patent"
          style={{ minHeight: "100vh" }}
        />
      </div>
    </div>
  );
}

