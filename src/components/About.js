import React from "react";
//countup
import CountUp from "react-countup";
// intersection observer
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//image
import aboutImg from "../assets/about.png"

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto lg:gap-y-5">
        <div>
          <div className="flex-1 bg-contain bg-no-repeat h-[640p] mix-blend-lighten bg-top"><img src={aboutImg} alt=""/></div>
          <div className="flex-1">
            <h2 className="h2 text-accent">Sobre mi:</h2>
            <h3 className="h3 mb-4">
              soy un desarrollador fullstack listo para incomporarme a su equipo
              de trabajo!
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              tempora odit quis saepe ut mollitia eos dolores nobis ea nulla!
              Animi odio tempora nisi atque odit ea numquam necessitatibus
              ullam?
            </p>

            <div className="grid gap-y-12 gap-x-10 items-center justify-center lg:flex lg:flex-row lg:items-center lg:gap-x-25 mt-20 lg:justify-between">
              <div className="flex flex-row gap-10">
                {/*AÑOS DE EXP 1*/}
                <div className="flex text-[40px] font-tertiary text-gradient mb-2 sm:">
                  {inView ? <CountUp start={0} end={10} duration={3}/> : null}
                </div>
                <div className="font-primary text-sm trackin-[2px]">
                  Años de <br />
                  experiencia
                </div>
              </div>
              <div className="flex flex-row gap-10">
                {/*AÑOS DE EX 2*/}
                <div className="text-[40px] font-tertiary text-gradient mb-5">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm trackin-[2px]">
                  Horas de estudio <br />
                  Certificadas
                </div>
              </div>
              <div className="flex flex-row gap-10">
                {/*AÑOS DE EXP 3*/}
                <div className="text-[40px] font-tertiary text-gradient mb-5">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm trackin-[2px]">
                  Proyectos <br />
                  Completados
                </div>
              </div>
              <div className="flex md:gap-x-40 lg:gap-x-3 mx-10 items-center justify-around">
                <a href="mailto:tomasriera2@gmail.com?subject=Contratacion">
                  <button className="btn btn-lg">Contactame</button>
                </a>
                <a href="" className="text-gradient btn-link ml-8">Mi Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
