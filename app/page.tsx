import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col  py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2 className="mt-8 text-xl">use cache: remote</h2>
        <Link href={`/use_cache_remote/parallel/100`}>Parallel</Link>
        <Link href={`/use_cache_remote/sequential/100`}>Sequential</Link>
      </main>
    </div>
  );
}
