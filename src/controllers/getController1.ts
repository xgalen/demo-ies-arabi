import { Request, Response } from 'express';
import { db } from '../db'

export class GetController1 {

  public async handle(req: Request, res: Response): Promise<void> {
    const tariff = req.params.tariff_id;
    const sku = req.params.sku;
    const key = `${tariff}:${sku}`

    // for simplicity of the exercise, we simulate the key is the sql query
    const price = await db.query(key)
    if (price) {
      res.send({ price: price });
    }
    else {
      res.send('Not found')
    }
  }
}