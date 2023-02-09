const styles = {
  boxWidth: "xl:max-w-[1480px] w-full",

  heading2: "font-poppins font-semibold text-[30px] xs:text-[40px] text-white leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[16px] leading-[24px] md:text-[18px] md:leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexEnd: "flex justify-center items-end",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  paddingY2: "sm:py-24 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex flex-col ${styles.paddingY}`,
  section2: `flex flex-col ${styles.paddingY2}`,
  sectionReverse: `flex row flex-col-reverse ${styles.paddingY}`,

  row: `flex flex-col-reverse md:flex-row`,
  rowReverse: `flex flex-col-reverse md:flex-row-reverse`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} ml-0 md:mt-0 mt-4 relative`,

  sectionInfo: `flex-1 flex-col`,
};

export default styles;