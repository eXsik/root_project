import { styles } from './style';
import { Navbar, Hero, Offer, Projects, Contact, Footer } from './components';

function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.boxWidth} `}>
          <Offer />
        </div>
      </div>

      <div className={`${styles.flexCenter} bg-[#f6f6f6]`}>
        <div className={`${styles.boxWidth}`}>
         <Projects />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.boxWidth}`}>
         <Contact />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
         <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
