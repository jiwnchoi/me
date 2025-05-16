declare interface IDateRange {
  from: string;
  to: string;
}

declare type TDate = DateRange | string;

interface FrontMatter {
  title: string;
  shortTitle?: string;
  description?: string;
  type?: string;
  filePath?: string;
  timestamp?: number;
  date?: Date;
  tags?: string | string[];
  [key: string]: string | number | boolean | string[] | Record<string, unknown> | undefined;
}
