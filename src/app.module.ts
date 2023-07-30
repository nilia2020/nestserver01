import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CategoriesController } from './categories/categories.controller';
import { ProductsService } from './products/products.service';
import { UsersModule } from './users/users.module';
import { CategoriesService } from './categories/categories.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, ProductsService, CategoriesService],
})
export class AppModule {}
