import IconCalendar from '@/components/UI/IconCalendar';
import IconClock from '@/components/UI/IconClock';
import IconMarkerPlace from '@/components/UI/IconPlace';
import { formatDateSeparatorDot, formatDateToTime } from '@/helpers';

const ModalOnHover = ({ event }) => {
  const { eventAddress, eventTitle, dateTime } = event;
  return (
    <div className="max-w-[280px] rounded-[8px] border border-solid border-gray/100 bg-gray/5 p-[10px] dark:border-gray/5 dark:bg-gray/80">
      <h3 className="mb-[12px] font-heading text-[14px] font-light leading-[1.5] -tracking-[0.264px] dark:text-gray/5">
        {eventTitle}
      </h3>

      <div className="mb-[6px] flex  gap-[10px]">
        <IconMarkerPlace className=" h-[22px] w-[22px] stroke-gray/100 text-[16px] dark:stroke-gray/5" />
        <p className="text-[14px] leading-[1.5] dark:text-gray/5">
          {eventAddress.street}
        </p>
      </div>

      <div className="flex gap-[16px]">
        <div className="flex  gap-[10px]">
          <IconCalendar className="h-[22px] w-[22px] stroke-gray/100 text-[16px] dark:stroke-gray/5" />
          <p className="text-[14px] leading-[1.5] dark:text-gray/5">
            {formatDateSeparatorDot(dateTime)}
          </p>
        </div>

        <div className="flex  gap-[10px]">
          <IconClock className="h-[22px] w-[22px] stroke-gray/100 text-[16px] dark:stroke-gray/5" />
          <p className="text-[14px] leading-[1.5] dark:text-gray/5">
            {formatDateToTime(dateTime)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ModalOnHover;
