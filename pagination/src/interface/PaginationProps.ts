export interface PaginationProps {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
  /**
   * It refers to the number of pages that are always
   * displayed before and after the current page.
   * @type number
   */
  siblingCount?: number;
  /**
   * It refers to the number that is always displayed
   * at the beginning and end.
   * @type number
   */
  boundaryCount?: number;
}
