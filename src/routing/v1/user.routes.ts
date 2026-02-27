
import { login } from '@modules/user/controllers/user.controller';
import express,{Router} from 'express';




const router = Router();


router.get("/login",login);

export default router;