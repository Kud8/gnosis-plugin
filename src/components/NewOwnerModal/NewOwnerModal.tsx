import React, {useEffect, useState} from 'react'
import {Modal, Input} from "@material-ui/core";
import './NewOwnerModal.scss';
import {Button} from "@gnosis.pm/safe-react-components";
import {addNotification} from "../../utils/notifications";
import {getShortAddress} from "../../tests/wallet";

interface NewOwnerModalProps {
  isModalOpened: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
}
export const NewOwnerModal = ({isModalOpened, onClose, style}: NewOwnerModalProps) => {
  const [ownerName, setOwnerName] = useState<string | null>(null);
  const [ownerAddress, setOwnerAddress] = useState<string | null>(null);
  const [ownerWeight, setOwnerWeight] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAded] = useState(false);

  const updateOwnerName = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setOwnerName(e.target.value);
  }
  const updateOwnerAddress = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setOwnerAddress(e.target.value);
  }
  const updateOwnerWeight = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setOwnerWeight(+e.target.value);
  }

  const handleAddNewOwner = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      setIsAded(true);
    }, 2000);
  }

  useEffect(() => {
    if (isAdded) {
      addNotification("Owner added", "success", `Owner with address ${getShortAddress(ownerAddress)} successfully added`);
      onClose();
    }
  }, [isAdded]);

  if (!isModalOpened) {
    return null;
  }

  return (
    <Modal
      open={isModalOpened}
      onClose={onClose}
      style={style}
    >
      <div className="new-owner-modal">
        <div className="header">
          <div>Add new owner</div>
          <div className="close-button" onClick={onClose}>X</div>
        </div>
        <div className="content">
          <Input
            className="input"
            name="ownerName"
            placeholder="Owner name"
            type="text"
            value={ownerName}
            onChange={updateOwnerName}
          />
          <Input
            className="input"
            name="ownerAddress"
            placeholder="Owner address"
            type="text"
            value={ownerAddress}
            onChange={updateOwnerAddress}
          />
          <Input
            className="input"
            name="ownerWeight"
            placeholder="Owner weight"
            type="number"
            value={ownerWeight}
            onChange={updateOwnerWeight}
          />
        </div>
        <div className="footer">
          <Button size="lg" color="primary" onClick={handleAddNewOwner} disabled={isAdding}>
            {isAdding ? 'Pending...' : 'Add'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}