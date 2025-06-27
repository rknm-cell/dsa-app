
import QuickSortVisualizer from "./components/QuickSort";


export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#e8dff4] to-[#d5d7ff] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <QuickSortVisualizer />
      </div>
    </main>
  );
}
