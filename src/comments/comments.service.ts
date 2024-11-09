import { Injectable } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}
  create(createCommentInput: CreateCommentInput) {
    return this.prisma.comment.create({
      data: createCommentInput,
    });
  }

  findAll() {
    return this.prisma.comment.findMany();
  }

  findOne(id: number) {
    return this.prisma.comment.findUnique({
      where: { id },
    });
  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    return this.prisma.comment.update({
      where: { id },
      data: updateCommentInput,
    });
  }

  remove(id: number) {
    return this.prisma.comment.delete({
      where: { id },
    });
  }
}
