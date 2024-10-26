'use client';
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
        className='flex items-center cursor-pointer hover:bg-neutral-800 p-1 rounded'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{isOpen ? '▼' : '▶︎'}</span>
        <span className='font-semibold ml-3'>
          {folder.name.substring(3).split('_').join(' ')}
        </span>
      </div>
      {isOpen && (
        <ul className='pl-4'>
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

const File: FC<FileProps> = ({ file, onFileSelect }) => (
  <li
    className='pl-6 cursor-pointer hover:bg-neutral-800 p-1 rounded'
    onClick={() => onFileSelect(file.path)}
  >
    {file.name.substring(3).split('_').join(' ')}
  </li>
);

export default FolderViewer;
