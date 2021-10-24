import React, {useState} from 'react'
import styled from 'styled-components'
import { Button } from '@gnosis.pm/safe-react-components'
import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk'
import {NewOwnerModal} from "../NewOwnerModal/NewOwnerModal"
import {PolityModal} from "../PolityModal/PolityModal"

import './App.scss';

const Container = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const customStyles = {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
};

const App = (): React.ReactElement => {
  const { safe } = useSafeAppsSDK()
  const [isModalOwnerOpened, setIsModalOwnerOpened] = useState(false);
  const [isModalPolityOpened, setIsModalPolityOpened] = useState(false);

  const handleOpenOwnerModal = () => {
    setIsModalOwnerOpened(true);
  }
  const handleCloseOwnerModal = () => {
    setIsModalOwnerOpened(false);
  }

  const handleOpenPolityModal = () => {
    setIsModalPolityOpened(true);
  }
  const handleClosePolityModal = () => {
    setIsModalPolityOpened(false);
  }

  console.log(safe)

  return (
    <Container className="app">
      <Button size="lg" color="primary" onClick={handleOpenOwnerModal} className="button">
        Add new owner
      </Button>

      <Button size="lg" color="primary" onClick={handleOpenPolityModal} className="button">
        See polity
      </Button>

      <NewOwnerModal isModalOpened={isModalOwnerOpened} onClose={handleCloseOwnerModal} style={customStyles} />

      <PolityModal isModalOpened={isModalPolityOpened} onClose={handleClosePolityModal} style={customStyles} />
    </Container>
  )
}

export default App
