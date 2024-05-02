import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { User } from '../users/models/user.model';
import { AuthService } from './auth.service';
import { CurrentUser } from './current-user.decorator';
import JwtAuthGuard from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@CurrentUser() user: User, @Res({ passthrough: true }) response: Response) {
    // console.log('login user', user);
    await this.authService.login(user, response);
    response.send(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  isAuthenticated() {
    // console.log('auth.controller isAuthenticated => true');
    return true;
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Res({ passthrough: true }) response: Response) {
    this.authService.logout(response);
    response.json({});
  }
}
