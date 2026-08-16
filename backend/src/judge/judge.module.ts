import { Module } from '@nestjs/common';
import { JudgeController } from './judge.controller';
import { JudgeService } from './judge.service';
import { DockerService } from './docker.service';

@Module({
  controllers: [JudgeController],
  providers: [JudgeService, DockerService],
})
export class JudgeModule {}
