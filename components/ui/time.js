import { parseISO, format } from "date-fns";
import { cx } from "@/utils/all";

export default function DateTime({ date, className }) {
  return (
    <time className={cx(className && className)} dateTime={date}>
      {format(parseISO(date), "dd/MM/yyyy")}
    </time>
  );
}
