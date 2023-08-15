import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 block w-full max-w-5xl font-mono text-sm">
        <h1>Hello</h1>

        <p>
          Navigate to the{" "}
          <Link className={"text-blue-600 underline"} href="/dev-challenge">
            dev challenge
          </Link>
        </p>
      </div>
    </main>
  );
}
