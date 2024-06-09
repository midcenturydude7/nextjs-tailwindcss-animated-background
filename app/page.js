export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50 px-16">
      <div className="relative w-full max-w-lg">
        <div className="animate-blob absolute -left-4 top-0 h-72 w-72 rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute -right-4 top-0 h-72 w-72 rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
        <div className="relative m-8 space-y-4">
          <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
            <div className="flex-1">
              <div className="h-4 w-48 rounded bg-gray-300"></div>
            </div>
            <div>
              <div className="h-6 w-24 rounded-lg bg-purple-300"></div>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
            <div className="flex-1">
              <div className="h-4 w-56 rounded bg-gray-300"></div>
            </div>
            <div>
              <div className="h-6 w-20 rounded-lg bg-yellow-300"></div>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
            <div className="flex-1">
              <div className="h-4 w-44 rounded bg-gray-300"></div>
            </div>
            <div className="h-6 w-28 rounded-lg bg-pink-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
