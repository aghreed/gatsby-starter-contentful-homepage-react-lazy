import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function Homepage(props) {
  const [fakeValue, setFakeValue] = React.useState(false)
  React.useEffect(() => {
    console.log("hey, there ", fakeValue)
    setFakeValue(true)
  }, [])
  const { homepage } = props.data

  const children = React.useMemo(() => {
    {
      homepage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return (
          <React.Suspense fallback={null}>
            <Component key={id} {...componentProps} />
          </React.Suspense>
        )
      })
    }
  }, [homepage])

  return <Layout>{children}</Layout>
}
export const Head = (props) => {
  const { homepage } = props.data
  return <SEOHead {...homepage} />
}
export const query = graphql`
  {
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageHeroContent
        ...HomepageFeatureListContent
        ...HomepageCtaContent
        ...HomepageLogoListContent
        ...HomepageTestimonialListContent
        ...HomepageBenefitListContent
        ...HomepageStatListContent
        ...HomepageProductListContent
      }
    }
  }
`
