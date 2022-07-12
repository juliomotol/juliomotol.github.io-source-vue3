import type { VNode } from "vue";

export interface WorkMarkdown {
  default: VNode;
  frontmatter: WorkFrontmatter;
}

export interface WorkFrontmatter {
  title: string;
  description: string;
  slug: string;
  preview: string;
  publishDate: Date;
  tags: string[];
}

interface WorkMarkdownRaw {
  default: VNode;
  frontmatter: Record<string, string>;
}

export async function getWorkFrontmatters(): Promise<WorkFrontmatter[]> {
  const workMarkdowns = import.meta.glob("../../articles/*/index.md");
  const works: WorkFrontmatter[] = [];

  for (const path in workMarkdowns) {
    const { frontmatter } = await getWorkMarkdown(
      path,
      (await workMarkdowns[path]()) as WorkMarkdownRaw
    );
    works.push(frontmatter);
  }

  return works;
}

export async function getWorkBySlug(slug: string): Promise<WorkMarkdown> {
  return await getWorkMarkdown(
    `../../articles/${slug}/index.md`,
    await import(`../../articles/${slug}/index.md`)
  );
}

async function getWorkMarkdown(
  path: string,
  markdown: WorkMarkdownRaw
): Promise<WorkMarkdown> {
  const { frontmatter } = markdown;
  const matches = path.match(/articles\/(.*)\//);
  const slug = matches !== null ? matches[1] : "";
  const preview = (await import(`../../articles/${slug}/preview.jpg`)).default;

  return {
    ...markdown,
    frontmatter: {
      ...frontmatter,
      slug,
      preview,
      publishDate: new Date(frontmatter.publishDate),
    } as WorkFrontmatter,
  } as WorkMarkdown;
}
