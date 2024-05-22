import { Request, Response } from 'express';

export class GetController2 {
  public handle(req: Request, res: Response): void {
    res.send({ id: 2, name: 'test' });
  }
}