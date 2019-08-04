export class CreateWorkoutDto {
  readonly date: Date;
  readonly peopleCount: number;
  readonly price: number;
  readonly isPersonal: boolean;
  readonly isFree: boolean;
  readonly isJumps: boolean;
  readonly location: Location; // TODO: Не уверен что это правильный интерфейс. Нужен ресерч
}

export class RemoveWorkoutDto {
  readonly idArray: string[];
}

export class EditWorkoutDto {
  readonly date: Date;
  readonly peopleCount: number;
  readonly price: number;
  readonly isPersonal: boolean;
  readonly isFree: boolean;
  readonly isJumps: boolean;
  readonly location: Location; // TODO: Не уверен что это правильный интерфейс. Нужен ресерч
  readonly _id: string;
}