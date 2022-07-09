export interface WorkConfig {
  title: string;
  description: string;
  slug: string;
  preview: string;
  publishDate: Date;
  tags: string[];
}

export async function getWorks(): Promise<WorkConfig[]> {
  const workMarkdowns = import.meta.glob("../../articles/*/index.md");
  const works: WorkConfig[] = [];

  for (const path in workMarkdowns) {
    const { frontmatter } = await workMarkdowns[path]();
    const matches = path.match(/articles\/(.*)\//);
    const slug = matches !== null ? matches[1] : "";
    const preview = (await import(`../../articles/${slug}/preview.jpg`)).default;

    works.push({
      ...frontmatter,
      slug,
      preview,
      publishDate: new Date(frontmatter.publishDate),
    });
  }

  return works;
}
