'use client'
import { useState } from "react";

import Button from "../../ui/button"
import CustomModal from "../../ui/modal";
import SquadName from "./squadName";
import TeamNumbers from "./teamNumbers";
import SquadCharacters from "./squadCharacters";

interface ICreateSquadModalProps {
  speciesPeople: SpeciesCharacters,
  editedSquadData?: Squad
}

const CreateSquadModal: React.FC<ICreateSquadModalProps> = ({ speciesPeople, editedSquadData }) => {
  const [isOpenSquadModal, setIsOpenSquadModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1)
  const [squadData, setSquadData] = useState<Squad>({
    teamNumber: editedSquadData?.teamNumber ?? 0,
    characters: editedSquadData?.characters ?? [],
    name: editedSquadData?.name ?? '',
    id: editedSquadData?.id ?? '',
  });

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
      <Button onClick={openSquadModal}>{editedSquadData ? 'Edit' : 'Creat'} Squad</Button>
      {
        isOpenSquadModal &&
        <CustomModal
          isOpen={isOpenSquadModal}
          closeModal={closeSquadModal}
          title={`${editedSquadData ? 'Edit' : 'Create'} Squad`}
          className="max-w-5xl flex"
        >

        {currentStep === 1 && <SquadName squadData={squadData} handleNextStep={handleNextStep} updateSquadData={updateSquadData} />}
        {currentStep === 2 && <TeamNumbers squadData={squadData} handleNextStep={handleNextStep} updateSquadData={updateSquadData} />}
        {currentStep === 3 && <SquadCharacters speciesPeople={speciesPeople} squadData={squadData} updateSquadData={updateSquadData} closeSquadModal={closeSquadModal} editedSquadData={editedSquadData} />}


        </CustomModal>
      }
    </div>
  )
}

export default CreateSquadModal