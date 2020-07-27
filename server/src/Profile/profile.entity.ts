import { BeforeInsert, Entity, PrimaryGeneratedColumn, Column, AfterLoad } from 'typeorm';
//import  * as bcrypt from 'bcrypt';

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: Number;
    @Column()
    name: string;
    @Column()
    job: string;
    @Column()
    url: string;
    @Column()
    city: string;

}
