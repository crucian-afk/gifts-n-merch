import {FormEvent} from 'react';

type colorObject = {
  [key: string]: string;
}
export const colorIcon = (color: string): colorObject => ({
  backgroundColor: color.split('/')[0],
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  display: 'inline-block',
  verticalAlign: 'middle',
});

export const handleSubmit = (evt: FormEvent) => evt.preventDefault();
