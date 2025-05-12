import { format, isValid, parse } from "date-fns";

export function formatDate(dateString: string): string {
  const possibleFormats: string[] = ["yyyy.MM.dd", "yyyy-MM-dd", "yyyy.MM", "yyyy-MM"];

  let parsedDate: Date | null = null;

  for (const formatString of possibleFormats) {
    const potentialDate = parse(dateString, formatString, new Date());
    if (isValid(potentialDate)) {
      parsedDate = potentialDate;
      break;
    }
  }

  if (!parsedDate || !isValid(parsedDate)) {
    return "Invalid Date";
  }

  const month = format(parsedDate, "MMM");
  const year = format(parsedDate, "yyyy");

  const formattedDate = month === "May" ? `May ${year}` : `${month}. ${year}`;

  return formattedDate;
}
