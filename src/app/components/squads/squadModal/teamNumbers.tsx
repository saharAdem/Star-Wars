import Button from "../../ui/button"

interface ITeamNumbers {
  squadData: Squad,
  handleNextStep: () => void,
  updateSquadData: (propertey: string, value: number) => void
}

const TeamNumbers: React.FC<ITeamNumbers> = ({ squadData, updateSquadData, handleNextStep }) => {
  const allowableteamNumbers = [3,4,5]

  const handleUpdateTeamNumber = (teamNumber: number) =>{{
    updateSquadData('teamNumber', teamNumber)
  }}

  return(
    <div>
      <div>
        <p>How many heroes do you want?</p>
      </div>
      <div className="flex items-center justify-center my-4">
        {
          allowableteamNumbers.map((number) => {
            const selectedTeamNumber = squadData.teamNumber
            return (<Button
              key={number}
              onClick={() =>handleUpdateTeamNumber(number)}
              isSelected={selectedTeamNumber === number}
              className={`w-8 h-8 mx-4 flex items-center justify-center font-bold rounded-full cursor-pointer`}
            >
              {number}
            </Button>
            )
          })
        }
      </div>
      <div className="flex justify-end mt-9">
        <Button onClick={handleNextStep} isDisabled={!squadData.teamNumber}>Next</Button>
      </div>
    </div>
  )
}

export default TeamNumbers