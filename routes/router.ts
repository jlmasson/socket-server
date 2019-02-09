import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        success: true,
        message: 'GET listo'
    });
});

router.post('/mensajes', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        success: true,
        cuerpo,
        de,
        message: 'POST listo'
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        success: true,
        cuerpo,
        de,
        id,
        message: 'POST listo'
    });
});

export default router;
