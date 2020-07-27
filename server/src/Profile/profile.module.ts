import { Module } from '@nestjs/common';
import {ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { DatabaseModule } from '../database/database.module';
import { profileProviders } from './profile.providers';
import { ProfileController } from "./profile.controller";

@Module({
  imports: [ DatabaseModule, TypeOrmModule.forFeature([Profile])],
  providers : [...profileProviders, ProfileService],
  controllers: [ProfileController],
  exports : [...profileProviders]
})
export class ProfileModule {}
