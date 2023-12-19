'use client'
import { useState } from "react";

import Button from "../../ui/button"
import CustomModal from "../../ui/modal";
import SquadName from "./squadName";
import TeamNumbers from "./teamNumbers";
import SquadCharacters from "./squadCharacters";

interface ICreateSquadModalProps {
  speciesPeople: SpeciesCharacters
}

const CreateSquadModal: React.FC<ICreateSquadModalProps> = ({ speciesPeople }) => {
  const [isOpenSquadModal, setIsOpenSquadModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1)
  const [squadData, setSquadData] = useState<Squad>({ teamNumber: 0, characters: [], name: '', id: '' })

  const openSquadModal = () => {
    setIsOpenSquadModal(true);
  };

  const closeSquadModal = () => {
    setIsOpenSquadModal(false);
    setCurrentStep(1)
    setSquadData({ teamNumber: 0, characters: [], name: '', id: '' })
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const updateSquadData = (propertey: string, value: string | number | Characters) => {
    setSquadData({ ...squadData, [propertey]: value })
  }

  return (
    <div>
      <Button onClick={openSquadModal}>Creat Squad</Button>
      {
        isOpenSquadModal &&
          <CustomModal
          isOpen={isOpenSquadModal}
          closeModal={closeSquadModal}
          title="Create Squad"
          className="max-w-5xl flex"
        >

        {currentStep === 1 && <SquadName squadData={squadData} handleNextStep={handleNextStep} updateSquadData={updateSquadData} />}
        {currentStep === 2 && <TeamNumbers squadData={squadData} handleNextStep={handleNextStep} updateSquadData={updateSquadData} />}
        {currentStep === 3 && <SquadCharacters speciesPeople={speciesPeople} squadData={squadData} updateSquadData={updateSquadData} closeSquadModal={closeSquadModal}/>}


        </CustomModal>
      }
    </div>
  )
}

export default CreateSquadModal