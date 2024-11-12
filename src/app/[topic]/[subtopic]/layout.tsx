import { Footer } from '@/components/Footer';
import { SideNavigation } from '@/components/SideNavigation';
import { getFolderStructure } from '@/util/getFolderStructure';
import path from 'path';

interface SubtopicLayoutProps {
  children: React.ReactNode;
  params: Promise<{ topic: string; subtopic: string; slug: string }>;
}

export default async function RootLayout({
  children,
  params,
}: SubtopicLayoutProps) {
  const { topic, subtopic } = await params;
  const docStructure = getFolderStructure(
    path.join(process.cwd(), `docs/${topic}/${subtopic}`),
  );

  return (
    <div className='fixed flex h-screen w-screen overflow-hidden mt-[74px]'>
      <div className='w-1/5 h-full overflow-y-auto bg-neutral-100 dark:bg-background dark:border-r dark:border-neutral-800 p-4 space-y-4'>
        <SideNavigation structure={docStructure} />
      </div>
      <div className='w-4/5 h-full overflow-y-auto'>
        <div className='p-4'>{children}</div>
        <div className='mb-20'>
          <Footer location='docs' />
        </div>
      </div>
      {/* <div className='w-1/5 h-full overflow-y-auto bg-neutral-100 dark:bg-background dark:border-l dark:border-neutral-800 p-4'>
        <p>Right Section Content</p>
      </div> */}
    </div>
  );
}
