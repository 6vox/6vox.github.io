import React from 'react'
import Main from '../components/Main'
import Title from '../components/Title'
import Contents from '../components/Contents'

const AboutPage = ({ data }) => (
  <Main id="about" title="About">
    <React.Fragment>
      <Title text="About" />
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
