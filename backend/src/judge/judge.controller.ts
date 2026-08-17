import { Body, Controller, Post } from '@nestjs/common';
import { JudgeService } from './judge.service';
import { ExecuteCodeDto } from './dto/execute-code.dto';

@Controller('judge')
export class JudgeController {
  constructor(private readonly judgeService: JudgeService) {}

  @Post('run')
  run(@Body() dto: ExecuteCodeDto) {
    return this.judgeService.run(dto);
  }
}
