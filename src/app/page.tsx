import NextLink from 'next/link';

export default function HomePage() {
  return (
    <div className="p-2">
      <div>Home Page</div>
      <div className="mt-2">
        <NextLink className="text-blue-500" href="/test">
          Test page
        </NextLink>
      </div>
    </div>
  );
}
