import NextLink from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto max-w-lg py-20">
      <header className="mb-4">
        <h1 className="text-3xl font-medium mb-1">Exprmnts</h1>
        <p className="text-gray-500">Showcasing clones of nice concepts I find around the web</p>
      </header>

      <ul className="ml-4 list-disc">
        <li>
          <NextLink href="/amie">Amie Calendar clone</NextLink>
        </li>
      </ul>
    </main>
  );
}
