import React from 'react'
import PropTypes from 'prop-types'
import Table from '../Table'
import TableBody from '../TableBody'

const CompanyInfo = ({ info }) => (
  <Table>
    <TableBody>
      {info.map((i, index) => (
        <tr key={index}>
          <th>{i.header}</th>
          <td>{i.detail}</td>
        </tr>
      ))}
    </TableBody>
  </Table>
)

CompanyInfo.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    })
  ),
}

export default CompanyInfo
