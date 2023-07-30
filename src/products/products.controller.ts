import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  // ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  findAll() {
    return this.productsService.findAll();
  }
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }
  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productsService.update(id, payload);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
