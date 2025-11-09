import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TimeSelect = ({ value, onChange }) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="c-md:w-[180px] c-xsm:w-22">
        <SelectValue placeholder="Select Time" />
      </SelectTrigger>
      <SelectContent>
        {Array.from({ length: 24 }).map((_, i) => {
          const hour = i.toString().padStart(2, '0');
          return (
            <SelectItem key={i} value={`${hour}:00`}>
              {hour}:00
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default TimeSelect;
