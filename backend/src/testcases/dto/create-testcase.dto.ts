import { IsBoolean, IsString } from 'class-validator';

export class CreateTestCaseDto {
  @IsString()
  input: string;

  @IsString()
  output: string;

  @IsBoolean()
  isHidden: boolean;

  @IsString()
  problemId: string;
}
