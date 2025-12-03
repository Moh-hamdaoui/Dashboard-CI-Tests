import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <a href="/dashboard" className="text-blue-500 hover:underline mr-4">
        Dashboard
      </a>
      <a href="/landing" className="text-red-500 hover:underline ml-4">
        Landing
      </a>
    </div>
    
    
  );
}
