import { IsString } from 'class-validator';

export class CreateSubmissionDto {
  @IsString()
  problemId: string;

  @IsString()
  language: string;

  @IsString()
  code: string;
}
