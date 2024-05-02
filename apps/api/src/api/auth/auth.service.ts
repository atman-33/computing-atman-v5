import { apiEnv } from '@/config/api-env';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { User } from '../users/models/user.model';

export interface TokenPayload {
  userId: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(user: User, response: Response) {
    const tokenPayload: TokenPayload = {
      userId: user.id,
    };

    const expires = new Date();
    // console.log(expires);
    // console.log(env.JWT_EXPIRATION);
    expires.setSeconds(
      expires.getSeconds() + parseInt(apiEnv.JWT_EXPIRATION, 10),
    );
    // console.log(expires);

    const token = this.jwtService.sign(tokenPayload);
    // console.log(`login token: ${token}`);

    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });
  }

  logout(response: Response) {
    const expires = new Date();
    // console.log(expires);
    response.cookie('Authentication', '', {
      httpOnly: true,
      expires: expires,
    });
  }

  async generateJwt(user: User) {
    const tokenPayload: TokenPayload = {
      userId: user.id,
    };

    const token = await this.jwtService.signAsync(tokenPayload);
    return token;
  }
}
