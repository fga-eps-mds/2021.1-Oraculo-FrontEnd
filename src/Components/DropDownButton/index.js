import DivSelectSetor from "./DivSelectSetor";

const DropDownButton = ({ onChangeOpt }) => {
  return (
    <DivSelectSetor>
      <select onChange={onChangeOpt}>
        <option value="1">Criminal</option>
        <option value="2">Tecnologia</option>
        <option value="3">Administrativo</option>
        <option value="4">civil</option>
      </select>
    </DivSelectSetor>
  );
};

export default DropDownButton;
