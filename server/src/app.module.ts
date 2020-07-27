import { Module } from '@nestjs/common'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { ProfileModule } from './Profile/profile.module';

@Module({
  imports: [
    ProfileModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestdb',
      entities: [
          'dist/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
