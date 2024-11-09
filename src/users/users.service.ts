import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { isEmail } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    const user = await this.prisma.user.findUnique({
      where: { email: createUserInput.email },
    });

    if (user) {
      throw new Error('Email already exists');
    }

    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    if (!isEmail(updateUserInput.email)) {
      throw new Error('Invalid email format');
    }

    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserInput,
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async remove(id: number) {
    const user = await this.prisma.user.delete({
      where: { id },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
