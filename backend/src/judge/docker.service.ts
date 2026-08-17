import { Injectable } from '@nestjs/common';
import Docker from 'dockerode';

@Injectable()
export class DockerService {
  private docker = new Docker();

  async testDocker() {
    try {
      const version = await this.docker.version();
      return version;
    } catch (error) {
      console.error('Docker Error:', error);
      throw error;
    }
  }
}
