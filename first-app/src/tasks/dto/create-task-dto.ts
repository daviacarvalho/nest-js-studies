import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(5)
  readonly name: string;

  @IsString()
  @MinLength(5)
  readonly description: string;

  @IsOptional()
  @IsBoolean()
  readonly completed?: boolean;
}
