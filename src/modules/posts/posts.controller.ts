import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';

@Controller('/posts')
@ApiTags('/posts')
export class PostsController {
  constructor(private readonly postsServcie: PostsService) {}

  @Get('/')
  getPosts() {
    return this.postsServcie.getPosts();
  }

  @Get('/:id')
  getPostById(@Param('id', ParseIntPipe) id: number) {
    return this.postsServcie.getPostById(id);
  }
}
