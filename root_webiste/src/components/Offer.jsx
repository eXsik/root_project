import { offerData } from "../constants";
import styles, { layout } from "../style";

const Offer = () => (
  <section id="Offer" className={`${layout.section} bg-white xl:px-0 sm:px-16 px-6`}>
    <div className="flex justify-center">
      <h2 className={`${styles.heading2} text-primary text-center md:mb-10`}>
        <span className="relative inline-block">
          <span className="z-[1] inline-block relative">Nasza oferta</span>
          <span className="w-[100px] h-2 bg-secondary inline-block absolute -right-2 bottom-5 z-[0]"></span>
        </span>
      </h2>
    </div>

    {offerData.map((offer, index) => (

      <div className={`${index % 2 ? layout.row : layout.rowReverse} my-2 md:my-10`}>
        <div className={`${layout.sectionInfo} ${index % 2 ? 'md:mr-8' : 'md:ml-8'}`}>
          <h3 className="text-[22px] leading-[32px] md:text-[30px] md:leading-[38px] text-primary font-bold mt-4 md:mt-0">
            {offer.h3}
          </h3>
          <p className={`${styles.paragraph} mt-2 md:mt-5 text-primary text-[14px] leading-[26px] text-justify`}>
            {offer.paragraph}
          </p>

        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          <img src={offer.image} alt={offer.alt} />
        </div>
      </div>
    ))}

  </section>
)



export default Offer