import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker/src/entry.nostyle';
import '@wojtekmaj/react-daterange-picker/src/DateRangePicker.less';

import ValidityOptions from './ValidityOptions';
import MaxDetailOptions from './MaxDetailOptions';
import MinDetailOptions from './MinDetailOptions';
import LocaleOptions from './LocaleOptions';
import ValueOptions from './ValueOptions';
import ViewOptions from './ViewOptions';

import './Test.less';

const now = new Date();

const ariaLabelProps = {
  calendarAriaLabel: 'Toggle calendar',
  clearAriaLabel: 'Clear value',
  dayAriaLabel: 'Day',
  monthAriaLabel: 'Month',
  nativeInputAriaLabel: 'Date',
  yearAriaLabel: 'Year',
};

const placeholderProps = {
  dayPlaceholder: 'dd',
  monthPlaceholder: 'mm',
  yearPlaceholder: 'yyyy',
};

/* eslint-disable no-console */

const nineteenNinetyFive = new Date(1995, now.getUTCMonth() + 1, 15, 12);
const fifteenthOfNextMonth = new Date(now.getUTCFullYear(), now.getUTCMonth() + 1, 15, 12);

export default function Test() {
  const [disabled, setDisabled] = useState(false);
  const [locale, setLocale] = useState(null);
  const [maxDate, setMaxDate] = useState(fifteenthOfNextMonth);
  const [maxDetail, setMaxDetail] = useState('month');
  const [minDate, setMinDate] = useState(nineteenNinetyFive);
  const [minDetail, setMinDetail] = useState('century');
  const [required, setRequired] = useState(true);
  const [showLeadingZeros, setShowLeadingZeros] = useState(true);
  const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);
  const [showWeekNumbers, setShowWeekNumbers] = useState(false);
  const [value, setValue] = useState(now);

  return (
    <div className="Test">
      <header>
        <h1>react-daterange-picker test page</h1>
      </header>
      <div className="Test__container">
        <aside className="Test__container__options">
          <MinDetailOptions
            maxDetail={maxDetail}
            minDetail={minDetail}
            setMinDetail={setMinDetail}
          />
          <MaxDetailOptions
            maxDetail={maxDetail}
            minDetail={minDetail}
            setMaxDetail={setMaxDetail}
          />
          <ValidityOptions
            maxDate={maxDate}
            minDate={minDate}
            required={required}
            setMaxDate={setMaxDate}
            setMinDate={setMinDate}
            setRequired={setRequired}
          />
          <LocaleOptions locale={locale} setLocale={setLocale} />
          <ValueOptions setValue={setValue} value={value} />
          <ViewOptions
            disabled={disabled}
            setDisabled={setDisabled}
            setShowLeadingZeros={setShowLeadingZeros}
            setShowNeighboringMonth={setShowNeighboringMonth}
            setShowWeekNumbers={setShowWeekNumbers}
            showLeadingZeros={showLeadingZeros}
            showNeighboringMonth={showNeighboringMonth}
            showWeekNumbers={showWeekNumbers}
          />
        </aside>
        <main className="Test__container__content">
          <form
            onSubmit={(event) => {
              event.preventDefault();

              console.warn('Calendar triggered submitting the form.');
              console.log(event);
            }}
          >
            <DateRangePicker
              {...ariaLabelProps}
              {...placeholderProps}
              calendarClassName="myCustomCalendarClassName"
              className="myCustomDateRangePickerClassName"
              disabled={disabled}
              locale={locale}
              maxDate={maxDate}
              maxDetail={maxDetail}
              minDate={minDate}
              minDetail={minDetail}
              name="myCustomName"
              onCalendarClose={() => console.log('Calendar closed')}
              onCalendarOpen={() => console.log('Calendar opened')}
              onChange={setValue}
              required={required}
              showLeadingZeros={showLeadingZeros}
              showNeighboringMonth={showNeighboringMonth}
              showWeekNumbers={showWeekNumbers}
              value={value}
            />
            <br />
            <br />
            <button id="submit" type="submit">
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
