import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';
import * as path from 'path';
import { v4 as uuid } from 'uuid';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

@Injectable()
export class CppExecutor {
  async execute(code: string, input: string) {
    const folderId = uuid();

    const tempDir = path.join(process.cwd(), 'temp', folderId);

    await fs.ensureDir(tempDir);

    const cppFile = path.join(tempDir, 'main.cpp');
    const inputFile = path.join(tempDir, 'input.txt');

    await fs.writeFile(cppFile, code);
    await fs.writeFile(inputFile, input);

    const command = `docker run --rm \
-v "${tempDir}:/workspace" \
-w /workspace \
gcc:latest \
bash -c "g++ main.cpp -o main && ./main < input.txt"`;

    try {
      const { stdout, stderr } = await execAsync(command);

      return {
        status: 'Success',
        stdout: stdout.trim(),
        stderr: stderr.trim(),
      };
    } catch (error: any) {
      return {
        status: 'Execution Failed',
        stdout: error.stdout?.trim() || '',
        stderr: error.stderr?.trim() || '',
        error: error.message,
      };
    }
  }
}
