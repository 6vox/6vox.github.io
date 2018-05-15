import React from 'react'
import Main from '../components/Main'
import Table from '../components/Table'
import TableBody from '../components/TableBody'
import CompanyInfo from '../components/CompanyInfo'
import BranchOfficeList from '../components/BranchOfficeList'

const Outline = ({ data }) => (
  <Main id="outline" title="Outline">
    <CompanyInfo info={data.site.siteMetadata.company.info} />
    <BranchOfficeList offices={data.site.siteMetadata.company.branchOffices} />
  </Main>
)

export default Outline

export const query = graphql`
  query companyQuery {
    site {
      siteMetadata {
        company {
          info {
            header
            detail
          }
          branchOffices {
            name
            members
            address
            mapUrl
          }
        }
      }
    }
  }
`
