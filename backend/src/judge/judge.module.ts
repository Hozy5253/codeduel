import { Module } from '@nestjs/common';
import { JudgeController } from './judge.controller';
import { JudgeService } from './judge.service';
import { DockerService } from './docker.service';
import { CppExecutor } from './executors/cpp.executor';

@Module({
  controllers: [JudgeController],
  providers: [JudgeService, DockerService, CppExecutor],
})
export class JudgeModule {}
