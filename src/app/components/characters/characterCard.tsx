import Card from "../ui/card";
import CharacterDescriptionItem from "./characterDescriptionItem";

interface ICharacterCardProps {
  character: Character,
  isSelected?: boolean,
  onSelect?: (character: Character) => void,
  isDisabled?: boolean
}

const CharacterCard = ({ character, isSelected, onSelect, isDisabled }: ICharacterCardProps) => {
  const {name, height, mass} = character
  const handleSelect = () => {
    if (!isDisabled && onSelect) {
      onSelect(character);
    }
  };

  return (
    <div
      className={`${isDisabled ? 'opacity-50 hover:cursor-not-allowed ' : 'hover:cursor-pointer'} ${isSelected ? 'bg-blue-300' : ''}`}
      onClick={handleSelect}
    >
      <Card title={name}>
        <CharacterDescriptionItem propertey="Height" value={height} />
        <CharacterDescriptionItem propertey="mass" value={mass} />
      </Card>
      
    </div>
  );
};


export default CharacterCard;
