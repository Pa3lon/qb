import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dæggis</title>
      </Head>
      <main>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <img src="/images/dag.jpg" alt="Logo" />
        </div>
      </main>
    </>
  );
}
