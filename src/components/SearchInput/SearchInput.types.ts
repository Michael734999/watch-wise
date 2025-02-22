export interface SearchInputProps {
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}
