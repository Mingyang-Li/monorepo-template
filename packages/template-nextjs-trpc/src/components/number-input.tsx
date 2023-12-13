// Prefer declaring prop type right above component
export type NumberInputProps = {
  fieldName: string;
  label: string;
  defaultValue?: number;
  placeholder?: number;
};
// Prefer ES6 `const` syntax over `function` syntax
// Prefer NOT destructuring props before function execution
// Prefer inferring type definition using type alis over in-line type
// Prefer named export over default export
export const NumberInput = (props: NumberInputProps) => {
  const { label } = props;
  return (
    <>
      <label>{label}</label>
      <input type={'number'} />
    </>
  );
};
