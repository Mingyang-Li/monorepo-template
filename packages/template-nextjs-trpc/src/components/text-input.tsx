// Prefer declaring prop type right above component
export type TextInputProps = {
  fieldName: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
};
// Prefer ES6 `const` syntax over `function` syntax
// Prefer NOT destructuring props before function execution
// Prefer inferring type definition using type alis over in-line type
// Prefer named export over default export
export const TextInput = (props: TextInputProps) => {
  const { label } = props;
  return (
    <>
      <label>{label}</label>
      <input type={'text'} />
    </>
  );
};
