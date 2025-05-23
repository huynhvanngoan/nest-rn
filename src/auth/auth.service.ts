// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '@/modules/users/users.service';
import { comparePasswordHelper } from '@/helpers/utils';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(username);
    if (!user || !(await comparePasswordHelper(pass, user.password))) {
      // throw new UnauthorizedException();
      return null;
    }

    return user;
  }

  async login(user: any) {
    const payload = { sub: user._id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(registerDto: CreateAuthDto) {
    // Check email
    return await this.usersService.handleRegister(registerDto);
    // Hash password
  }
}
