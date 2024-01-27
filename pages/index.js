import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from '~sections/it/Hero'
import ServicesSection from '~sections/it/Services'
import AboutSection from '~sections/services/About'
import ContentSectionOne from '~sections/it/ContentOne'
import ProcessSection from '~sections/services/Process'
import PromoSection from '~sections/services/Promo'
import PricingSection from '~sections/services/Pricing'
import TestimonialSection from '~sections/app/Testimonial'
import ContactSection from '~sections/it/Contact'
import FooterThree from '~sections/it/FooterThree'
import HeaderButton from '~sections/services/Header'

const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--with-border site-header--sticky",
  containerFluid:false,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnText="Purchase"
      mr="15px"
      mrLG="0"
    />
  ),
}

export default function Services() {
  return (
    <PageWrapper headerConfig={header}>
      {/*<HeroSection/>*/}
      {/*<ServicesSection/>*/}
      {/*<AboutSection/>*/}
      {/*<ContentSectionOne/>*/}
      <ProcessSection/>
      {/*<PromoSection/>*/}
      {/*<PricingSection/>*/}
      <TestimonialSection/>
      <ContactSection/>
    <FooterThree/>
    </PageWrapper>
  )
}
