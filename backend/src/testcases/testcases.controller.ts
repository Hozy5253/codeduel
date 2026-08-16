import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateTestCaseDto } from './dto/create-testcase.dto';
import { TestcasesService } from './testcases.service';

@Controller('testcases')
export class TestcasesController {
  constructor(private readonly testcasesService: TestcasesService) {}

  @Post()
  create(@Body() createTestCaseDto: CreateTestCaseDto) {
    return this.testcasesService.create(createTestCaseDto);
  }

  @Get('problem/:problemId')
  findByProblem(@Param('problemId') problemId: string) {
    return this.testcasesService.findByProblem(problemId);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() createTestCaseDto: CreateTestCaseDto,
  ) {
    return this.testcasesService.update(id, createTestCaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testcasesService.remove(id);
  }
}
