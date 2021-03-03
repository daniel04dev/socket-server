import { Router, Request, Response } from 'express';
import Server from '../models/server';

export const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    
    res.json({
        ok: true,
        mensaje: "working - get"
    });
    
});

router.post('/mensajes', (req: Request, res: Response) => {    
    //Para parametros enviados por el body
    const de = req.body.de;
    const cuerpo = req.body.cuerpo;        
    
    // Tomo la instancia singleton de el servidor
      const server = Server.instance;

      const payload = {
          de,
          cuerpo
      }
  
      server.io.emit('mensaje-nuevo', payload)
    
    res.json({
        ok: true,
        mensaje: "working - get"
    });
    
});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    //Para parametros enviados por el body
    const de = req.body.de;
    const cuerpo = req.body.cuerpo;
    
    //Parametros por URL
    const id = req.params.id;

    // Tomo la instancia singleton de el servidor
    const server = Server.instance;

    const payload = {
        de,
        cuerpo
    }

    server.io.in( id ).emit('mensaje-privado', payload)

    res.json({
        ok: true,
        de,
        cuerpo,
        mensaje: "working - post"
    });
});