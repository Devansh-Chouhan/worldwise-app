import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            WorldWide connects people and technology with innovative solutions. We offer comprehensive services, ensuring our clients stay ahead in the digital age. Our team is committed to excellence and customer satisfaction.
          </p>
          <p>
            Our app lets you click on a map to save information about countries, cities, and notes. This feature makes it easy to organize and access your travel plans, research, or personal notes with a simple, user-friendly interface.
          </p>
        </div>
      </section>
    </main>
  );
}
