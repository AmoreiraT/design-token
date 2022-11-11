import { Injectable } from '@nestjs/common';
import rochaDesignToken from './rochaCalderon/design-tokens.tokens.json';
@Injectable()
export class AppService {
  getDesignToken(): {} {
    return rochaDesignToken;
  }
}
