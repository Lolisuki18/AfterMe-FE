/**
 * PageSkeleton — animated skeleton placeholder shown while lazy-loaded pages
 * are being fetched (Suspense fallback).
 */
export const PageSkeleton = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-full max-w-md space-y-6 px-6">
        {/* Simulated logo / avatar */}
        <div className="flex justify-center">
          <div className="bg-surface-alt h-12 w-12 animate-pulse rounded-full" />
        </div>

        {/* Title skeleton */}
        <div className="space-y-3">
          <div className="bg-surface-alt mx-auto h-5 w-3/4 animate-pulse rounded-lg" />
          <div className="bg-surface-alt mx-auto h-4 w-1/2 animate-pulse rounded-lg" />
        </div>

        {/* Content block skeleton */}
        <div className="space-y-3">
          <div className="bg-surface-alt h-3 w-full animate-pulse rounded" />
          <div className="bg-surface-alt h-3 w-5/6 animate-pulse rounded" />
          <div className="bg-surface-alt h-3 w-4/6 animate-pulse rounded" />
        </div>

        {/* Button skeleton */}
        <div className="flex justify-center">
          <div className="bg-surface-alt h-10 w-32 animate-pulse rounded-lg" />
        </div>
      </div>
    </div>
  );
};
