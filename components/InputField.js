import Button from "./Button";

const InputField = ({
  value,
  id,
  children,
  name,
  onChange,
  checked,
  onDelete,
}) => {
  return (
    <>
      <label aria-label={name} htmlFor={name}>
        {children}
        <input
          type='radio'
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          name={name}
          checked={checked}
        />
      </label>
      <Button type='button' onClick={onDelete}>
        X
      </Button>
    </>
  );
};

export default InputField;
