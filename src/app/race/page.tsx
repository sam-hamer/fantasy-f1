"use client"

import LeaderBoard from "@/app/ui/LeaderBoard";
import { useSearchParams } from 'next/navigation'

export default function SeasonPage() {
  const searchParams = useSearchParams()
 
  const location = searchParams.get('location')

  return (
    <div>
      <LeaderBoard location={location!}/>
    </div>
  );
}
