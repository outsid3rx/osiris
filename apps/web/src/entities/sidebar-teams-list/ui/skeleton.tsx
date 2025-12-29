import { Skeleton } from '~shared/shadcn/components/ui'

export const RootSkeleton = () => (
  <div className="p-2 flex gap-2">
    <Skeleton className="size-8 rounded-lg" />
    <div className="flex flex-col justify-between">
      <Skeleton className="w-[130px] h-[14px]" />
      <Skeleton className="w-[60px] h-[12px]" />
    </div>
  </div>
)
