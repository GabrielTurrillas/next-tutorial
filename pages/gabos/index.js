import styles from '../../styles/Gabos.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  return {
    props: { gabos: data }
  }
}

const Gabo = ({ gabos }) => {
  return (
    <div>
      <h1>All Gabos</h1>
      {gabos.map(gabo => (
        <Link href={`/gabos/${gabo.id}`} key={gabo.id}>
          <a className={styles.single}>
            <h3>{gabo.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Gabo;