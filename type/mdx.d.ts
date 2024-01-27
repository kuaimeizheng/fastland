declare module '*.mdx' {
  import { ReactNode } from 'react';
  export const frontMatter: {
    title: string;
    date: string;
  };
  const MDXContent: () => ReactNode;
  export default MDXContent;
}