import React from 'react'
import {Modal, Table, TableCell, TableBody, TableContainer, TableRow, TableHead, Paper} from "@material-ui/core";
import './PolityModal.scss';

interface NewOwnerModalProps {
  isModalOpened: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
}

const defaultPolity = [
  { address: '0xb79EbAa162f92A3E5B8E0CE3446e8b4a4E5C0A4B', weight: 2 },
  { address: '0xCE7470bbC1ab5FE2EdD3c4df8B136b8ba4686348', weight: 3 },
  { address: '0xF48dD0A23E0B8953F3b1b11931cD32D04127D822', weight: 4 },
];

export const PolityModal = ({isModalOpened, onClose, style}: NewOwnerModalProps) => {
  if (!isModalOpened) {
    return null;
  }


  return (
    <Modal
      open={isModalOpened}
      onClose={onClose}
      style={style}
    >
      <div className="polity-modal">
        <div className="header">
          <div>Polity</div>
          <div className="close-button" onClick={onClose}>X</div>
        </div>
        <div className="content">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">№</TableCell>
                  <TableCell align="left">Address</TableCell>
                  <TableCell align="left">Weight</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {defaultPolity.map((polity, i) => (
                  <TableRow key={polity.address}>
                    <TableCell align="left">{i + 1}</TableCell>
                    <TableCell align="left">{polity.address}</TableCell>
                    <TableCell align="left">{polity.weight}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Modal>
  )
}