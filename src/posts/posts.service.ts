import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostInput: CreatePostInput) {
    return this.prisma.post.create({
      data: createPostInput,
    });
  }

  async findAll() {
    return this.prisma.post.findMany();
  }

  async findOne(id: number) {
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatePostInput: UpdatePostInput) {
    return this.prisma.post.update({
      where: { id },
      data: updatePostInput,
    });
  }

  async remove(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
