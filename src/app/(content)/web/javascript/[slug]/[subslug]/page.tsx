import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import path from 'path';
interface PageProps {
  params: Promise<{ slug: string; subslug: string }>;
}

export default async function TopicPage({ params }: PageProps) {
  const { slug, subslug } = await params;
  const filePath = path.join(
    process.cwd(),
    `src/app/(content)/web/javascript/content/${slug}/${subslug}.mdx`,
  );
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(fileContents);

  return (
    <div className='prose dark:prose-invert mx-auto p-4 dark:'>
      <MDXRemote source={content} />
    </div>
  );
}
