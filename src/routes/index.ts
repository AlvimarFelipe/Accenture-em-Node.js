import { Router } from 'express';



import * as cadastroController from '../controllers/cadastroController';
import * as HomeController from '../controllers/homeController';
import * as testeController from '../controllers/testeController';

import * as Grafico1Controller from '../controllers/dadosGraficos/Grafico1Controller';

import * as selectController from '../controllers/selectGraficos/selectController';


const router = Router();

router.get('/', cadastroController.cadastro);

router.get('/home', HomeController.home);

router.get('/teste',testeController.conteudo);


router.get('/dadosgraficos',Grafico1Controller.data1);
router.get('/dadosgraficos2',Grafico1Controller.data2);



router.get('/selectdata',selectController.select1);


  
export default router;