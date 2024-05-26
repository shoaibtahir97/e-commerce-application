import { Label, Select } from "flowbite-react";

interface SelectComponentProps {
  options: any[];
  label: string;
}

export function SelectComponent(props: SelectComponentProps) {
  const { options, label } = props;
  return (
    <div className="w-24 min-h-14 ">
      <div className="mb-2 block">
        <Label htmlFor="count" value={label} />
      </div>
      <div className="">
        <Select id="count" required>
          {options.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </Select>
      </div>
    </div>
  );
}
