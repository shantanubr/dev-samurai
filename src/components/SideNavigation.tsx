'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { pages } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import FolderViewer, { ContentNode } from './FolderViewer';

interface SideNavigationProps {
  structure: ContentNode[];
}

export const SideNavigation: React.FC<SideNavigationProps> = ({
  structure,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const currentPage = pages.find(
    (page) => page.href === pathname.split('/')[1],
  );
  const [selectedTabHref, setSelectedTabHref] = useState(
    pathname.split('/').length === 3
      ? pathname
      : '/' + pathname.split('/')[1] + '/' + pathname.split('/')[2],
  );

  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  useEffect(() => {
    if (selectedFile) {
      const filePath = '/' + (selectedFile?.split('docs/')[1].split('.')[0] ?? '');
      router.push(filePath);
    }
  }, [selectedFile]);

  return (
    <div className='flex flex-col w-full'>
      <Select
        value={selectedTabHref}
        onValueChange={(value) => {
          setSelectedTabHref(value);
          router.push(value);
        }}
      >
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Select ' />
        </SelectTrigger>
        <SelectContent>
          {currentPage?.subpages.map((subpage, _) => (
            <SelectItem key={_} value={subpage.href}>
              {subpage.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className='mt-6'>
        <FolderViewer structure={structure} onFileSelect={setSelectedFile} />
      </div>
    </div>
  );
};
