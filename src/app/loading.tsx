import Image from "next/image";

export default function Loading() {
  return (
    <div className="bg-[#FBFBFB] h-screen flex justify-center items-center">
      <Image
        src="/images/loading.gif"
        width={500}
        height={500}
        alt="Picture of the loading"
      />
    </div>
  );
}
