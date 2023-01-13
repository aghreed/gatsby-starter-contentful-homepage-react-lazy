import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

const Block = React.memo(({ block }) => {
  const { id, blocktype, ...componentProps } = block
  const Component = sections[blocktype] || Fallback
  console.log("rendering block: ", blocktype)
  return (
    <React.Suspense fallback={`Loading... ${blocktype}`}>
      <Component key={id} {...componentProps} />
    </React.Suspense>
  )
})

export default function Homepage(props) {
  const [fakeValue, setFakeValue] = React.useState(false)
  React.useEffect(() => {
    console.log("hey, there ", fakeValue)
    setFakeValue(true)
  }, [])
  const { homepage } = props.data

  return (
    <Layout>
      {homepage.blocks.map((block) => (
        <Block block={block} />
      ))}
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
