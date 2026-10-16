export default function ProductSkeleton() {
  return (
    <div className="animate-pulse" aria-hidden>
      <div className="aspect-[4/3] w-full rounded-lg bg-rose-100 lg:aspect-square" />
      <div className="mt-9 space-y-2">
        <div className="h-3 w-1/4 rounded bg-rose-100" />
        <div className="h-4 w-3/4 rounded bg-rose-100" />
        <div className="h-4 w-1/5 rounded bg-rose-100" />
      </div>
    </div>
  );
}
