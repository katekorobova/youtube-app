import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useColorMode } from "@chakra-ui/react";

import "./date-selector.css";
import { DATE_FORMAT } from "../../lib/constants";
import moment from "moment";

export interface Props {
  date?: Date;
  onChangeDate: (date?: Date) => void;
  label: string;
}

const DateSelector = ({ date, onChangeDate, label }: Props) => {
  const isLight = useColorMode().colorMode === "light";
  const dateFormat = `[${label}] ${DATE_FORMAT}`;
  const minDate = new Date("2005-01-01");
  const maxDate = new Date("2030-12-31");

  return (
    <div className={isLight ? "light-theme" : "dark-theme"}>
      <DatePicker
        id={label}
        value={date ? moment(date).format(dateFormat) : undefined}
        // dateFormat={dateFormat}
        selected={date}
        onChange={(date) => onChangeDate(date || undefined)}
        placeholderText={label}
        isClearable
        showPopperArrow={false}
        showMonthDropdown
        showYearDropdown
        minDate={minDate}
        maxDate={maxDate}
        dropdownMode="select"
        className="react-datapicker__input-text"
        autoComplete="off"
      />
    </div>
  );
};

export default DateSelector;
