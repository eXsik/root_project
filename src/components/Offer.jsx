import { offerData } from "../constants";
import { styles, layout } from '../style';

import { motion } from "framer-motion";

const Offer = () => (
  <section id="offer" className={`${layout.section2} bg-white xl:px-0 sm:px-16 px-3`}>
    <div className="flex justify-center">
      <h2 className={`${styles.heading2} text-primary text-center md:mb-6`}>
        <span className="relative inline-block">
          <span className="z-[1] inline-block relative">Nasza oferta</span>
          <span className="w-[100px] h-2 bg-secondary inline-block absolute -right-2 bottom-4 z-[0]"></span>
        </span>
      </h2>
    </div>

    {offerData.map((offer, index) => (
      <motion.div
        whileInView={{ x: index % 2 ? [-100, 0] : [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        key={`offer-${index}`}
        id={offer.id}
        className={`${index % 2 ? layout.row : layout.rowReverse} my-2 md:my-10`}>
        <div className={`${layout.sectionInfo} ${index % 2 ? 'md:mr-8' : 'md:ml-8'}`}>
          <h3 className="text-[22px] leading-[32px] md:text-[30px] md:leading-[38px] text-primary font-bold mt-4 md:mt-0">
            <span className="relative inline-block">
              <span className="z-[1] inline-block relative">{offer.h3}</span>
              <span className="w-[100px] h-2 bg-secondary inline-block absolute -right-2 bottom-1 z-[0]"></span>
            </span>
          </h3>
          <p
            className={`${styles.paragraph} mt-2 md:mt-5 text-primary !text-[15px] !leading-[22px] text-justify`}
            dangerouslySetInnerHTML={{ __html: offer.paragraph }}>
          </p>
        </div>

        <div className={`${layout.sectionImg} flex-col !justify-start !items-start relative`}>
          <img src={offer.image} alt={offer.alt} className={`z-[1] offer_image object-contain `}/>
          <span className={`w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-secondary inline-block absolute z-[0] ${index % 2 ? '-right-2 -top-2' : '-left-2 -top-2'}`}></span>

        </div>
      </motion.div>
    ))}

  </section>
)



export default Offer