import React from 'react'
import BranchOffice from '../BranchOffice'

const BranchOfficeList = ({ offices }) =>
  offices.map((office, index) => <BranchOffice key={index} {...office} />)

export default BranchOfficeList
