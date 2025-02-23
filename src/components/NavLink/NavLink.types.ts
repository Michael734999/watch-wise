import { MouseEventHandler } from 'react';

export interface NavLinkProps {
  key: number | string;
  linkTo: string;
  handleOnClick?: MouseEventHandler<HTMLAnchorElement>;
  label: string;
}
