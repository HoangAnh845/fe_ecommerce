import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-end gap-5 bg-white mt-28 ">
      <Image
        src="/images/404.png"
        width={500}
        height={500}
        alt="Picture of the 404"
      />
      <h2 className="font-bold text-3xl">PAGE NOT FOUND</h2>
      <p className="font-medium text-xl">Sorry! We could not find the page you are looking for</p>
      <Link href="/" className="bg-yellow-300 py-3 px-6 rounded-lg">Back to Home</Link>
    </div>
  );
}
