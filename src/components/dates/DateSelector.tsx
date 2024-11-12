import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useColorMode } from "@chakra-ui/react";

import "./date-selector.css";

export interface Props {
  date: Date | null;
  onChangeDate: (date: Date | null) => void;
  label: string
}

const DateSelector = ({ date, onChangeDate, label }: Props) => {
  const isLight = useColorMode().colorMode === "light";
  const dateFormat = `'${label}' MMMM do, yyyy`;
  return (
    <div className={isLight ? "light-theme" : "dark-theme"}>
      <DatePicker
        dateFormat={dateFormat}
        selected={date}
        onChange={onChangeDate}
        placeholderText={label}
        isClearable
        showPopperArrow={false}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        className="react-datapicker__input-text"
      />
    </div>
  );
};

export default DateSelector;
