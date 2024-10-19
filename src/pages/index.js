import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { TaskProvider } from "@/components/store/task";
import AddTask from "@/components/pages/AddTask";
import ListPage from "@/components/pages/ListPage";
import { Store } from "@/components/store/store";

export const getServerSideProps = async () => {
  return {
      props: {
          initialTasks: Store,
        },
      };
    };
   

export default function Home({initialTasks}) {
  return (
    <>
     <TaskProvider initialTasks={initialTasks}>
        <div className="main">
       
          <h1>Anjali Task Manager App</h1>
          <AddTask />
          <ListPage />
        </div>
      </TaskProvider>
    </>
  );
}
