import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from '../users/models/user.model';

export const getCurrentUserByContext = (context: ExecutionContext): User => {
  // for http
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest().user;
  }

  // for graphql
  const ctx = GqlExecutionContext.create(context);
  return ctx.getContext().req.user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
