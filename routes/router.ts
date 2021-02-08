import { Router, Request, Response } from 'express';

export const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: "working - get"
    });
});

router.post('/mensajes', (req: Request, res: Response) => {
    const nombre = req.body.nombre;
    const numero = req.body.numero;

    res.json({
        ok: true,
        nombre,
        numero,
        mensaje: "working - post"
    });
});