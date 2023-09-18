import Image from 'next/image'
import styles from './page.module.css'
import BlockTitle from './components/blockTextTitle/BlockTextTitle'
import LandingOne from './components/landing/landing'
import AboutBttn from './components/buttons/aboutBttn/aboutBttn'


export default function Home() {
  return (
    <main className={styles.main}>
      
      <BlockTitle/>
      <LandingOne/>
{/* sometimes I feel like I want everything to be a component but maybe this should be here?idk good organization and optimization yet :( */}
      <div className={styles.contentgrid}>
        {/* ====================================== */}
        <div className={styles.about}>
          <AboutBttn/>
          <p>Just going to leave some placement text here for reasonble reasons to test out each p element so I can succccceeeefuly style them hahaha... im alone, not really my girl gotta nice bewt</p>
        </div>
        {/* ====================================== */}
        <div className={styles.expect}>
          <h1 id={styles.exT}>TIR</h1>
          <p>Just going to leave some placement text here for reasonble reasons to test out each p element so I can succccceeeefuly style them hahaha... im alone, not really my girl gotta nice bewt</p>
        </div>
        {/* =================================== */}
        <div className={styles.huh}>
          <h1 id={styles.quest}>?</h1>
          <p></p>
        </div>

      </div>

    </main>
  )
}
