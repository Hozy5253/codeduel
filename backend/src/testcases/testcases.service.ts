import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTestCaseDto } from './dto/create-testcase.dto';

@Injectable()
export class TestcasesService {
  constructor(private prisma: PrismaService) {}

  async create(createTestCaseDto: CreateTestCaseDto) {
    const problem = await this.prisma.problem.findUnique({
      where: {
        id: createTestCaseDto.problemId,
      },
    });

    if (!problem) {
      throw new NotFoundException('Problem not found');
    }

    return this.prisma.testCase.create({
      data: createTestCaseDto,
    });
  }

  async findByProblem(problemId: string) {
    return this.prisma.testCase.findMany({
      where: {
        problemId,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async update(id: string, createTestCaseDto: CreateTestCaseDto) {
    return this.prisma.testCase.update({
      where: {
        id,
      },
      data: createTestCaseDto,
    });
  }

  async remove(id: string) {
    return this.prisma.testCase.delete({
      where: {
        id,
      },
    });
  }
}
