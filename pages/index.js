import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center min-h-screen">
        <div className="font-mono text-6xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-green-400">
          Hello World
        </div>

      </main>
    </div>
  );
}
