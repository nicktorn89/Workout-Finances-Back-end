import { Document } from 'mongoose';

export interface Workout extends Document {
  readonly date: Date;
  readonly peopleCount: number;
  readonly price: number;
  readonly isPersonal: boolean;
  readonly isFree: boolean;
  readonly isJumps: boolean;
  readonly location: Location; // TODO: Не уверен что это правильный интерфейс. Нужен ресерч
}
