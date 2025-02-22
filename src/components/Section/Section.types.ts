export interface SectionProps<T> {
  title: string;
  data?: T[];
  isClickable?: boolean;
  description?: string;
  hasSeperator?: boolean;
}
