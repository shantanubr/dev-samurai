'use client';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';

export interface FileNode {
  type: 'file';
  name: string;
  path: string;
}

export interface FolderNode {
  type: 'folder';
  name: string;
  children: ContentNode[];
}

export type ContentNode = FileNode | FolderNode;

export interface FolderViewerProps {
  structure: ContentNode[];
  onFileSelect: (filePath: string) => void;
}

const FolderViewer: FC<FolderViewerProps> = ({ structure, onFileSelect }) => {
  return (
    <ul className='space-y-1'>
      {structure.map((item) =>
        item.type === 'folder' ? (
          <Folder key={item.name} folder={item} onFileSelect={onFileSelect} />
        ) : (
          <File key={item.path} file={item} onFileSelect={onFileSelect} />
        ),
      )}
    </ul>
  );
};

interface FolderProps {
  folder: FolderNode;
  onFileSelect: (filePath: string) => void;
}

const Folder: FC<FolderProps> = ({ folder, onFileSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <div
        className='flex items-center cursor-pointer hover:bg-neutral-200 hover:dark:bg-neutral-800 p-2 rounded'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {isOpen ? (
            <ChevronDown className='h-4 w-4' />
          ) : (
            <ChevronRight className='h-4 w-4' />
          )}
        </span>
        <span className='ml-4 text-sm'>
          {folder.name.substring(3).split('_').join(' ')}
        </span>
      </div>
      {isOpen && (
        <ul className='ml-8'>
          <FolderViewer
            structure={folder.children}
            onFileSelect={onFileSelect}
          />
        </ul>
      )}
    </li>
  );
};

interface FileProps {
  file: FileNode;
  onFileSelect: (filePath: string) => void;
}

const File: FC<FileProps> = ({ file, onFileSelect }) => {
  const pathName = usePathname();
  const isFileSelected = pathName.includes(file.name);
  return (
    <li
      className={`cursor-pointer hover:bg-neutral-200 hover:dark:bg-neutral-800 p-2 rounded text-sm ${
        isFileSelected
          ? ' bg-neutral-300 dark:bg-neutral-800'
          : 'bg-neutral-100 dark:bg-background'
      }`}
      onClick={() => onFileSelect(file.path)}
    >
      {file.name.substring(3).split('_').join(' ')}
    </li>
  );
};

export default FolderViewer;
