import { Router, Request, Response } from 'express';

export const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: "working - get"
    });
    console.log("testing_node");
});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    //Para parametros enviados por el body
    const nombre = req.body.nombre;
    const numero = req.body.numero;

    //Parametros por URL
    const id = req.params.id;

    res.json({
        ok: true,
        nombre,
        numero,
        mensaje: "working - post"
    });
});