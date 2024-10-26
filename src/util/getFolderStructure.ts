// utils/getFolderStructure.ts (this remains the same)
import fs from 'fs';
import path from 'path';

interface FileNode {
  type: 'file';
  name: string;
  path: string;
}

interface FolderNode {
  type: 'folder';
  name: string;
  children: ContentNode[];
}

type ContentNode = FileNode | FolderNode;

export function getFolderStructure(folderPath: string): ContentNode[] {
  const entries = fs.readdirSync(folderPath, { withFileTypes: true });

  return entries
    .map((entry) => {
      const fullPath = path.join(folderPath, entry.name);
      if (entry.isDirectory()) {
        return {
          type: 'folder',
          name: entry.name,
          children: getFolderStructure(fullPath),
        } as FolderNode;
      } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
        return {
          type: 'file',
          name: entry.name.replace('.mdx', ''),
          path: fullPath,
        } as FileNode;
      }
    })
    .filter(Boolean) as ContentNode[];
}
