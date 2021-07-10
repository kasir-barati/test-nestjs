import { Post, Request, UseGuards } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
class AppController {
    constructor(
        private readonly appService: AppService,
        private authService: AuthService,
    ) {}

    @Get()
    @UseGuards(AuthGuard('jwt'))
    getHello(@Request() req): string {
        console.log(req.user);
        return this.appService.getHello();
    }

    @Post('auth/login')
    @UseGuards(AuthGuard('local'))
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}

export { AppController };
