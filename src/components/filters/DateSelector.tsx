import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useColorMode } from "@chakra-ui/react";

import "./date-selector.css";
import { SELECTOR_DATE_FORMAT } from "../../lib/constants";

export interface Props {
  date: Date | null;
  onChangeDate: (date: Date | null) => void;
  label: string;
}

const DateSelector = ({ date, onChangeDate, label }: Props) => {
  const isLight = useColorMode().colorMode === "light";
  const dateFormat = `'${label}' ${SELECTOR_DATE_FORMAT}`;
  const minDate = new Date("2005-01-01");
  const maxDate = new Date("2030-12-31");
  return (
    <div className={isLight ? "light-theme" : "dark-theme"}>
      <DatePicker
        id={label}
        dateFormat={dateFormat}
        selected={date}
        onChange={onChangeDate}
        placeholderText={label}
        isClearable
        showPopperArrow={false}
        showMonthDropdown
        showYearDropdown
        minDate={minDate}
        maxDate={maxDate}
        dropdownMode="select"
        className="react-datapicker__input-text"
      />
    </div>
  );
};

export default DateSelector;
