import { Controller, Get, Query, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  findAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get(':productId')
  findOne(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
  @Post()
  create() {
    return {
      message: 'acción de crear',
    };
  }
}
