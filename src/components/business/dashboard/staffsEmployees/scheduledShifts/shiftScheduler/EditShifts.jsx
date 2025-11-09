import { Dialog, DialogContent } from "@/components/ui/dialog";
import ShiftRow from "./ShiftRow";

const FULL_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const EditShifts = ({
  isOpen,
  setIsOpen,
  member,
  tempShifts,
  onTimeChange,
  onAddShift,
  onSave,
  onCancel,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className={"c-lg:!max-w-[800px] max-h-[calc(100vh-100px)] overflow-y-auto default-scrollbar c-xsm:!max-w-[96%] font-satoshi"}>
        {/* title  */}
        <div>
          <h3 className="title--sm !font-bold mb-[6px]">
            Set {member?.name}'s repeating shifts
          </h3>
          <p>
            Set weekly, biweekly or custom shifts. Changes saved will apply to
            all upcoming shifts for the selected period.
          </p>
        </div>
        <p className="c-sm:pt-8 c-xsm:pt-2 pb-2 text-base font-bold">Weekly</p>
        {/* shift rows  */}
        <div>
          {FULL_DAYS.map((day) => (
            <ShiftRow
              key={day}
              dayName={day}
              shift={tempShifts[day]}
              onTimeChange={onTimeChange}
              onAddShift={onAddShift}
            />
          ))}
        </div>
        <div className="flex justify-end gap-3 c-md:mt-8 pt-6 border-t border-input">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-input rounded-lg hover:bg-primary duration-200 ease-in-out cursor-pointer hover:text-white"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onSave}
            className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-transparent hover:text-primary flex items-center gap-2 border border-primary duration-200 ease-in-out cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditShifts;
