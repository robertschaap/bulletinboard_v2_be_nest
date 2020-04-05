import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  avatar: string;

  @Column()
  name: string;
}
