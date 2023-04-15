import { IsInt, IsNotEmpty, IsString } from 'class-validator';
export class CreateMessageDTO {
  _id?: number;

  @IsNotEmpty()
  @IsString()
  readonly message: string;

  @IsInt()
  readonly user_id: number;

  readonly likes?: number;
}
