import { CreateUserDto, UpdateUserDto } from '../dtos';
import { UserEntity } from '../entities/users.entity';



export abstract class UserDatasource {

  abstract create( createUserDto: CreateUserDto ): Promise<UserEntity>;

  abstract getAll(): Promise<UserEntity[]>;

  abstract findById( id: number ): Promise<UserEntity>;
  abstract updateById( updateUserDto: UpdateUserDto ): Promise<UserEntity>;
  abstract deleteById( id: number ): Promise<UserEntity>;

}