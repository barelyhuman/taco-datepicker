import React, { useEffect, useState } from "react";

import {
  isDateOfISODay,
  getNumberOfDays,
  createDateObject,
  isDateSelected,
} from "./utils/date.js";

import chunk from "./utils/chunk.js";

const MONTHMAP = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAYMAP = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Datepicker({ value: inputValue, onChange, ...props }) {
  const [value, setValue] = useState(inputValue || new Date());
  const [currentMonth, setCurrentMonth] = useState();
  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (!value) {
      return;
    }
    const dateObject = createDateObject(value);
    setCurrentMonth(dateObject.month);
    setCurrentYear(dateObject.year);
  }, [value]);

  const handleOnChange = (date) => {
    onChange && onChange(createDateObject(date));
  };

  const handleSelectDate = (year, month, day) => {
    const dateConst = new Date(year, month, day);
    handleOnChange(dateConst);
    setValue(dateConst);
  };

  const handleNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  const handlePrevYear = () => {
    if (currentYear - 1 <= 0) {
      return;
    }
    setCurrentYear(currentYear - 1);
  };

  const handleNextMonth = () => {
    MONTHMAP[currentMonth + 1]
      ? setCurrentMonth(currentMonth + 1)
      : setCurrentMonth(0);
  };

  const handlePrevMonth = () => {
    MONTHMAP[currentMonth - 1]
      ? setCurrentMonth(currentMonth - 1)
      : setCurrentMonth(MONTHMAP.length - 1);
  };

  const handleGoTo = (date) => {
    handleOnChange(date);
    setValue(date);
  };

  const numberOfDaysInMonth = getNumberOfDays(currentYear, currentMonth);
  let startingISO = 0;
  for (let i = 0; i < 7; i += 1) {
    const isExpectedISO = isDateOfISODay(currentYear, currentMonth, 1, i);
    if (isExpectedISO) {
      startingISO = i;
    }
  }

  const padding = Array.from(Array(startingISO)).fill(0);
  let daysWithOffset = [
    ...padding,
    ...Array.from(Array(numberOfDaysInMonth), (x, i) => i + 1),
  ];
  daysWithOffset = chunk(daysWithOffset, 7);

  return (
    <>
      <div className="taco-datepicker--container">
        <div className="taco-datepicker--row">
          <div className="taco-datepicker--month-box" onClick={handlePrevYear}>
            {currentYear - 1}
          </div>
          <div className="taco-datepicker--month-box active">{currentYear}</div>
          <div className="taco-datepicker--month-box" onClick={handleNextYear}>
            {currentYear + 1}
          </div>
          <div className="taco-datepicker--month-box" onClick={handlePrevMonth}>
            {MONTHMAP[currentMonth - 1]
              ? MONTHMAP[currentMonth - 1]
              : MONTHMAP[MONTHMAP.length - 1]}
          </div>
          <div className="taco-datepicker--month-box active">
            {MONTHMAP[currentMonth]}
          </div>
          <div className="taco-datepicker--month-box" onClick={handleNextMonth}>
            {MONTHMAP[currentMonth + 1]
              ? MONTHMAP[currentMonth + 1]
              : MONTHMAP[0]}
          </div>
        </div>
        <div className="taco-datepicker--row">
          {DAYMAP.map((item, index) => {
            return (
              <div
                key={`day-label-${index}`}
                className="taco-datepicker--day-box secondary"
              >
                {item}
              </div>
            );
          })}
        </div>
        <div>
          {daysWithOffset.map((dateItems, index) => {
            return (
              <React.Fragment key={`day-row-${index}`}>
                <div className="taco-datepicker--row">
                  {dateItems.map((dayItem, dayIndex) => {
                    const isToday = isDateSelected(
                      new Date(),
                      currentYear,
                      currentMonth,
                      dayItem
                    );
                    const isSelected = isDateSelected(
                      value,
                      currentYear,
                      currentMonth,
                      dayItem
                    );
                    const classNames = `taco-datepicker--day-box ${
                      isToday ? "today" : ""
                    } ${isSelected ? "selected" : ""}`;
                    return (
                      <div
                        key={`day-item-${dayIndex}`}
                        className={classNames}
                        onClick={() => {
                          handleSelectDate(currentYear, currentMonth, dayItem);
                        }}
                      >
                        {" "}
                        {dayItem === 0 ? "" : dayItem}
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="taco-datepicker--spacer"></div>
        <div className="taco-datepicker--row">
          <button
            onClick={(e) => handleGoTo(new Date())}
            className="taco-datepicker--action secondary"
          >
            Today
          </button>
        </div>
        <div className="taco-datepicker--spacer"></div>
      </div>
      <style jsx>
        {`
          .taco-datepicker--container {
            border: 2px solid var(--fg);
            padding: 8px;
            border-radius: 8px;
            min-width: 400px;
            max-width: 450px;
            font-family: Arial;
            display: flex;
            color: var(--fg);
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .taco-datepicker--row {
            display: flex;
            flex-wrap: wrap;
          }
          .taco-datepicker--day-box {
            margin: 8px;
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
          }

          .taco-datepicker--day-box.secondary {
            color: var(--fg-lighter);
          }

          .taco-datepicker--day-box:hover {
            cursor: pointer;
          }
          .taco-datepicker--day-box.today {
            border: 1px solid var(--bg-lighter);
          }
          .taco-datepicker--day-box.selected {
            background: var(--fg);
            color: var(--bg);
          }

          .taco-datepicker--month-box {
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 8px;
            color: var(--fg-light);
          }

          .taco-datepicker--month-box.active {
            height: 40px;
            width: 40px;
            font-size: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 8px;
            color: var(--fg);
            margin-left: 24px;
            margin-right: 24px;
          }

          .taco-datepicker--month-box:hover {
            cursor: pointer;
          }

          .taco-datepicker--action {
            background: transparent;
            color: var(--fg);
            outline: #000;
            border: 2px solid var(--fg);
            min-width: 150px;
            padding: 8px 16px;
            border-radius: 4px;
            transition: background 250ms linear;
          }

          .taco-datepicker--action:hover {
            color: var(--bg);
            background: var(--fg);
            cursor: pointer;
          }

          .taco-datepicker--action.secondary {
            background: transparent;
            color: var(--fg);
            border: 0px;
          }

          .taco-datepicker--action.secondary:hover {
            background: var(--bg-lighter);
          }

          .taco-datepicker--spacer {
            margin: 8px;
          }
        `}
      </style>
    </>
  );
}

export default Datepicker;
