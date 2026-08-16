import { Injectable } from '@nestjs/common';
import { DockerService } from './docker.service';

@Injectable()
export class JudgeService {
  constructor(private readonly dockerService: DockerService) {}

  async testDocker() {
    return this.dockerService.testDocker();
  }
}
