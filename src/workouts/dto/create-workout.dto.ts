export class CreateWorkoutDto {
  readonly date: Date;
  readonly peopleCount: number;
  readonly price: number;
  readonly isPersonal: boolean;
  readonly isFree: boolean;
  readonly isJumps: boolean;

  readonly periodDate: string;
}

export class RemoveWorkoutDto {
  readonly idArray: string[];

  readonly periodDate: string;
}

export class EditWorkoutDto {
  readonly date: Date;
  readonly peopleCount: number;
  readonly price: number;
  readonly isPersonal: boolean;
  readonly isFree: boolean;
  readonly isJumps: boolean;
  // tslint:disable-next-line
  readonly _id: string;

  readonly periodDate: string;
}
