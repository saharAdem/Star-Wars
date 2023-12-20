interface ICharacterDescriptionItem {
  propertey: string,
  value?: string | number ,
  children?: React.ReactNode 

}

const CharacterDescriptionItem = ({ propertey, value, children }: ICharacterDescriptionItem) =>{
  return (
    <div>
      <span className="font-semibold text-black">{propertey}:</span>
      <span className="ml-2 text-black">{value || children}</span>
    </div>
  )
}

export default CharacterDescriptionItem