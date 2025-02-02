export default async function Page() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const data = await res.json();
  return (
    <div className="flex justify-center">
      <h1 className="text-[30px]">{data.id}</h1>
    </div>
  );
}
