export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  excerpt: string;
  content: string;
  private: boolean;
}
