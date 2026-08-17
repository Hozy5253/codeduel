import { Injectable } from '@nestjs/common';
import { CppExecutor } from './executors/cpp.executor';
import { ExecuteCodeDto } from './dto/execute-code.dto';

@Injectable()
export class JudgeService {
  constructor(private readonly cppExecutor: CppExecutor) {}

  async run(dto: ExecuteCodeDto) {
    if (dto.language === 'cpp') {
      return this.cppExecutor.execute(dto.code, dto.input);
    }

    return {
      error: 'Language not supported yet',
    };
  }
}
