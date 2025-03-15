import { IsString, MinLength, IsBoolean, IsOptional } from 'class-validator';
export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  @MinLength(5)
  readonly name?: string;

  @IsOptional()
  @IsString()
  @MinLength(5)
  readonly description?: string;

  @IsOptional()
  @IsBoolean()
  readonly completed?: boolean;
}
