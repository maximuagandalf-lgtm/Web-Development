import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto" fill={true} src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="elephant image" />

      I am home
    </div>
  );
}
