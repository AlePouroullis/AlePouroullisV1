import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Post() {
   const router = useRouter();
   const { slug } = router.query

   return (
      <>
         <h1>Post: {slug}</h1>
         <Link href="/blog">
            <a>This goes back to the original blog page</a>
         </Link>
      </>
   )
}