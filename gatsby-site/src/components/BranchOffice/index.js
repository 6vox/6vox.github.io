import React from 'react'
import PropTypes from 'prop-types'
import SubTitle from '../SubTitle'
import Small from '../Small'
import Table from '../Table'
import TableBody from '../TableBody'
import LinkAddress from '../LinkAddress'

const BranchOffice = ({ name, members, address, mapUrl }) => (
  <React.Fragment>
    <SubTitle title={name}>
      <Small text={members} />
    </SubTitle>
    <Table>
      <TableBody>
        <tr>
          <th>所在地</th>
          <td>
            <LinkAddress address={address} url={mapUrl} />
          </td>
        </tr>
      </TableBody>
    </Table>
  </React.Fragment>
)

BranchOffice.propTypes = {
  name: PropTypes.string.isRequired,
  members: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  mapUrl: PropTypes.string.isRequired,
}

export default BranchOffice
