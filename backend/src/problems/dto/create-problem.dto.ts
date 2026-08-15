import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateProblemDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  difficulty: string;

  @IsString()
  inputFormat: string;

  @IsString()
  outputFormat: string;

  @IsString()
  constraints: string;

  @IsString()
  sampleInput: string;

  @IsString()
  sampleOutput: string;

  @IsOptional()
  @IsString()
  explanation?: string;

  @IsInt()
  timeLimit: number;

  @IsInt()
  memoryLimit: number;

  @IsArray()
  @IsString({ each: true })
  tags: string[];
}
