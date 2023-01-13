import React from "react"

export const HomepageHero = React.lazy(() => import("./hero"))
export const HomepageFeatureList = React.lazy(() => import("./feature-list"))
export const HomepageLogoList = React.lazy(() => import("./logo-list"))
export const HomepageBenefitList = React.lazy(() => import("./benefit-list"))
export const HomepageTestimonialList = React.lazy(() =>
  import("./testimonial-list")
)
export const HomepageStatList = React.lazy(() => import("./stat-list"))
export const HomepageCta = React.lazy(() => import("./cta"))
export const HomepageProductList = React.lazy(() => import("./product-list"))
export const AboutHero = React.lazy(() => import("./about-hero"))
export const AboutStatList = React.lazy(() => import("./about-stat-list"))
export const AboutLeadership = React.lazy(() => import("./about-leadership"))
export const AboutLogoList = React.lazy(() => import("./about-logo-list"))
