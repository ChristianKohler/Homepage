import { Post } from "lib/read-posts";
import Link from "next/link";

export function PostPreviewCard({ post }: { post: Post }) {
  return (
    <Link href={"/" + post.slug}>
      <a className="block group rounded-sm overflow-hidden">
        <img
          src={"/" + post.foldername + post.cover_image.replace("./", "/")}
          alt={post.title}
        />
        <div className="sm:py-4">
          <p className="font-medium text-xl text-gray-900 dark:text-white group-hover:text-blue-700 mb-2">
            {post.title}
          </p>
          <div className="text-gray-900 dark:text-white">
            {post.description}
          </div>
        </div>
      </a>
    </Link>
  );
}
