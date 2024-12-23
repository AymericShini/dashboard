import Head from 'next/head';
import styles from '@/pages/index.module.scss';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import { services } from '@/data/services';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aymeric Demange | Dashboard</title>
        <meta name="description" content="Dashboard aymeric app subdomain links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-light.svg" />
      </Head>
      <div className={`${styles.page}`}>
        <main className={styles.main}>
          {services.map((service, index) => (
            <ServiceCard key={index} name={service.name} url={service.url} icon={service.icon} />
          ))}
        </main>
      </div>
    </>
  );
}
