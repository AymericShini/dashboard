import Image from 'next/image';
import styles from '@/components/ServiceCard/index.module.scss';

interface Props {
  name: string;
  url: string;
  icon: string;
}

export default function ServiceCard({ name, url, icon }: Props) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <Image src={icon} alt={`${name} icon`} width={50} height={50} />
      <h2>{name}</h2>
    </a>
  );
}
