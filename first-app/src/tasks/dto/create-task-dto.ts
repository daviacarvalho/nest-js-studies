import { IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(5)
  readonly name: string;

  @IsString()
  @MinLength(5)
  readonly description?: string;
}
