import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

const SUSPENSE_CONFIG = {
  timeoutMs: 4000,
}

export default function Homepage(props) {
  const [fakeValue, setFakeValue] = React.useState(false)
  const [isPending, startTransition] = React.useTransition(SUSPENSE_CONFIG)

  React.useEffect(() => {
    console.log("hey, there ", fakeValue)
    startTransition(() => setFakeValue(true))
  }, [])
  const { homepage } = props.data

  return (
    <Layout>
      {homepage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return (
          <React.Suspense fallback={null}>
            <Component key={id} {...componentProps} />
          </React.Suspense>
        )
      })}
    </Layout>
  )
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
