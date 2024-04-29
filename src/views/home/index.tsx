import useMediaQuery from "@/hooks/UseMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedbull from "@/assets/SponsorRedBull.png";
import SponsorForber from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* Image and Main Header */}
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="flex md:flex-row flex-col mx-auto w-5/6 items-center justify-center md:h-5/6">
            {/* Main Header */}
            <div className="z-10 order-2 md:order-1 md:mt-32 md:basis-3/5">
                {/* Headings */}
                <motion.div 
                className="md:-mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x:0}
                }}    
                >
                    <div className="relative">
                        <div className="before:absolute hidden md:flex md:flex-col before:-top-20 before:content-evolvetext before:-left-20 before:z-[-1]">
                            {/* <img src={HomePageText} alt="Homepage Text" /> */}
                            <h1 className="text-8xl antialiased font-semibold text-center font-montserrat text-[#F3A007]">EVOGYM</h1>
                            <h3 className="text-3xl antialiased text-center font-regular font-montserrat text-[#AC2A51]">Evolutionary Fitness</h3>
                        </div>
                    </div>
                    <p className="mt-8 text-md text-left">Stay ahead with our cutting-edge Evolutionary Gym! Join us to unlock your full health potential and evolve into your best self.</p>
                </motion.div>
                {/* Actions buttons */}
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                transition={{delay: 0.2, duration:0.5}}
                variants={{
                    hidden: {opacity: 0, x:-50},
                    visible: {opacity: 1, x:0}
                }}
                className="mt-8 flex items-center gap-8">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Fazer Parte
                    </ActionButton>
                    <AnchorLink
                    className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Saiba Mais</p>
                    </AnchorLink>
                </motion.div>
            </div>
            {/* Image */}
            <div className="flex basis-3/5 mt-10 order-1 md:order-1 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img src={HomePageGraphic} alt="Homepage Graphic" />
            </div>
        </motion.div>
        {/* Sponsors */}
        {isAboveMediumScreens && (
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img src={SponsorRedbull} alt="Redbull Sponsor" />
                        <img src={SponsorForber} alt="Forbes Sponsor" />
                        <img src={SponsorFortune} alt="Fortune Sponsor" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home