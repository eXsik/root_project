import styles, { layout } from "../style";
import FsLightbox from "fslightbox-react";

import { motion } from "framer-motion";
import { useState } from "react";
import { projectsData } from "../constants";

const Projects = () => {
  const [togglerHeatPump, setTogglerHeatPump] = useState(false);
  const [togglerPhotovoltaics, setTogglerPhotovoltaics] = useState(false);
  const [togglerPlumbers, setTogglerPlumbers] = useState(false);
  const [togglerElectrics, setTogglerElectrics] = useState(false);
  const [togglerInterior, setTogglerInterior] = useState(false);

  return (
    <section id="projects" className={`${layout.section} xl:px-0 sm:px-16 px-3`}>
      <div className="flex justify-center">
        <h2 className={`${styles.heading2} text-primary text-center md:mb-6`}>
          <span className="relative inline-block">
            <span className="z-[1] inline-block relative text-primary">Nasze realizacje</span>
            <span className="w-[100px] h-2 bg-secondary inline-block absolute -right-2 bottom-4 z-[0]"></span>
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
          <div>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              id={projectsData[0].id}
              className={`${layout.row} mt-2 md:mt-10`}>
              <div className={`${layout.sectionImg} flex-col !justify-start !items-start relative overflow-hidden`}>
                <img
                  src={projectsData[0].images[0]}
                  className={`z-[1] offer_image object-contain w-full h-auto transition cursor-pointer hover:scale-105 ease-in-out duration-300`}
                  onClick={ () => setTogglerHeatPump(!togglerHeatPump)}
                />
                <span className={`w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-secondary inline-block absolute z-[0] -left-2 -top-2`}></span>
              </div>
            </motion.div>

            <motion.div>
              <p className="bg-primary text-white p-4 font-bold">{projectsData[0].paragraph}</p>
            </motion.div>

            <FsLightbox
              toggler={togglerHeatPump}
              sources={projectsData[0].images}
            />
          </div>
          <div>
            <motion.div
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              id={projectsData[1].id}
              className={`${layout.rowReverse} mt-2 md:mt-10`}
              >
              <div className={`${layout.sectionImg} flex-col !justify-start !items-start relative overflow-hidden`}>
                <img
                  src={projectsData[1].images[0]}
                  className={`z-[1] offer_image object-contain w-full h-auto transition cursor-pointer hover:scale-105 ease-in-out duration-300`}
                  onClick={() => setTogglerPhotovoltaics(!togglerPhotovoltaics)}
                />
                <span className={`w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-secondary inline-block absolute z-[0] -right-2 -top-2`}></span>
              </div>
            </motion.div>

            <motion.div>
              <p className="bg-primary text-white p-4 font-bold">{projectsData[1].paragraph}</p>
            </motion.div>

            <FsLightbox
              toggler={togglerPhotovoltaics}
              sources={projectsData[1].images}
            />
          </div>
          <div>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              id={projectsData[2].id}
              className={`${layout.row} mt-2 md:mt-10`}>
              <div className={`${layout.sectionImg} flex-col !justify-start !items-start relative overflow-hidden`}>
                <img
                  src={projectsData[2].images[0]}
                  className={`z-[1] offer_image object-contain w-full h-auto transition cursor-pointer hover:scale-105 ease-in-out duration-300`}
                  onClick={ () => setTogglerPlumbers(!togglerPlumbers)}
                />
                <span className={`w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-secondary inline-block absolute z-[0] -left-2 -top-2`}></span>
              </div>
            </motion.div>

            <motion.div>
              <p className="bg-primary text-white p-4 font-bold">{projectsData[2].paragraph}</p>
            </motion.div>

            <FsLightbox
              toggler={togglerPlumbers}
              sources={projectsData[2].images}
            />
          </div>
          <div>
            <motion.div
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              id={projectsData[3].id}
              className={`${layout.rowReverse} mt-2 md:mt-10`}
              >
              <div className={`${layout.sectionImg} flex-col !justify-start !items-start relative overflow-hidden`}>
                <img
                  src={projectsData[3].images[0]}
                  className={`z-[1] offer_image object-contain w-full h-auto transition cursor-pointer hover:scale-105 ease-in duration-300`}
                  onClick={() => setTogglerElectrics(!togglerElectrics)}
                />
                <span className={`w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-secondary inline-block absolute z-[0] -right-2 -top-2`}></span>
              </div>
            </motion.div>

            <motion.div>
              <p className="bg-primary text-white p-4 font-bold">{projectsData[3].paragraph}</p>
            </motion.div>

            <FsLightbox
              toggler={togglerElectrics}
              sources={projectsData[3].images}
            />
          </div>
          <div>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
              id={projectsData[4].id}
              className={`${layout.row} mt-2 md:mt-10`}>
              <div className={`${layout.sectionImg} flex-col !justify-start !items-start relative overflow-hidden`}>
                <img
                  src={projectsData[4].images[0]}
                  className={`z-[1] offer_image object-contain w-full h-auto transition cursor-pointer hover:scale-105 ease-in-out duration-300`}
                  onClick={ () => setTogglerInterior(!togglerInterior)}
                />
                <span className={`w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-secondary inline-block absolute z-[0] -left-2 -top-2`}></span>
              </div>
            </motion.div>

            <motion.div>
              <p className="bg-primary text-white p-4 font-bold">{projectsData[4].paragraph}</p>
            </motion.div>

            <FsLightbox
              toggler={togglerInterior}
              sources={projectsData[4].images}
            />
          </div>
      </div>
    </section>
  )
}



export default Projects