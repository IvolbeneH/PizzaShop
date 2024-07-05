import { Header } from "@/components/header";
import { Dashboard } from "./dashboard/dashboard";

export default function Home() {
  return (
    <div className="lg:grid lg:grid-cols-app flex flex-col min-h-screen antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Dashboard />
      </div>
    </div>
  );
}
