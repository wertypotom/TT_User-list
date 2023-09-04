import AddUserWindow from './components/AddUserWindow';
import { Layout } from './components/Layout';
import styles from './App.module.css';
import Table from './components/Table';

function App() {
  return (
    <Layout>
      <div className={styles.container}>
        <aside className={styles.filters}>
          <AddUserWindow />
        </aside>
        {/* <section className={styles['main-content']}> */}
        <Table />
        {/* </section> */}
      </div>
    </Layout>
  );
}

export default App;
