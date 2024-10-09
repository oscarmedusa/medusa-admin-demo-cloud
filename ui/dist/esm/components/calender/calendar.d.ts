import { CalendarDate } from "@internationalized/date";
import * as React from "react";
import { type CalendarProps as BaseCalendarProps } from "react-aria";
interface CalendarValueProps {
    value?: Date | null;
    defaultValue?: Date | null;
    onChange?: (value: Date | null) => void;
    isDateUnavailable?: (date: Date) => boolean;
    minValue?: Date;
    maxValue?: Date;
}
interface CalendarProps extends Omit<BaseCalendarProps<CalendarDate>, keyof CalendarValueProps>, CalendarValueProps {
}
declare const Calendar: (props: CalendarProps) => React.JSX.Element;
export { Calendar };
//# sourceMappingURL=calendar.d.ts.map