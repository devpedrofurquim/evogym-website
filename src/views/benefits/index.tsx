import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto beatae ducimus dolore odit officia sequi, facere deleniti maxime dignissimos libero aliquid. Inventore fuga amet dolorem itaque. Veritatis sapiente ut rem?"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto beatae ducimus dolore odit officia sequi, facere deleniti maxime dignissimos libero aliquid. Inventore fuga amet dolorem itaque. Veritatis sapiente ut rem?"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto beatae ducimus dolore odit officia sequi, facere deleniti maxime dignissimos libero aliquid. Inventore fuga amet dolorem itaque. Veritatis sapiente ut rem?"
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (valus: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id={SelectedPage.Benefits}
    className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            className=""
        >
            {/* Header Section */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity: 1, x:0}
            }}    
            className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, corrupti? Minima dolore obcaecati accusamus est? Culpa optio cum maiores accusamus dolorum at placeat iusto mollitia, sequi quaerat labore commodi unde.
                </p>
            </motion.div>

            {/* `Benefits Section */}
            <motion.div className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/* Graphics and Description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* Graphic */}
                <img 
                className="mx-auto"
                src={BenefitsPageGraphic} alt="Benefits Page Graphic" />

                {/* Description */}
                <div>
                    {/* Title */}
                    <div>
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x:50},
                                visible: {opacity: 1, x:0}
                            }}    
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">
                                        FIT
                                    </span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* Description */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x:50},
                        visible: {opacity: 1, x:0}
                    }}    
                    >
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum inventore error, totam in cupiditate, repudiandae labore aspernatur saepe, ea sit accusamus corporis placeat ab iste? Perspiciatis natus aspernatur ut.
                        Commodi, explicabo temporibus architecto facilis libero, voluptas necessitatibus inventore ipsa earum autem ea illum, quod impedit sapiente iusto dolores eligendi in numquam officia quo. Omnis quasi accusamus distinctio atque magni?
                        Blanditiis, vero dolorum quam consectetur fugit saepe libero ad, debitis ratione quae nobis fuga suscipit autem laboriosam molestias quos nam at alias atque hic tempore veniam? Tempora, vero rerum. Dolor.
                        Quam dolor deserunt vero totam obcaecati! Labore ipsam nostrum voluptatibus quasi in, saepe repellendus suscipit ad dolor officia nesciunt corporis nihil, dignissimos aliquid mollitia voluptates illum fugiat. Blanditiis, nam nobis?</p>
                        <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis quam modi molestias eligendi ducimus distinctio nesciunt fuga sapiente explicabo aperiam corrupti, iste doloribus, consequuntur vitae, dolorem atque ad commodi hic.
                        Sequi quidem ipsum est, corrupti blanditiis, mollitia asperiores perspiciatis dolore consectetur libero qui fugit nobis magnam tempora ex numquam tenetur ab commodi sit eligendi odit nihil dolorem culpa! Ex, qui.</p>
                    </motion.div>
                    {/* Button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits