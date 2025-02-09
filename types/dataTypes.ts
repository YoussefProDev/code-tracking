import { currencyOptions } from "@/data/invoices";
import { HTMLProps } from "react";
import { IconType } from "react-icons/lib";
// Tipo che rappresenta tutte le stringhe contenute nell'array
export type Currency = (typeof currencyOptions)[number];

export interface EmptyStateProps {
  title: string;
  description: string;
  buttonText: string;
  href?: string;
  action?: () => void;
  Icon?: IconType;
  className?: HTMLProps<HTMLElement>["className"];
}

export type Field<T> = {
  label: string;
  key: keyof T;
  sticky?: boolean;
  style?: React.CSSProperties;
  className?: HTMLProps<HTMLElement>["className"];
  format?: (value: any, row: T) => React.ReactNode;
};
export interface DynamicTableProps<T> {
  data: T[];
  fields: Field<T>[];
  renderActions?: (row: T, index: number) => React.ReactNode;
  emptyState: EmptyStateProps;
  customComponent?: React.ReactNode;
  onClick?: (row: T) => void;
}

export type FieldsType<T> = Field<T>[];
