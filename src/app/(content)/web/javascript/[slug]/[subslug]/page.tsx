import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import path from 'path';

export default async function TopicPage({
  params,
}: {
  params: { slug: string; subslug: string };
}) {
  const { slug, subslug } = await params;
  const filePath = path.join(
    process.cwd(),
    `src/app/(content)/web/javascript/content/${slug}/${subslug}.mdx`,
  );
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { content } = matter(fileContents);

  return (
    <article>
      <MDXRemote source={content} />
    </article>
  );
}
