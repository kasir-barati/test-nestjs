import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';

import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: 'secret',
        }),
    ],
    providers: [AuthService, JwtModule, JwtStrategy, LocalStrategy],
    exports: [AuthService, JwtModule],
})
class AuthModule {}

export { AuthModule };
