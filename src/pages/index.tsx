import Head from 'next/head';
import styles from '@/pages/index.module.scss';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import { services } from '@/data/services';

export default function Home() {
  // Separate services into public and private || web
  const publicServices = services.filter(service => !service.private && !service.web);
  const privateServices = services.filter(service => service.private && !service.web);
  const webServices = services.filter(service => !service.private && service.web);

  return (
    <>
      <Head>
        <title>Aymeric Demange | Dashboard</title>
        <meta name="description" content="Dashboard aymeric app subdomain links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/test.png" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          {/* Public Services Section */}
          <section className={styles.section}>
            <h2 className={styles.heading}>Public Services</h2>

            <div className={styles.serviceGrid}>
              {publicServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.name}
                  url={service.url}
                  icon={service.icon}
                />
              ))}
            </div>

            {/* Public Web Section */}
            <h3 className={styles.subTitle}>Website React / TS </h3>

            <div className={styles.serviceGrid}>
              {webServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.name}
                  url={service.url}
                  icon={service.icon}
                />
              ))}
            </div>
          </section>

          {/* Divider */}
          <hr className={styles.divider} />

          {/* Private Services Section */}
          <section className={styles.section}>
            <h2 className={styles.heading}>Private Services</h2>
            <div className={styles.serviceGrid}>
              {privateServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  name={service.name}
                  url={service.url}
                  icon={service.icon}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
