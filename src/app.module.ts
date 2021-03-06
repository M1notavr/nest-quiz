import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { QuestionModule } from './question/question.module';
import * as config from 'config';
const db: any = config.get('db');

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URI || db.uri), CategoryModule, QuestionModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
