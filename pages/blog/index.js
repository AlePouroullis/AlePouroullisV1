import Link from 'next/link';

export default function MainBlogPage() {
  return (
    <>
      <h1>Main blog page</h1>
      <ul style={{display:"flex", flexDirection: "column" }}>
        <Link href="/blog/a">
          <a>This goes to post &apos;a&apos;.</a>
        </Link>
        <Link href="/blog/b">
          <a>This goes to post &apos;b&apos;</a>
        </Link>
      </ul>
    </>
  );
}