import Card from "../ui/card";
import CharacterDescriptionItem from "./characterDescriptionItem";
import clsx from "clsx";

interface ICharacterCardProps {
  character: Character,
  isSelected?: boolean,
  onSelect?: (character: Character) => void,
  isDisabled?: boolean,
  className?: string
}

const CharacterCard = ({ character, isSelected, onSelect, isDisabled, className }: ICharacterCardProps) => {
  const {name, height, mass, image} = character
  const handleSelect = () => {
    if (!isDisabled && onSelect) {
      onSelect(character);
    }
  };

  return (
    <div
      className={clsx(
        `m-4 w-40 min-w-fit ${isDisabled ? 'opacity-50 hover:cursor-not-allowed ' : 'hover:cursor-pointer'} ${isSelected ? 'bg-blue-300' : ''}`, 
        className
  )}
      onClick={handleSelect}
    >
      <Card title={name} imageData={{ url: image, width: 250, height: 350 }}>
        <div className="px-6 pb-4">
          <CharacterDescriptionItem propertey="Height" value={height} />
          <CharacterDescriptionItem propertey="mass" value={mass} />
        </div>
      </Card>
      
    </div>
  );
};


export default CharacterCard;
