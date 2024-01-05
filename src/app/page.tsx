import styles from "./page.module.css";
import JingleMap from "@/components/JingleMap";

export default function Home() {
  return (
    <main className={styles.main}>
      <JingleMap />
    </main>
  );
}
