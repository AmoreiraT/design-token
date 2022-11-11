import { Injectable } from '@nestjs/common';
import { CreateGetDesignTokenDto } from './dto/create-get-design-token.dto';
import { UpdateGetDesignTokenDto } from './dto/update-get-design-token.dto';
import rochaDesignToken from '../rochaCalderon/design-tokens.tokens.json';


@Injectable()
export class GetDesignTokenService {
  getDesignToken(): {

  } {
    return rochaDesignToken;
  }

  create(createGetDesignTokenDto: CreateGetDesignTokenDto) {
    return 'This action adds a new getDesignToken';
  }

  findAll() {
    return `This action returns all getDesignToken`;
  }

  findOne(id: number) {
    return `This action returns a #${id} getDesignToken`;
  }

  update(id: number, updateGetDesignTokenDto: UpdateGetDesignTokenDto) {
    return `This action updates a #${id} getDesignToken`;
  }

  remove(id: number) {
    return `This action removes a #${id} getDesignToken`;
  }
}
