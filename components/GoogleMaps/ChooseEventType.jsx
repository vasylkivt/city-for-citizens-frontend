'use client';

import { useEffect, useState } from 'react';
import { typeEvents } from './temporaryData/temporaryTypesOfEvents';
import IconSelectArrow from '../icons/IconSelectArrow';
import IconCheckbox from '../icons/IconCheckbox';
import FilterInputWrapper from './FilterInputWrapper';
// const eng = {
//   label: "",
//   InputText: "",
// };

const ukr = {
  label: 'Оберіть тип події',
  inputText: 'Подія',
  textIsEmpty: 'Тут порожньо...',
};
const ChooseEventType = ({ setEventType }) => {
  const [selectedEventTypes, setSelectedEventTypes] = useState([]);

  useEffect(() => {
    setEventType(selectedEventTypes);
  }, [selectedEventTypes, setEventType]);

  const handleChangeEvent = e => {
    const eventName = e.target.name;

    setSelectedEventTypes(prev => {
      if (prev.includes(eventName)) {
        return prev.filter(type => type !== eventName);
      } else {
        return [...prev, eventName];
      }
    });
  };

  const selectedTypesIsEmpty = selectedEventTypes.length !== 0;
  return (
    <div>
      <FilterInputWrapper
        label={ukr.label}
        inputTextDefault={selectedTypesIsEmpty ? '' : ukr.inputText}
        inputTextFirst={
          selectedTypesIsEmpty ? selectedEventTypes.join(', ') : ''
        }
        iconSelect={IconSelectArrow}
      >
        <ul className="custom-scroll max-h-[300px] overflow-y-auto">
          {typeEvents.length === 0 ? (
            <p className="p-[10px] text-[16px] leading-[1.5] -tracking-[0.176px] text-gray/50 dark:text-gray/10">
              {ukr.textIsEmpty}
            </p>
          ) : (
            typeEvents.map(event => (
              <li
                className="border-b-[1px] border-b-gray/50   p-[10px] last:border-none dark:border-gray/10"
                key={event}
              >
                <label className="flex cursor-pointer justify-between">
                  <span className="select-none text-[16px] leading-[1.5] -tracking-[0.176px]  text-gray/50 dark:text-gray/10 desktop:w-[112px]">
                    {event}
                  </span>
                  <input
                    className="hidden"
                    name={event}
                    onChange={handleChangeEvent}
                    type="checkbox"
                  />
                  <div className="flex h-[24px] w-[24px] items-center justify-center rounded-[4px] border-[1px] border-gray/50 dark:border-gray/10">
                    <IconCheckbox
                      className={`stroke-gray/50 transition-all dark:stroke-gray/10 ${
                        selectedEventTypes.includes(event)
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                      width={16}
                      height={16}
                    />
                  </div>
                </label>
              </li>
            ))
          )}
        </ul>
      </FilterInputWrapper>
    </div>
  );
};
export default ChooseEventType;
