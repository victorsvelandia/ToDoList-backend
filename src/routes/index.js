import { Router } from 'express';

const router = Router();

router.get('/test', (req, res) => {
  res.json({ message: 'API funcionando en /api/v1/test' });
});

export default router;