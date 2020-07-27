
import { Connection, Repository } from 'typeorm';
import { Profile } from './profile.entity';
import { Inject } from '@nestjs/common';

export const profileProviders = [
  {
    provide: 'PROFILE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Profile),
    inject : ['DATABASE_CONNECTION'],
  },
];