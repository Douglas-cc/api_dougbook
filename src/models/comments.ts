import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm';

import Posts from './posts';

@Entity('comments')
class Comments {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  message: string;

  @Column()
  post_id: string;

  @ManyToOne(() => Posts)
  @JoinColumn({ name: 'post_id' })
  post: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date; 
}

export default Comments

