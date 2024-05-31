import Image from 'next/image'
import styles from "./styles.module.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">


      <div className="">
      <a className=" underline underline-offset-1 " href="https://www.glab.vn/product?word=Easybadwork">
      <img src="/images/ebwphone.png" className={styles.imagePhone}/>
      <img src="/images/ebw.png" className={styles.image}/>
      
{/* <a className=" underline underline-offset-1 " href="https://docs.google.com/forms/d/1OGWPOlc3oDcNkCqtursWysbMWsZjI3btxOD8W46444I/viewform?edit_requested=true">
       <img src="/images/newitem.jpg" className={styles.image}/>
       <img src="/images/newitemmin.jpg" className={styles.imagePhone}/> */}

      </a>
   
      </div>

 
    </main>
  )
}
