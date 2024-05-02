import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/input/login-user-input.dto';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Query(() => String, { name: 'token' })
  async getToken(@Args('loginUserData') loginUserData: LoginUserInput) {
    const { username, password } = loginUserData;
    const user = await this.usersService.validateUser(username, password);

    if (!user) {
      return null;
    }

    // NOTE: This is not working.Cookies are not being set...
    //
    // await fetch(`${env.NEXT_PUBLIC_API_ENDPOINT}/api/auth/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   credentials: 'include',
    //   body: JSON.stringify({ username, password })
    // });

    // console.log(response);
    const token = await this.authService.generateJwt(user);
    return token;
  }
}
