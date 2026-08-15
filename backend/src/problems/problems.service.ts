import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';

@Injectable()
export class ProblemsService {
  constructor(private prisma: PrismaService) {}

  async create(createProblemDto: CreateProblemDto) {
    return this.prisma.problem.create({
      data: createProblemDto,
    });
  }

  async findAll() {
    return this.prisma.problem.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.problem.findUnique({
      where: {
        id,
      },
    });
  }
  async update(id: string, updateProblemDto: UpdateProblemDto) {
    return this.prisma.problem.update({
      where: {
        id,
      },
      data: updateProblemDto,
    });
  }

  async remove(id: string) {
    await this.prisma.problem.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Problem deleted successfully',
    };
  }
}
