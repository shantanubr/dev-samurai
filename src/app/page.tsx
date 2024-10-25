import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='text-9xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 bg-clip-text text-transparent'>
        Dev Samurai
      </div>
      <p className='text-2xl text-sky-900 dark:text-sky-400 font-semibold mt-4'>
        A Developer Documentation For Software Engineers
      </p>
      <Button className='mt-16' size={'lg'}>
        Get Started
      </Button>
    </div>
  );
}
