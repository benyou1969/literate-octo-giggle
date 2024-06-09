import { useState } from "react";
export const runtime = "edge";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  return await res.json();
}
export default async function AboutPage() {
  const posts = (await fetchData()) as any[];

  return (
    <>
      <h1>About</h1>
      <br />
      <div>
        <div>
          {posts?.map((post, idx) => (
            <div key={post?.id}>
              #{idx} - {post?.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
