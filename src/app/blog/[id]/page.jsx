import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id);
  if (!data) {
    return notFound();
  }
  
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus modi porro ipsam sed esse corporis iusto, itaque
            mollitia nam officia tempora quisquam nemo in eos consequatur.
            Magnam tenetur facere quisquam!
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Ameer hasan</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
          voluptas impedit temporibus id iste debitis natus ea molestiae,
          distinctio minus deleniti corrupti porro soluta doloribus modi
          dignissimos laboriosam veniam fugit!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
