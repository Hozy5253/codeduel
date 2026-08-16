import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TestcasesController } from './testcases.controller';
import { TestcasesService } from './testcases.service';

@Module({
  imports: [PrismaModule],
  controllers: [TestcasesController],
  providers: [TestcasesService],
})
export class TestcasesModule {}
