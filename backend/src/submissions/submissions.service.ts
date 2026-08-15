import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSubmissionDto } from './dto/create-submissions.dto';

@Injectable()
export class SubmissionsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createSubmissionDto: CreateSubmissionDto) {
    const { problemId, language, code } = createSubmissionDto;

    return this.prisma.submission.create({
      data: {
        userId,
        problemId,
        language,
        code,
        verdict: 'Pending',
      },
      include: {
        problem: true,
      },
    });
  }

  async findMySubmissions(userId: string) {
    return this.prisma.submission.findMany({
      where: {
        userId,
      },
      include: {
        problem: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.submission.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        problem: true,
      },
    });
  }
}
