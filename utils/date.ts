import { format, parse } from "date-fns";

export function formatDate(dateString: string) {
  const parsedDate = parse(dateString, "yyyy.MM.dd", new Date());
  const month = format(parsedDate, "MMM");
  const year = format(parsedDate, "yyyy");
  const formattedDate = month === "May" ? `May ${year}` : `${month}. ${year}`;
  return formattedDate;
}
