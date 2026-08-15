import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateSubmissionDto } from './dto/create-submissions.dto';
import { SubmissionsService } from './submissions.service';

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: any, @Body() createSubmissionDto: CreateSubmissionDto) {
    return this.submissionsService.create(req.user.userId, createSubmissionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  findMySubmissions(@Req() req: any) {
    return this.submissionsService.findMySubmissions(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.submissionsService.findOne(id);
  }
}
