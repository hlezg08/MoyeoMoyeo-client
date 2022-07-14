import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IProductWriteUIProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: any;
  formState: any;
  onChangeContents: (value: string) => void;
  isEdit?: boolean;
  onClickCreateProduct: (data: any) => void;
}
export interface IProductWriteProps {
  isEdit?: boolean;
}