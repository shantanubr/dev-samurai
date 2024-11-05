import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import path from 'path';

interface PageProps {
  params: Promise<{ topic: string; subtopic: string; slug: string }>;
}

export default async function SlugPage({ params }: PageProps) {
  const { topic, subtopic, slug } = await params;
  const filePath = path.join(
    process.cwd(),
    `docs/${topic}/${subtopic}/${slug}.mdx`,
  );
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(fileContents);

  return (
    <div className='prose dark:prose-invert mx-auto p-4'>
      <div className='h-10' />
      <MDXRemote source={content} />
      <div className='h-40' />
    </div>
  );
}
