import { IsString } from 'class-validator';

export class ExecuteCodeDto {
  @IsString()
  language: string;

  @IsString()
  code: string;

  @IsString()
  input: string;
}
