import styles, { layout } from "../style";
import Button from "./Button";

const Info = () => (
  <section id="info" className={`${layout.section} bg-white xl:px-0 sm:px-16 px-6`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-primary`}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-primary`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {/* {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))} */}
    </div>
  </section>
)
  


export default Info