"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const GetStartedButton: React.FC = () => {
  const router = useRouter();
  return (
    <Button className='mt-16' size={'lg'} onClick={() => router.push('/web/javascript')}>
        Get Started
      </Button>
  );
};
