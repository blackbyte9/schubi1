import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Schulbuch Bibliothek - Main</h1>
        <pre>{JSON.stringify(session, null, 2)}  </pre>
      </main>
      <footer className="flex flex-col gap-4 items-center justify-center row-start-3">
        Schubi Vöhringen
      </footer>
    </div>
  );
}
