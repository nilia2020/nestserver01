import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getOne(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return { message: `category ${categoryId} and product ${productId}` };
  }
}
