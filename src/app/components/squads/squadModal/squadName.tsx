import Input from "../../ui/input"
import Button from "../../ui/button"

interface ISquadName {
  squadData: Squad, 
  handleNextStep: () => void,
  updateSquadData: (propertey: string, value: string) => void
}

const SquadName: React.FC<ISquadName> = ({squadData, handleNextStep, updateSquadData}) => {
  return (
    <div>
      <div>
        <Input label="What is your Squad Name?" type="text" value={squadData.name} onChange={(e) => updateSquadData('name', e.target.value)} />
      </div>
      <div className="flex justify-end mt-9">
        <Button onClick={handleNextStep} isDisabled={!squadData.name}>Next</Button>
      </div>
    </div>
  )
}

export default SquadName