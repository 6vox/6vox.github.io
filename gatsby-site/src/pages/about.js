import React from 'react'
import Main from '../components/Main'
import Contents from '../components/Contents'

const AboutPage = ({ data }) => (
  <Main id="about" title="About">
    <React.Fragment>
      <Contents contents={data.site.siteMetadata.aboutPageContents} />
    </React.Fragment>
  </Main>
)

export default AboutPage

export const query = graphql`
  query aboutPageQuery {
    site {
      siteMetadata {
        aboutPageContents
      }
    }
  }
`
