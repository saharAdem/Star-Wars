import Button from "../../ui/button"

interface ISquadRules {
  handleNextStep: () => void,
}

const SquadRules: React.FC<ISquadRules> = ({ handleNextStep }) => {
  return <div>
    <div className="p-4 border border-gray-300 rounded-md">
      <ul className="list-disc pl-4">
        <li className="mb-2">Create a squad of 3/5 characters</li>
        <li className="mb-2">No 2 squad members can be of same species</li>
      </ul>
    </div>
    <div className="flex justify-end mt-9">
      <Button onClick={handleNextStep}>Next</Button>
    </div>
  </div>
}

export default SquadRules