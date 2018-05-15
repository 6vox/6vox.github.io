import React from 'react'
import Main from '../components/Main'
import Table from '../components/Table'
import TableBody from '../components/TableBody'
import CompanyInfo from '../components/CompanyInfo'
import BranchOffice from '../components/BranchOffice'

const Outline = ({ data }) => (
  <Main id="outline" title="Outline">
    <CompanyInfo info={data.site.siteMetadata.company.info} />
    {data.site.siteMetadata.company.branchOffices.map((office, index) => (
      <BranchOffice key={index} {...office} />
    ))}
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
