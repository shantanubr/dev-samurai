import { SideNavigation } from '@/components/SideNavigation';
import { getFolderStructure } from '@/util/getFolderStructure';
import path from 'path';

export default async function JavaScriptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const docStructure = getFolderStructure(
    path.join(process.cwd(), `src/app/(content)/web/javascript/content`),
  );

  return (
    <div className='fixed flex h-screen w-screen overflow-hidden mt-[74px]'>
      <div className='w-1/5 h-full overflow-y-auto bg-neutral-100 dark:bg-neutral-900 p-4 space-y-4'>
        <SideNavigation structure={docStructure} />
      </div>
      <div className='w-3/5 h-full overflow-y-auto p-4'>{children}</div>
      <div className='w-1/5 h-full overflow-y-auto bg-neutral-100 dark:bg-neutral-900 p-4'>
        {/* <p>Right Section Content</p> */}
      </div>
    </div>
  );
}
