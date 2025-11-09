import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoCloseCircleOutline } from "react-icons/io5";

const SocialDialog = ({
  isDialogOpen,
  setIsDialogOpen,
  socialMediaOptions,
  selectedOption,
  setSelectedOption,
  onAddFeild,
}) => {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold mb-4">
            Social Media
          </DialogTitle>
        </DialogHeader>

        <button
          onClick={() => {
            setIsDialogOpen(false);
            setSelectedOption('')
          }}
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity text-[24px] cursor-pointer hover:text-primary"
        >
          <IoCloseCircleOutline />
        </button>

        <div className="space-y-6">
          <Select
            value={selectedOption}
            onValueChange={(value) => setSelectedOption(value)}
          >
            <SelectTrigger className="w-full !h-12 text-base">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {socialMediaOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => {
                setIsDialogOpen(false);
                setSelectedOption("");
              }}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-primary cursor-pointer hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => onAddFeild()}
              disabled={!selectedOption}
              className="px-6 py-2 !bg-primary text-white rounded-md hover:bg-transparent cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SocialDialog;
