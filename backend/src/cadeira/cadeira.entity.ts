import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cadeira {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  modelo: string;

  @Column({type: 'float'})
  preco: number;

  @Column({ length: 5000 })
  descricao: string;

  @Column()
  urlImg: string;

  @Column({ default: true })
  disponivel: boolean;
}