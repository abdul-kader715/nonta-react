import { Fragment } from 'react'
import HeaderSection from '../../components/HeaderSection/HeaderSection'
import HeroSection from '../../components/HeroSection/HeroSection'
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import ServiceSection from '../../components/ServiceSection/ServiceSection'
import DonatSection from '../../components/DonatSection/DonatSection'
import CausesSection from '../../components/CausesSection/CausesSection'
import TestimonilSection from '../../components/TestimonilSection/TestimonilSection'
import ProjectSection from '../../components/ProjectSection/ProjectSection'
import ProcessSection from '../../components/ProcessSection/ProcessSection'
import ContactSection from '../../components/ContactSection/ContactSection'
import ContactInfoSection from '../../components/ContactInfoSection/ContactInfoSection'
import BlogSection from '../../components/BlogSection/BlogSection'
import CtaSection from '../../components/CtaSection/CtaSection'
import FooterSection from '../../components/FooterSection/FooterSection'



function HomePage() {

    return (
        <Fragment>
            <HeaderSection />
            <HeroSection />
            <FeaturesSection />
            <AboutSection />
            <ServiceSection />
            <DonatSection />
            <CausesSection hClass={'causes_section section_space'} />
            <TestimonilSection />
            <ProjectSection hClass={'project_section'} />
            <ProcessSection />
            <ContactSection hClass={'contact_section'} />
            <ContactInfoSection hClass={'contact_info_section'}/>
            <BlogSection hClass={'blog_section'} />
            <CtaSection hClass={'cta_section'} />
            <FooterSection tClass={'footer_section'} />
        </Fragment>
    )
}

export default HomePage
