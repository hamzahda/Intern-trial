import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Profile } from './profile.entity';


@Controller('profile')
export class ProfileController {
    constructor( private profileService : ProfileService){}

    @Post()
    async save(@Body() data) {
      return this.profileService.save(data);
    } 

    @Post('/get')
    async get(@Body() body) {
      return this.profileService.get(body.url);
    } 


}
