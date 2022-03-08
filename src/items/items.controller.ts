import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
@Controller('items')
export class ItemsController {
  //   @Get()
  //   findAll(@Req() req: Request, @Res() res: Response): Response {
  //     console.log(req.url);
  //     return res.status(200).json('All available items');
  //   }
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }
  @Get(':id')
  async findOne(@Param() param): Promise<Item> {
    return this.itemService.findOne(param.id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemService.delete(id);
  }
  @Put(':id')
  update(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id,
  ): Promise<Item> {
    return this.itemService.update(id, updateItemDto);
  }
}
