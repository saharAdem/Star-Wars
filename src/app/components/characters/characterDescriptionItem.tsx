interface ICharacterDescriptionItem {
  propertey: string,
  value?: string,
  children?: React.ReactNode 

}

const CharacterDescriptionItem = ({ propertey, value, children }: ICharacterDescriptionItem) =>{
  return (
    <div>
      <span className="font-semibold">{propertey}:</span>
      <span className="ml-2">{value || children}</span>
    </div>
  )
}

export default CharacterDescriptionItem