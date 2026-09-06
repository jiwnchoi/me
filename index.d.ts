declare interface IDateRange {
  from: string;
  to: string;
}

declare type TDate = IDateRange | string;

declare interface FrontMatter {
  title: string;
  shortTitle?: string;
  description?: string;
  type?: string;
  filePath?: string;
  timestamp?: number;
  date?: TDate;
  tags?: string | string[];
}

declare interface PageMapItem {
  name: string;
  route: string;
  frontMatter?: FrontMatter;
  title?: string;
  children?: PageMapItem[];
}
