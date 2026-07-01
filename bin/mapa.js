var data = [
	['Calle de la Acequia', 								'Calle 4 sur 700-900', 			'2009/03/calle-de-la-acequia-4-sur-700-900.html', 		[ [19.040599, -98.197017], [19.039908, -98.197423] ]], //001
	['Calle de la Acocota', 								'Avenida 4 Oriente 1400-2000',	'2009/03/calle-de-la-acocota-avenida-4-oriente.html', 	[ [19.041515, -98.189672], [19.040149, -98.185386] ]], //002
	['Calle de Ad&aacute;n', 								'Avenida 18 oriente 1000',		'2009/03/calle-de-adan-avenida-18-oriente-1000.html',	[ [19.047234, -98.188534], [19.047004, -98.188024] ]], //003
	['Calle de la Aduana Vieja',							'Avenida 2 Oriente 400',  		'2009/03/calle-de-la-aduana-vieja-avenida-2.html',		[ [19.043645, -98.195163], [19.042889, -98.193700] ]], //004
	['Calle de Alatriste', 									'Calle 6 Sur 100', 				'2009/05/calle-de-alatriste.html', 						[ [19.042238, -98.194442], [19.041529, -98.194848] ]], //005
	['Calle de la Alcantarilla',							'Calle del 5 de Mayo 1000',		'2009/05/calle-de-alcantarilla.html', 					[ [19.048279, -98.196409], [19.048972, -98.195987] ]], //006	
	['Calle de Alfaro', 									'Avenida 8 Poniente 700', 		'2009/05/calle-de-alfaro-avenida-8-poniente-700.html', 	[ [19.049874, -98.201418], [19.050609, -98.202845] ]], //007
	['Calle del Alguacil Mayor',							'Avenida 8 Oriente 400',		'2009/05/calle-del-alguacil-mayor-avenida-8.html',		[ [19.045948, -98.193832], [19.045072, -98.192084] ]], //008
	['Calle de Almoloya',									'Calle 12 Norte 1400-1600',		'2009/05/calle-de-almoloya-calle-12-norte-1400.html',	[ [19.045222, -98.188393], [19.046867, -98.187761] ]], //009
	['Plazuela del Alto',									'Calle 14 Norte 1200',			'2009/03/plazuela-del-alto-calle-14-norte-1200.html',	[ [19.044506, -98.188136], [19.045062, -98.187996] ]], //010
	['Calle de Am&eacute;rica', 							'Avenida 9 Oriente 1200',		'2009/03/calle-de-america-avenida-9-oriente-1200.html',	[ [19.037651, -98.193083], [19.037185, -98.192029] ]], //011
	['Plazuela de Analco',									'Avenida 5 y 7 Oriente 800',	'2009/06/plazuela-de-analco-avenida-5-y-7.html',		[ [19.040002, -98.194204], [19.039604, -98.193135] ]], //012
	['Plazuela de Analco',									'Avenida 5 y 7 Oriente 800',	'2009/06/plazuela-de-analco-avenida-5-y-7.html',		[ [19.039429, -98.194540], [19.038871, -98.193509] ]], //012
	['Calle de Andrade',									'Avenida 9 Poniente 500',		'2009/03/calle-de-andrade-avenida-9-poniente-500.html',	[ [19.042919, -98.203506], [19.043720, -98.204942] ]], //013
	['Plazuela de Antu&ntilde;ano',							'Calle 10 Norte 2000',			'2023/08/plazuela-de-antunano-calle-10-norte-2000.html',[ [19.048117, -98.188312], [19.048909, -98.187600] ]], //014
	['Calle de Anzures',									'Calle 4 Norte 800', 			'2009/03/calle-de-anzures-calle-4-norte-800.html',		[ [19.045995, -98.193845], [19.046686, -98.193453] ]], //015
	['Calle de Alejandro Arango y Escand&oacute;n',			'Calle 3 Sur 1500-1700',		'2009/03/calle-de-alejandro-arango-y-escandon.html',	[ [19.039881, -98.203338], [19.038428, -98.204204] ]], // 016
/*	['Calle del &Aacute;rbol (Xanenetla)',					'Calle 4 Norte',				'2009/03/calle-del-arbol-xanenetla-calle-4-norte.html',	[ ], // 017 */
	['Calle del Arbolito',									'Calle 2 Sur 1300',				'2009/03/calle-del-arbolito-calle-2-sur-1300.html',		[ [19.039047, -98.199781], [19.038334, -98.200184] ]], // 018
	['Calle del Arco Chico', 								'Avenida 18 Poniente 300', 		'2009/03/calle-del-arco-chico-avenida-18.html', 		[ [19.052120, -98.196119], [19.052901, -98.197519] ]], //019
	['Calle de Arcos',										'Avenida 11 Oriente 1',			'2009/03/calle-de-arcos-avenida-11-oriente-1.html',		[ [19.040619, -98.200808], [19.039873, -98.199365] ]], // 020
	['Calle de Mariano Arista', 							'Avenida 4 Poniente 100', 		'2009/09/calle-de-mariano-arista-avenida-4.html',		[ [19.046024, -98.197812], [19.046724, -98.199159] ]], // 021
	['Calle de Astomba',									'Avenida 10 Poniente 300',		'2009/03/calle-de-astomba-avenida-10-poniente.html',	[ [19.049046, -98.197963], [19.049771, -98.199363] ]], // 022
	['Calle de Miguel Auza',								'Calle 2 Norte 2000',			'2009/03/calle-de-miguel-auza-calle-2-norte-2000.html',	[ [19.051343, -98.192687], [19.051754, -98.192448] ]], // 023
	['Calle de las Avellanas',								'Avenida 8 Oriente 1200',		'2009/09/calle-de-las-avellanas-avenida-8.html',		[ [19.043299, -98.189122], [19.043177, -98.188843] ]], // 024
	['Calle de los Aztecas',						'Calle 13 Norte 1 y 13 Sur 100-1500',	'2009/09/calle-de-los-aztecas-calle-13-norte-1-y.html',	[ [19.049713, -98.206881], [19.048838, -98.207348], [19.048696, -98.207358], [19.048032, -98.207667], [19.045195, -98.20919], [19.045068, -98.209536], [19.044371, -98.209982] ]], // 025
	['Calle del Baj&iacute;o',								'Avenida 12 Oriente 400',		'2009/09/calle-del-bajio-avenida-12-oriente-400.html',	[ [19.047434, -98.192904], [19.046633, -98.191547] ]], // 026
	['Calle del Baluarte',									'Calle 14 Norte 2000',			'2009/09/calle-del-baluarte-calle-14-norte-2000.html',	[ [19.047424, -98.186367], [19.048116, -98.185938] ]], // 027
	['Calle de Balvanera',									'Calle 16 Norte 1400-1800',		'2009/09/calle-de-balvanera-calle-16-norte-1400.html',  [ [19.044592, -98.186244], [19.046133, -98.185244] ]], // 028
	['Calle del Ba&ntilde;o de Carreto',					'Calle 5 Norte 600',			'2009/09/calle-del-bano-de-carreto-calle-5-norte.html',	[ [19.048339, -98.200277], [19.049034, -98.199875] ]], // 029
	['Calle del Ba&ntilde;o Chiquito',				'Callejón de la Avenida 5 Poniente 700','2009/09/calle-del-bano-chiquito-callejon-de-la.html',	[ [19.045428, -98.204566], [19.044807, -98.204947] ]], // 030
	['Calle del Ba&ntilde;o de la Luz',						'Calle 14 Norte 1',				'2009/09/calle-del-bano-de-la-luz-calle-14-norte.html',	[ [19.040238, -98.190434], [19.04092, -98.190034] ]], // 031
	['Calle del Ba&ntilde;o de San Antonio',				'Calle 3 Norte 2200',			'2009/09/calle-del-bano-de-san-antonio-calle-3.html', 	[ [19.053653, -98.195141], [19.05451, -98.194615] ]], // 032
	['Calle del Ba&ntilde;o Viejo',							'Avenida 24 Oriente 1',			'2009/09/calle-del-bano-viejo-avenida-24-oriente.html',	[ [19.053316, -98.193438], [19.052139, -98.192292] ]], // 033
	['Calle de la Barranca',								'Avenida 3 Oriente 1000-1600',	'2009/09/calle-de-la-barranca-avenida-3-oriente.html',	[ [19.040281, -98.192671], [19.038725, -98.189221] ]], // 034
	['Calle de la Barranca',								'Calle 14 Sur 300',				'2009/09/calle-de-la-barranca-calle-14-sur-100.html',	[ [19.039389, -98.190874], [19.038714, -98.191201] ]], // 035
	['Calle de la Barranquilla',							'Calle 16 Norte 2000',			'2009/09/calle-de-la-barranquilla-calle-16-norte.html',	[ [19.04695, -98.184707], [19.047614, -98.184265] ]], // 036
	['Calle de Bel&eacute;n',								'Avenida 4 Poniente 500', 		'2009/09/calle-de-belen-avenida-4-poniente-500.html',   [ [19.047571, -98.200787], [19.048306, -98.202217] ]], // 037 
	['Calle de las Bellas', 								'Avenida 16 Poniente 100', 		'2009/09/calle-de-las-bellas-avenida-16-poniente.html', [ [19.051287, -98.196516], [19.050558, -98.195127] ]], //038 
	['Calle de la Beneficencia',							'Avenida 12 Oriente 1400',		'2009/09/calle-de-la-beneficencia-avenida-12.html',		[ [19.044427, -98.188044], [19.043905, -98.186756] ]], //039
	['Calle de Berrioz&aacute;bal',							'Avenida 11 Poniente 500-900',	'2009/09/calle-de-berriozabal-avenida-11.html',			[ [19.042221, -98.20392], [19.04448, -98.208364] ]], //040
	['Calle de los Bizcocheros',							'Avenida 20 Oriente 1400',		'2009/09/calle-de-los-bizcocheros-avenida-20.html',		[ [19.04737, -98.186354], [19.046919, -98.184769] ]], //041
	['Plazuela del Boliche',								'Calle 8 Norte 1000',			'2009/09/plazuela-del-boliche-calle-8-norte-1000.html',	[ [19.046363, -98.191311], [19.045907, -98.191592] ]], //042
	['Calle de Juan Cris&oacute;stomo Bonilla',				'Calle 5 Norte 1',				'2009/09/calle-de-juan-crisostomo-bonilla-calle.html',	[ [19.046011, -98.201659], [19.046762, -98.201216] ]], //043
	['Calle de las Bonitas',								'Calle 14 Norte 200',			'2009/09/calle-de-las-bonitas-calle-14-norte-200.html',	[ [19.040984, -98.190002], [19.041511, -98.189707] ]], //044
	['Calle de las B&oacute;vedas de Bel&eacute;n',			'Calle 7 Norte 400',			'2009/10/calle-de-las-bovedas-de-belen-calle-7.html',	[ [19.048349, -98.202227], [19.049056, -98.201809] ]], //045
	['Calle de Nicol&aacute;s Bravo',						'Avenida 9 Poniente 1300-1500',	'2009/10/calle-de-nicolas-bravo-avenida-9.html',		[ [19.045811, -98.209105], [19.04734, -98.212106] ]], //046
	['Calle de Buenavista', 								'Calle 21 Sur 500',				'2009/10/calle-de-buenavisa-calle-21-sur-500.html', 	[ [19.050458, -98.214461], [19.049949, -98.214788] ]], //047
	['Calle de las Cabecitas',								'Calle 7 Sur 300',				'2009/10/calle-de-las-cabecitas-calle-7-sur-300.html',	[ [19.045951, -98.203625], [19.045241, -98.204041] ]], //048
	['Calle de los Cacahuateros',							'Calle 12 Norte 1',				'2009/10/calle-de-los-cacahuateros-calle-12.html',		[ [19.040768, -98.191482], [19.041453, -98.191064] ]], //049
	['Calle de la Caja del Agua',							'Avenida 16 Poniente 300', 		'2009/10/calle-de-la-caja-del-agua-avenida-16.html', 	[ [19.051327, -98.196599], [19.052068, -98.198015] ]], //050
	['Calle de la Calavera', 								'Calle 7 Sur 700',				'2013/09/calle-de-la-calavera-calle-7-sur-700.html',	[ [19.044485, -98.204513], [19.043742, -98.204958] ]], //051
	['Calle de Calceta',									'Avenida 10 Poniente 100',		'2013/09/calle-de-calceta-avenida-10-poniente-100.html',[ [19.048298, -98.196453], [19.049006, -98.197866] ]], //052
	
	/*['Plazuela del Calvario', 							'Calle 12 Norte 2400', 			'/2024/02/plazuela-del-calvario-calle-12-norte.html', 	[ [19.041364, -98.20043], [19.040667, -98.20083] ]], //053 */
	['Calle de la Calzada', 			'Avenida 22 Poniente 100, parte occidental, y 300', '/2024/02/calle-de-la-calzada-avenida-22-poniente.html',[ [19.052887, -98.193789], [19.054454, -98.196592] ]], //054
	['Calle del Camar&iacute;n', 							'Avenida 13 Oriente 200', 		'/2024/02/calle-del-camarin-avenida-13-oriente-200.html',[[19.039059, -98.199714], [19.038359, -98.198354] ]], //055
	['Calle de la Camelia', 						'Calle 17 Norte 1 y 17 Sur 100-2100', 	'/2024/02/calle-de-la-camelia-calle-17-norte-1-y.html', [ [19.052804, -98.208978], [19.042847, -98.214724] ]], //056
	['Calle de la Campana', 								'Calle 12 Sur 700', 			'/2024/02/calle-de-la-campana-calle-12-sur-700.html', 	[ [19.038471, -98.192781], [19.037715, -98.1931] ]], //057
	['Calle del Campo', 									'Calle 16 Sur 900', 			'/2024/02/calle-del-campo-calle-16-sur-900.html', 		[ [19.036384, -98.190428], [19.035591, -98.190836] ]], //058
	['Calle de las Canalitas', 								'Calle 16 Norte 2200', 			'/2015/02/calle-de-las-canalitas-calle-16-norte.html', 	[ [19.047664, -98.184238], [19.048329, -98.183787] ]], //059
	['Calle de la Canoa', 									'Calle 9 Norte 400', 			'/2014/11/calle-de-la-canoa-calle-9-norte-400.html', 	[ [19.049138, -98.203732], [19.04985, -98.203316] ]], //060
	['Calle de las Canteras', 								'Calle 14 Norte 2200', 			'/2014/11/calle-de-las-canteras-calle-14-norte.html', 	[ [19.048161, -98.185906], [19.049064, -98.185348], [19.0493, -98.185099] ]], //061
	['Calle de los Canteros', 								'Avenida 2 Oriente 1800-2000', 	'/2014/11/calle-de-los-canteros-avenida-2-oriente.html',[ [19.039356, -98.186842], [19.038121, -98.184417] ]], //062
	['Calle de las Ca&ntilde;er&iacute;as', 				'Calle 14 Norte 1400', 			'/2014/11/calle-de-las-canerias-calle-14-norte.html', 	[ [19.045109, -98.187867], [19.045172, -98.187797], [19.045854, -98.187381] ]], //063
	['Calle de la Capilla de Dolores',						'Avenida 4 Poniente 700', 		'/2014/11/calle-de-la-capilla-de-dolores-avenida.html', [ [19.048329, -98.202262], [19.049079, -98.203708] ]], //064
	['Capilla de los Naturales', 							'Avenida 20 Oriente 1', 		'/2014/11/calle-de-la-capilla-de-los-naturales.html', 	[ [19.052081, -98.19417],  [19.05132, -98.19274] ]], //065
	['Calle de la Caporala', 								'Avenida 12 Poniente 100', 		'/2014/11/calle-de-la-caporala-avenida-12.html', 		[ [19.049041, -98.196039], [19.049774, -98.197421] ]], //066
	['Calle de las Capuchinas', 						'Calle del 16 de Septiembre 900', 	'/2014/11/calle-de-las-capuchinas-calle-del-16-de.html',[ [19.041359, -98.200428], [19.040664, -98.200825] ]], //067
	['Calle de C&aacute;rdenas', 							'Avenida 22 Oriente 1400', 		'/2014/11/calle-de-cardenas-avenida-22-oriente.html', 	[ [19.048116, -98.185871], [19.047657, -98.184286] ]], //068
	['Calle 1ra. y 2da. del Carmen', 				'Calle del 16 de Septiembre 1100-1300', '/2014/11/calle-1a-y-2a-del-carmen-calle-del-16.html',	[ [19.040598, -98.200867], [19.03914, -98.201723] ]], //069
	['Plazuela del Carmen', 							'Calle del 16 de Septiembre 1500', 	'/2014/11/plauzuela-del-carmen-calle-del-16-de.html', 	[ [19.039072, -98.201761], [19.038349, -98.202174] ]], //070
	['Calle del Carolino', 									'Avenida 3 Oriente 400', 		'/2014/11/calle-del-carolino-avenida-3-oriente-400.html', [ [19.04212, -98.19601], [19.041638, -98.195087] ]], //071
	['Calle de las Carreras', 							'Avenida 17 Poniente 1500-1700', 	'/2023/11/calle-de-las-carreras-avenida-17.html', 		[ [19.043603, -98.212412], [19.045129, -98.215367] ]], //072
	
	/* ['Calle de Carrillo', 							'Avenida del Ayuntamiento 1400', 	'/2023/12/calle-de-carrillo-avenida-del.html', 			[ [], [] ]], //073 */
	['Calle de los Carros', 								'Avenida 12 Oriente 1', 		'/2014/12/calle-de-los-carros-avenida-12-oriente-1.html',[ [19.048998, -98.195951],[19.048275, -98.194529] ]], //074
 	['Calle de la Cerca de Santo Domingo', 					'Calle 3 Norte 400-600', 		'/2014/12/calle-de-la-cerca-de-santo-domingo.html', 	[ [19.0468, -98.199213],   [19.048222, -98.198354] ]], //075
	['Calla de los Cerderos', 								'Avenida 20 Poniente 1100', 	'/2014/12/calle-de-los-cerderos-avenida-20.html', 		[ [19.056163, -98.20183], 	[19.056769, -98.203102] ]], //076
	['Calle Cerrada de las Damas', 							'Calle 16 Norte, 800-1200', 	'/2014/12/calle-cerrada-de-las-damas-calle-16.html', 	[ [19.042835, -98.187312], 	[19.043007, -98.187269], [19.043859, -98.186735] ]], //077
	['Calla Cerrada de San Antonio', 					'Calle del 5 de Mayo 2000-2200', 	'/2014/12/calle-cerrada-de-san-antonio-calle-del.html', [ [19.052134, -98.194186], 	[19.053313, -98.193483] ]], //078
	['Calle del Cinco de Mayo', 							'Avenida 5 Poniente 500', 		'/2014/12/calle-del-cinco-de-mayo-avenida-5.html',		[ [19.044478, -98.202597], [19.045195, -98.204027] ]], //079
	['Calle del Clavel', 									'Avenida 6 Oriente 2000', 		'/2014/12/calle-del-clavel-avenida-6-oriente-2000.html',[ [19.040829, -98.184997], [19.040365, -98.183605] ]], //080
	['Calle de las Cocheras', 								'Avenida 9 Poniente 700', 		'/2014/12/calle-de-las-cocheras-avenida-9.html', 		[ [19.043737, -98.204998], [19.044467, -98.206433] ]], //081
	['Calle de la Colectur&iacute;a', 						'Calle 3 Sur 1100', 			'/2014/12/calle-de-la-colecturia-calle-3-sur-1100.html',[ [19.041405, -98.20242], [19.0407, -98.202844] ]], //082
	['Calle del Colegio de San Juan', 						'Avenida 5 Oriente 1', 			'/2014/12/calle-del-colegio-de-san-juan-avenida-5.html',[ [19.042883, -98.199483], [19.042153, -98.198048] ]], //083
	['Calle de los Coleros', 							'Avenida 18 Poniente 1100-1300', 	'/2014/12/calle-de-los-coleros-avenida-18.html', 		[ [19.055225, -98.202399], [19.056551, -98.205049] ]], //084
	['Calle de Crist&oacute;bal Col&oacute;n',				'Calle 7 Norte 2000-2800', 		'/2014/12/calle-de-cristobal-colon-norte-2000-2800.html',[ [19.054517, -98.198671], [19.058008, -98.196627] ]], //085
	['Calle de la Colonia', 						'Calle 15 Norte 1-15 Sur 100-2100', 	'/2014/12/calle-de-la-colonia-calle-15-norte-1-15.html',[ [19.050509, -98.208415], [19.041321, -98.213696] ]], //086
	['Calle de Comonfort', 									'Avenida 22 Poniente 100', 		'/2014/12/calle-de-comonfort-avenida-22-poniente.html', [ [19.052864, -98.193786], [19.053592, -98.195125] ]], //087
	['Calle de la Compa&ntilde;&iacute;a (Refugio)', 		'Calle 5 Norte 1800-2000', 		'2014/12/calle-de-la-compania-regufio-calle-5.html', 	[ [19.052951, -98.197524], [19.054437, -98.196642] ]], //088
	['Calle de la Concepci&oacute;n', 						'Avenida 7 Poniente 100', 		'/2014/12/calle-de-la-concepcion-avenida-7.html', 		[ [19.042173, -98.199996], [19.042933, -98.201458] ]], //089
	['Calle de la Concordia', 								'Calle 3 Sur 900', 				'/2014/12/calle-de-la-concordia-calle-3-sur-900.html', 	[ [19.04217, -98.201962],  [19.041463, -98.202391] ]], //090
	['Calzada de los Conejos', 								'Avenida 22 Oriente 1800', 		'/2014/12/calzada-de-los-conejos-avenida-22.html', 		[ [19.047408, -98.183219], [19.046965, -98.181534] ]], //091
	['Calle del Coralillo', 								'Calle 3 Norte 2000', 			'/2014/12/calle-del-coralillo-calle-3-norte-2000.html', [ [19.052864, -98.195586], [19.053589, -98.195181] ]], //092
	['Calle del Coraz&oacute;n de Jes&uacute;s', 			'Calle 9 Norte 1000', 			'/2014/12/calle-del-corazon-de-jesus-calle-9.html', 	[ [19.051384, -98.20242],  [19.052096, -98.202002] ]], //093
	['Calle Ram&oacute;n Carmona', 							'Avenida 11 Poniente 1100', 	'/2014/12/calle-de-ramon-corona-avenida-11.html', 		[ [19.044599, -98.208627], [19.045015, -98.209453] ]], //094
	['Calle de la Corregidora', 							'Avenida 8 Poniente 1100-1500', '/2014/12/calle-de-la-corregidora-avenida-8.html', 		[ [19.051505, -98.204569], [19.053529, -98.208541] ]], //095
	['Calle de Correo Viejo', 								'Avenida 5 Poniente 100', 		'/2014/12/calle-del-correo-viejo-avenida-5.html', 		[ [19.042923, -98.199556], [19.043684, -98.201015] ]], //096
	['Calle del Costado de Balvanera', 						'Avenida 18 Oriente 1600', 		'/2014/12/calle-del-costado-de-balvanera-avenida.html', [ [19.046151, -98.185195], [19.045854, -98.184163] ]], //097
	['Calle del Costado del Coliseo', 						'Calle 8 Norte 600', 			'/2014/12/calle-del-costado-del-coliseo-calle-8.html', 	[ [19.044234, -98.192365], [19.044944, -98.191925] ]], //098
	['Calle del Costado de la Cruz', 						'Calle 12 Norte 1600', 			'/2014/11/calle-del-costado-de-la-cruz-calle-12.html', 	[ [19.045565, -98.188285], [19.046848, -98.187727] ]], //099
	['Calle del Costado de la Merced', 						'Avenida 10 Poniente 500', 		'/2024/11/calle-del-costado-de-la-merced-avenida.html', [ [19.049817, -98.199441], [19.05055, -98.200897] ]], //100
/*['Calle del Costado de San Agust&iacute;n', 'Avenida 3 Poniente 500', '/2014/12/calle-del-costado-de-san-agustin.html', [ [], [] ]], //101
['Calle del Costado de San Juan de Dios', 'Avenida 16 Oriente 1', '/2014/11/calle-del-costado-de-san-juan-de-dios.html', [ [], [] ]], //102
['Calle del Costado de San Juan del R&iacute;o', 'Avenida 20 Oriente 1200', '/2014/11/calle-del-costado-de-san-juan-del-rio.html', [ [], [] ]], //103
['Calle del Costado de San Pedro', 'Avenida 2 Oriente 200', '/2014/12/calle-del-costado-de-san-pedro-avenida.html', [ [], [] ]], //104
['Calle del Costado de Santa Rosa', 'Avenida 12 Poniente 300', '/2014/12/calle-del-costado-de-santa-rosa-avenida.html', [ [], [] ]], //105
['Calle del Costado de Santiago', 'Avenida 19 Poniente 1300', '/2014/12/calle-del-costado-de-santiago-avenida.html', [ [], [] ]], //106
['Calle del Costado del Se&ntilde;or de los Trabajos', 'Avenida 12 Poniente 900', '/2014/12/calle-del-costado-del-senor-de-los.html', [ [], [] ]], //107
['Calle de las Cruces', 'Avenida 4 Oriente 200', '/2014/12/calle-de-las-cruces-avenida-4-oriente.html', [ [], [] ]], //108
['Calle de las Cruces (San Antonio)', 'Avenida 20 Poniente 100 (parte oriental)', '/2014/12/calle-de-las-cruces-san-antonio-avenida.html', [ [], [] ]], //109
['Calle de la Cruz Alta', 'Calle 18 Norte 1600', '/2014/12/calle-de-la-cruz-alta-calle-18-norte.html', [ [], [] ]], //110
['Calle de la Cruz Blanca', 'Avenida 26 Poniente 900', '/2014/12/calle-de-la-cruz-blanca-avenida-26.html', [ [], [] ]], //111
['Calle de la Cruz de Loza', 'Calle 9 Norte 1400-1600', '/2014/12/calle-de-la-cruz-alta-de-loza-calle-9.html', [ [], [] ]], //112
['Calle de la Cruz del Milagro (Analco)', 'Avenida 10 Oriente 1800', '/2014/12/calle-de-la-cruz-del-milagro-analco.html', [ [], [] ]], //113
['Calle de la Cruz del Milagro (Santa Ana)', 'Calle 13 Norte 1800-2600', '/2014/12/calle-de-la-cruz-del-milagro-santa-ana.html', [ [], [] ]], //114
['Calle de la Cruz de Piedra', 'Avenida 8 Poniente 100', '/2014/12/calle-de-la-cruz-de-piedra-avenida-8.html', [ [], [] ]], //115
['Calle de la Cruz Verde', 'Avenida 16 Oriente 1600', '/2014/12/calle-de-la-cruz-verde-avenida-16.html', [ [], [] ]], //116
['Calle del Cuauht&eacute;moc', 'Avenida 15 Oriente 1-200 y 15 Poniente 100-1300', '/2014/12/calle-de-cuauhtemoc-avenida-15-oriente.html', [ [], [] ]], //117
['Calle del Cuernito', 'Avenida de Ayuntamiento 1200', '/2014/12/calle-del-cuernito-avenida-de.html', [ [], [] ]], //118
['Calle del Curato de la Cruz', 'Avenida 16 Oriente 1200', '/2014/12/calle-del-curato-de-la-cruz-avenida-16.html', [ [], [] ]], //119
['Calle del Curato Viejo del Alto', 'Avenida 18 Oriente 1400', '/2014/12/calle-del-curato-viejo-del-alto-avenida.html', [ [], [] ]], //120
['Calle del Curato Viejo de Analco', 'Avenida 7 Oriente 1400', '/2014/12/calle-del-curato-viejo-de-analco.html', [ [], [] ]], //121
['Calle de Chihuahua', 'Avenida 10 Oriente 200', '/2014/12/cale-de-chihuaha-avenida-10-oriente-200.html', [ [], [] ]], //122
['Calle de las Chinitas', 'Avenida 11 Poniente 300', '/2014/12/calles-de-las-chinitas-avenida-11.html', [ [], [] ]], //123
['Calle de Chirimoyo, Xanenetla', '', '/2014/12/calle-del-chirimoyo-xanenetla.html', [ [], [] ]], //124
['Calle de Cholula', 'Avenida de la Reforma 300', '/2014/12/calle-de-cholula-avenida-de-la-reforma.html', [ [], [] ]], //125
['Calle de la Cholulteca', 'Avenida 16 Oriente 200', '/2014/12/calle-de-la-cholulteca-avenida-16.html', [ [], [] ]], //126
['Calle de Chorro', 'Avenida 16 Sur 500', '/2014/12/calle-de-chorro-calle-16-sur-500.html', [ [], [] ]], //127
['Calle de la Chula', 'Calle 116 Norte 1', '/2014/12/calle-de-la-chula-calle-16-norte-1.html', [ [], [] ]], //128
['Calle de las Damas', 'Avenida 10 Oriente 1400', '/2014/12/calle-de-las-damas-avenida-10-oriente.html', [ [], [] ]], //129
['Calle del De&aacute;n', 'Avenida 5 Oriente 200', '/2014/12/calle-del-dean-avenida-5-oriente-200.html', [ [], [] ]], //130
['Calle del Destierro', 'Avenida 14 Poniente 300', '/2014/12/calle-del-destierro-avenida-14-poniente.html', [ [], [] ]], //131
['Calle de Porfirio D&iacute;az', 'Avenida 2 Poniente 100', '/2014/12/calle-de-porfirio-diaz-avenida-2.html', [ [], [] ]], //132
['Calle de Francisco D&iacute;az San Cipri&aacute;n', 'Avenida 2 Oriente 1000', '/2014/12/calle-de-francisco-diaz-san-ciprian.html', [ [], [] ]], //133
['Calle de Dom&iacute;nguez', 'Calle 14 Norte 1000', '/2014/12/calle-de-dominguez-calle-14-norte-1000.html', [ [], [] ]], //134
['Calle de las Doncellas', 'Calle 7 Norte 600', '/2014/12/calle-de-las-doncellas-calle-7-norte-600.html', [ [], [] ]], //135
['Calle del Dos de Abril', 'Avenida 3 Poniente 1300-1900', '/2014/12/calle-del-dos-de-abril-avenida-3.html', [ [], [] ]], //136
['Calle de Echeverr&iacute;a', 'Calle 4 Norte 1', '/2014/12/calle-de-echeverria-calle-4-norte-1.html', [ [], [] ]], //137
['Calle de Espadas', 'Calle 4 Norte 1600', '/2014/12/calle-de-espadas-calle-14-norte-1600.html', [ [], [] ]], //138
['Calle de la Espalda de Balvanera', 'Calle 18 Norte 1800', '/2014/12/calle-de-la-espalda-de-balvanera-calle.html', [ [], [] ]], //139
['Calle de la Espalda de la Barranquilla', 'Calle 18 Norte 2000', '/2014/12/calle-de-la-espalda-de-la-barranquilla.html', [ [], [] ]], //140
['Calle de la Espalda del Coliseo', 'Avenida 6 Oriente 600', '/2014/12/calle-de-la-espalda-del-coliseo-avenida.html', [ [], [] ]], //141
['Calle de la Espalda de la Cruz', 'Avenida 18 Oriente 1200', '/2014/12/calle-de-la-espalda-de-la-cruz-avenida.html', [ [], [] ]], //142
['Calle de la Espalda del Cuartel de San Jos&eacute;', 'Avenida 24 Oriente 200', '/2014/12/calle-de-la-espalda-del-cuartel-de-san.html', [ [], [] ]], //143
['Calle de la Espalda del Jard&iacute;n Bot&aacute;nico', 'Calle 5 Norte 1400', '/2014/12/calle-de-la-espalda-del-jardin-botanico.html', [ [], [] ]], //144
['Calle de la Espalda de las Piadosas', 'Avenida 24 Oriente 1200', '/2014/12/calle-de-la-espalda-de-las-piadosas.html', [ [], [] ]], //145
['Calle del Espejo', 'Calle 4 Norte 400', '/2014/12/calle-del-espejo-calle-4-norte-400.html', [ [], [] ]], //146
['Calle de Esp&iacute;ndola', 'Avenida 2 Poniente 900', '/2014/12/calle-de-espindola-avenida-2-poniente.html', [ [], [] ]], //147
['Calle del Esp&iacute;ritu Santo', 'Calle 4 Sur 100', '/2015/01/calle-del-espiritu-santo-calle-4-sur-100.html', [ [], [] ]], //148
['Calle del Esqueleto', 'Avenida 12 Oriente (parte oriental)', '/2015/01/calle-del-esqueleto-avenida-12-oriente.html', [ [], [] ]], //149
['Calle de la Estampa', 'Calle 7 Norte 1', '/2015/01/leemos-en-la-obra-del-sr.html', [ [], [] ]], //150
['Calle del Estanco de Hombres', 'Avenida 4 Oriente 1', '/2015/01/calle-del-estanco-de-hombres-avenida-4.html', [ [], [] ]], //151
['Calle del Estanco de Mujeres', 'Avenida 6 Oriente 1', '/2015/01/calle-del-estanco-de-mujeres-avenida-6.html', [ [], [] ]], //152
['Calle del Estanque de los Pescaditos', 'Calle 4 Norte 400-800', '/2015/01/calle-del-estanque-de-los-pescaditos.html', [ [], [] ]], //153
['Calle de la F&aacute;brica de Loza', 'Calle 4 Norte 1000', '/2015/01/calle-de-la-fabrica-de-loza-calle-4.html', [ [], [] ]], //154
['Plazuela del Factor', 'Calle 8 Norte 400', '/2015/01/plazuela-del-factor-calle-8-norte-400.html', [ [], [] ]], //155
['Calle del Ferrocarril', 'Avenida 6 Poniente 1100-1700', '/2015/01/calle-del-ferrocarril-avenida-6.html', [ [], [] ]], //156
['Calle de las Flores', 'Calle 22 Norte 400-1200', '/2015/01/calle-de-las-flores-calle-22-norte-400.html', [ [], [] ]], //157
['Calle del Fraile', 'Calle 16 Sur 100-300', '/2015/01/calle-del-fraile-calle-16-sur-100-300.html', [ [], [] ]], //158
['Calle de Fray Mart&iacute;n', 'Calle 7 Norte 1600', '/2015/01/calle-de-fray-martin-calle-7-norte-1600.html', [ [], [] ]], //159
['Frente a Catedral', 'Calle del 16 de Septiembre 300', '/2015/01/frente-catedral-calle-del-16-de.html', [ [], [] ]], //160
['Callej&oacute;n del Fresno', 'Xanenetla', '/2015/01/callejon-del-fresno-xanenetla.html', [ [], [] ]], //161
['Calle de Fuenleal', 'Calle 3 Norte 1', '/2015/01/calle-del-fuenleal-calle-3-norte-1.html', [ [], [] ]], //162
['Calle de la Fuente', 'Calle 7 Sur 100', '/2015/01/calle-de-la-fuente-calle-7-sur-100.html', [ [], [] ]], //163
['Calle de la Fuente Alta', 'Calle 5 Norte 1200', '/2015/01/calle-de-la-fuente-alta-calle-5-norte.html', [ [], [] ]], //164
['Calle de la Fuente de Bel&eacute;n', 'Avenida 6 Poniente 500', '/2015/01/calle-de-la-fuente-de-belen-avenida-6.html', [ [], [] ]], //165
['Calle de la Fuente de Carrasco', 'Calle 5 Norte 200', '/2015/01/calle-de-la-fuente-de-carrasco-calle-5.html', [ [], [] ]], //166
['Calle de la Fuente de San Cayetano', 'Avenida 11 Poniente 100', '/2015/01/calle-de-la-fuente-de-san-cayetano.html', [ [], [] ]], //167
['Calle de Cosme F&uacute;rlong', 'Avenida 8 Oriente 200', '/2015/01/calle-de-cosme-furlong-avenida-8.html', [ [], [] ]], //168
['Calle de Galicia', 'Calle 5 Sur 900', '/2015/01/calle-de-galicia-calle-5-sur-900.html', [ [], [] ]], //169
['Calle del Gallito', 'Calle 12 Norte 200', '/2015/01/calle-del-gallito-calle-12-norte-200.html', [ [], [] ]], //170
['Calle de los Gallos', 'Avenida 6 Poniente 300', '/2015/01/calle-de-los-gallo-avenida-6-poniente.html', [ [], [] ]], //171
['Calle de la Garita (Analco) I', 'Calle 16 Sur 700', '/2015/01/calle-de-la-garita-analco-i-calle-16.html', [ [], [] ]], //172
['Calle de la Garita (Analco) II', 'Calle 14 Sur 900', '/2015/01/calle-de-la-garita-analco-ii-calle-14.html', [ [], [] ]], //173
['Calle de la Garita (Santiago)', 'Avenida 19 Poniente 1500-1700', '/2015/01/calle-de-la-garita-santiago-avenida-19.html', [ [], [] ]], //174
['Calle del Gato', 'Calle 3 Sur 1300', '/2015/01/calle-del-gato-calle-3-sur-1300.html', [ [], [] ]], //175
['Calle de Gavito', 'Calle del 5 de Mayo 1200', '/2015/01/calle-de-gavito-calle-del-5-de-mayo-1200.html', [ [], [] ]], //176
['Calle del Geranio', 'Calle 19 Norte 1 y 19 Sur 100-1900', '/2015/01/calle-de-geranio-calle-19-norte-1-y-19.html', [ [], [] ]], //177
['Calle de las Gobernadoras', 'Calle 16 Norte 2400', '/2015/01/calle-de-las-gobernadoras-calle-16.html', [ [], [] ]], //178
['Calle de los Gozos', 'Avenida 13 Poniente 100', '/2015/01/calle-de-los-gozos-avenida-13-poniente.html', [ [], [] ]], //179
['Calle de Juan Granados', 'Calle 5 Norte 2200-2400', '/2015/01/calle-de-juan-granados-calle-5-norte.html', [ [], [] ]], //180
['Plazuela de la Granja', 'Xanenetla', '/2015/01/plazuela-de-la-granja-xanenetla.html', [ [], [] ]], //181
['Calle de Guadalupe', 'Avenida de la Reforma 900', '/2015/01/calle-de-guadalupe-avenida-de-la.html', [ [], [] ]], //182
['Calle Guevara', 'Calle del 5 de Mayo 1', '/2015/01/calle-de-guevara-calle-de-5-de-mayo-1.html', [ [], [] ]], //183
['Calle de Luis Haro', 'Avenida 5 Poniente 700', '/2015/01/calle-de-luis-haro-avenida-5-poniente.html', [ [], [] ]], //184
['Calle de Hern&aacute;ndez', 'Avenida 9 Oriente 1400', '/2015/01/calle-de-hernandez-avenida-9-oriente.html', [ [], [] ]], //185
	['Avenida Hidalgo', 									'Avenida 18 Poniente 500-700', 	'2015/01/avenida-hidalgo-avenida-18-poniente-500.html', [ [19.052928, -98.197584], [19.054473, -98.200594] ]], //186
['Calle de Higareda', 'Calle 5 Sur 1500', '/2015/01/calle-de-higareda-calle-5-sur-1500.html', [ [], [] ]], //187
['Calle del Horno de Vidrio', 'Avenida 10 Oriente 1', '/2015/01/calle-del-horno-de-vidrio-avenida-10.html', [ [], [] ]], //188
['Calle de los Hornos', 'Avenida 24 Poniente 500', '/2015/01/calle-de-hornos-avenida-24-poniente-500.html', [ [], [] ]], //189
['Calle del Hospicio', 'Avenida de la Reforma 700', '/2015/01/calle-del-hospicio-avenida-de-la.html', [ [], [] ]], //190
['Calle del Hospitalito (Alto)', 'Avenida 20 Oriente 1600', '/2015/01/calle-del-hospitalito-alto-avenida-20.html', [ [], [] ]], //191
['Calle del Hospitalito Viejo', 'Calle 9 Norte 2400', '/2015/01/calle-del-hospitalito-viejo-calle-9.html', [ [], [] ]], //192
['Calle del Hostiero', 'Xanenetla', '/2015/01/calle-del-hostiero-xanenetla.html', [ [], [] ]], //193
['Calle de las Huertas', 'Avenida 10 Oriente 400', '/2015/01/calle-de-las-huertas-avenida-10-oriente.html', [ [], [] ]], //194
['Calle de las Huertas (Sta. Ana)', 'Avenida 24 Poniente 900', '/2015/01/calle-de-las-huertas-sta-ana-avenida-24.html', [ [], [] ]], //195
['Calle de Humboldt', 'Calle 7 Norte 1200', '/2015/01/calle-de-humboldt-calle-7-norte-1200.html', [ [], [] ]], //196
['Calle de Ibarra', 'Calle 5 Sur 300', '/2015/01/calle-de-ibarra-calle-5-sur-300.html', [ [], [] ]], //197
['Calle de Iglesias', 'Avenida 2 Poniente 500', '/2015/01/calle-de-las-iglesias-avenida-2.html', [ [], [] ]], //198
['Calle de Illescas', 'Calle 12 Sur 300', '/2015/01/calle-de-illescas-calle-12-sur-300.html', [ [], [] ]], //199
['Calle de la Independencia', 'Avenida 2 Oriente 1', '/2015/01/calle-de-la-independencia-avenida-2.html', [ [], [] ]], //200
['Calle de la Industria', 'Avenida 2 Poniente 1100-1900', '/2015/01/calle-de-la-industria.html', [ [], [] ]], //201
['Calle de Infantes', 'Avenida 3 Oriente 200', '/2015/01/calle-de-infantes-avenida-3-oriente-200.html', [ [], [] ]], //202
['Calle del Jacal', 'Avenida 11 Oriente 200', '/2015/01/calle-del-jacal-avenida-11-oriente-200.html', [ [], [] ]], //203
['Calle de las Jarcier&iacute;as', 'Avenida del Ayuntamiento 200', '/2015/01/calle-de-las-jarcierias-avenida-del.html', [ [], [] ]], //204
['Calle del Jard&iacute;n Bot&aacute;nico', 'Calle 3 Norte 1400', '/2015/02/calle-del-jardin-botanico-calle-3-norte.html', [ [], [] ]], //205
['Calle del Jazm&iacute;n', 'Avenida 8 Oriente 2000', '/2015/02/calle-del-jazmin-avenida-8-oriente-2000.html', [ [], [] ]], //206
	['Callej&oacute;n de Jes&uacute;s', 					'Avenida 18 Oriente 1', 		'2015/02/callejon-de-jesus-avenida-18-oriente-1.html', 	[ [19.051327, -98.194629], [19.050564, -98.193216] ]], //207
['Calle de Jes&uacute;s Mar&iacute;a', 'Calle 4 Sur 500', '/2015/02/calle-de-jesus-maria-calle-4-sur-500.html', [ [], [] ]], //208
['Calle de Jim&eacute;nez de las Cuevas', 'Avenida 14 Oriente 200', '/2015/02/calle-de-jimenez-de-las-cuevas-avenida.html', [ [], [] ]], //209
['Calle de Benito Ju&aacute;rez', 'Calle 11 Norte 1-2600 Cuadra 1', '/2015/02/calle-de-benito-juarez-calle-11-norte-1.html', [ [], [] ]], //210
['Calle de Benito Ju&aacute;rez', 'Calle 11 Norte 1-2600', '/2015/02/cuadras-200-800.htmlot.com/2015/02/calle-de-benito-juarez-calle-11-norte-1.html', [ [], [] ]], //211
['Calle de Benito Ju&aacute;rez', 'Calle 11 Norte 1-2600 Cuadra 1000', '/2015/02/en-la-mitad-sur-de-la-acera-oriente.html', [ [], [] ]], //212
['Calle de Benito Ju&aacute;rez', 'Calle 11 Norte 1-2600. Cuadra 1200-1400', '/2015/02/calle-de-benito-juarez-calle-11-norte-1_19.html', [ [], [] ]], //213
['Calle de Benito Ju&aacute;rez', 'Calle 11 Norte 1-2600. Cuadra 1600', '/2015/03/calle-de-benito-juarez-calle-11-norte-1.html', [ [], [] ]], //214
['Calle de Benito Ju&aacute;rez', 'Calle 11 Norte 1-2600. Cuadra 1800', '/2015/03/calle-de-benito-juarez-calle-11-norte-1_7.html', [ [], [] ]], //215
['Calle de Benito Ju&aacute;rez', 'Calle 11 Norte 1-2600. Cuadra 2000', '/2015/03/calle-de-benito-juarez-calle-11-norte-1_35.html', [ [], [] ]], //216
['Calle de Benito Ju&aacute;rez', 'Calle 11 Norte 1-2600. Cuadra 2200', '/2015/03/calle-de-benito-juarez-calle-11-norte-1_52.html', [ [], [] ]], //217
['Calle de Benito Ju&aacute;rez', 'Calle 11 Norte 1-2600. Cuadra 2400', '/2015/03/calle-de-benito-juarez-calle-11-norte-1_16.html', [ [], [] ]], //218
['Calle de Benito Ju&aacute;rez', 'Calle 11 Norte 1-2600. Cuadra 2600', '/2015/03/calle-de-benito-juarez-calle-11-norte-1_85.html', [ [], [] ]], //219
['Calle de Jurado', 'Calle 14 Norte 1800', '/2015/03/calle-de-jurado-calle-14-norte-1800.html', [ [], [] ]], //220
['Calle de Lafragua', 'Avenida 3 Poniente 100', '/2015/03/calle-de-lafragua-avenida-3-poniente-100.html', [ [], [] ]], //221
['Calle de Lezama', 'Texcoco', '/2015/03/calle-de-lezama-texcoco.html', [ [], [] ]], //222
['Calle de las Lagartijas', 'Calle del 5 de Mayo 2400', '/2015/03/calle-de-las-lagartijas-calle-del-5-de.html', [ [], [] ]], //223
['Calle de la Libertad', 'Avenida 7 Poniente 500', '/2015/03/calle-de-la-libertad-avenida-7-poniente.html', [ [], [] ]], //224
['Calle de la Limpia', 'Calle 3 Sur 700', '/2015/03/calle-de-la-limpia-calle-3-sur-700.html', [ [], [] ]], //225
['Calle de Loreto', 'Calle 2 Norte 2600', '/2015/03/calzada-de-loreto-calle-2-norte-2600.html', [ [], [] ]], //226
['Calle de los Loros', '9 sur 100', '/2013/04/calle-de-los-loros-9-sur-100.html', [ [], [] ]], //227
['Calle de la Luz', 'Avenida 2 Oriente 1400-1600', '/2015/03/calle-de-la-luz-avenida-2-oriente-1400.html', [ [], [] ]], //228
['Calle de Ignacio de la Llave', 'Callej&oacute;n de la Avenida 20 Poniente 100', '/2015/03/calle-de-ignacio-de-la-llave-callejon.html', [ [], [] ]], //229
['Calle de Malpica', '7 Norte 200', '/2013/04/calle-de-malpica-7-norte-200.html', [ [], [] ]], //230
['Calle de los Mamoneros', 'Calle  12 Sur 100', '/2015/03/calle-de-los-mamoneros-calle-12-sur-100.html', [ [], [] ]], //231
['Calle del Manantial', 'Avenida 26 Poniente 700', '/2015/03/calle-del-manantial-avenida-26-poniente.html', [ [], [] ]], //232
['Calle de Manuel Maneyro', 'Avenida 14 Oriente 1', '/2015/04/calle-de-manuel-maneyro-avenida-14.html', [ [], [] ]], //233
['Calle de Jos&eacute; Manso', 'Calle 6 Norte 400', '/2025/07/calle-de-jose-manso-calle-6-norte-400.html', [ [], [] ]], //234
['Calle de Manzano', 'Avenida 26 Oriente 200', '/2015/07/calle-de-manzano-avenida-26-oriente-200.html', [ [], [] ]], //235
['Calle del Marqu&eacute;s', 'Calle 4 Norte 1200-1600', '/2015/07/calle-del-marques-calle-4-norte-1200.html', [ [], [] ]], //236
['Calle de Rosendo M&aacute;rquez', 'Calle 7 Norte 1000', '/2015/07/calle-de-rosendo-marquez-calle-7-norte.html', [ [], [] ]], //237
['Calle de Murcio Mart&iacute;nez', 'Avenida 5 Poniente 1300-1900', '/2015/07/calle-de-mucio-martinez-avenida-5.html', [ [], [] ]], //238
	['Calle de Martinica', 									'Calle 7 Norte 1800', 			'2015/07/calle-de-martinica-calle-7-norte-1800.html', 	[ [19.053794, -98.199095], [19.054442, -98.198695] ]], //239
['Plazuela de los M&aacute;rtires de Tacubaya', 'Calle 3 Norte 2400 y Avenida 24 Poniente 100', '/2015/07/plazuela-de-los-martires-de-tacubaya.html', [ [], [] ]], //240
['Calle de Mata', 'Avenida 5 Oriente 400', '/2015/07/calle-de-mata-avenida-5-oriente-400.html', [ [], [] ]], //241
['Calle de Mena', 'Calle 10 Sur 300', '/2015/07/calle-de-mena-calle-10-sur-300.html', [ [], [] ]], //242
['Calle de Juan N. M&eacute;ndez', 'Calle 11 Sur 100-900', '/2015/07/calle-de-mena-calle-10-sur-300.html', [ [], [] ]], //243
['Callej&oacute;n de Mendoza', 'Callej&oacute;n de la Avenida 2 Poniente 300', '/2015/07/callejon-de-mendoza-callejon-de-la.html', [ [], [] ]], //244
['Calle de los Mercaderes', 'Calle 2 Norte 1-200', '/2015/07/calle-de-los-mercaderes-calle-2-norte-1.html', [ [], [] ]], //245
['Calle de la Merced', 'Calle 5 Norte 1000', '/2015/07/calle-de-la-merced-calle-2-norte-1000.html', [ [], [] ]], //246
['Calle de Merino', 'Calle 3 Norte 800', '/2015/07/calle-de-merino-calle-3-norte-800.html', [ [], [] ]], //247
['Calle del Mes&oacute;n del &aacute;ngel', 'Avenida 5 Oriente 1200', '/2015/07/calle-del-meson-del-angel-avenida-5.html', [ [], [] ]], //248
['Calle del Mes&oacute;n de Priego', 'Avenida 9 Oriente 800-1000', '/2015/07/calle-del-meson-del-priego-avenida-9.html', [ [], [] ]], //249
['Calle del Mes&oacute;n de Santa Teresa', 'Avenida 8 Oriente 1', '/2015/07/calle-del-meson-de-santa-teresa-avenida.html', [ [], [] ]], //250
['Calle del Mes&oacute;n de Sosa', 'Avenida 4 Poniente 900', '/2015/07/calle-del-meson-de-sosa-avenida-4.html', [ [], [] ]], //251
['Calle del Mes&oacute;n Viejo', 'Avenida 6 Oriente 400', '/2015/07/calle-del-meson-viejo-avenida-6-oriente.html', [ [], [] ]], //252
['Calle de Micieses', '5 Sur 100', '/2013/04/calle-de-micieses-5-sur-100.html', [ [], [] ]], //253
['Calle de los Miradores', 'Avenida de la Reforme 500', '/2015/07/calle-de-los-miradores-avenida-de-la.html', [ [], [] ]], //254
['Calle de la Misericordia', 'Calle 18 Norte 2200', '/2015/07/calle-de-la-misericordia-calle-18-norte.html', [ [], [] ]], //255
['Calle de Moctezuma', 'Calle 7 Sur 900-1500', '/2013/12/calle-de-moctezuma-calle-7-sur-900-1500.html', [ [], [] ]], //256
['Calle de Molina', 'Calle 3 Sur 100', '/2013/12/calle-de-molina-calle-3-sur-100.html', [ [], [] ]], //257
['Calle de los Molinos', 'Calle 13 Sur 1700-2100', '/2015/07/calle-de-los-molinos-calle-13-sur-1700.html', [ [], [] ]], //258
['Calle de Monzones', 'Callej&oacute;n de la Av. 2 Oriente 1000', '/2015/07/calle-de-monzones-callejon-de-la.html', [ [], [] ]], //259
['Callej&oacute;n de la Mora', 'Xanenetla', '/2013/12/callejon-de-la-mora-xanenetla.html', [ [], [] ]], //260
['Calle de Morados', 'Avenida 7 Oriente 1', '/2015/07/calle-de-morados-avenida-7-oriente-1.html', [ [], [] ]], //261
['Calle de Francisco Morales', 'Avenida del Ayuntamiento 400', '/2015/07/calle-de-francisco-morales-avenida-del.html', [ [], [] ]], //262
['Calle de Moscoso', 'Av. 9 Poniente 900', '/2013/12/calle-de-moscoso-av-9-poniente-900.html', [ [], [] ]], //263
['Calle de Mota', 'Calle 2 Sur 1500', '/2015/07/calle-de-la-mota-calle-2-sur-1500.html', [ [], [] ]], //264
['Calle de la Muerte', 'Avenida 8 Oriente 1400', '/2015/07/calle-de-la-muerte-avenida-8-oriente.html', [ [], [] ]], //265
['Calle del Muerto', 'Calle 9 Norte 200', '/2015/07/calle-del-muerto-calle-9-norte-200.html', [ [], [] ]], //266
['Calle 1a. y 2a. M&uacute;gica', 'Calle 4 Sur 1100-1300', '/2015/07/calle-1a-y-2a-mugica-calle-4-sur-1100.html', [ [], [] ]], //267
['Calle de Juan M&uacute;gica', 'Avenida 7 Poniente 700', '/2015/07/calle-de-juan-mugica-avenida-7-poniente.html', [ [], [] ]], //268
['Calle de los Mu&ntilde;oces', 'Calle 3 Norte 1600', '/2015/07/calle-de-los-munoces-calle-3-norte-1600.html', [ [], [] ]], //269
['Calle Nacional (1a.-4a.)', 'Avenidas 12 Oriente 1000 y 14 Oriente 1200-1600', '/2015/09/calle-nacional-1a-4a-avenidas-12.html', [ [], [] ]], //270
['Calle de las Nagüeras', 'Avenida 22 Oriente 1600', '/2015/07/calle-de-la-nagueras-avenida-22-oriente.html', [ [], [] ]], //271
['Calle de la Nahuala', 'Calle 7 Norte 800', '/2015/07/calle-de-la-nahuala-calle-7-norte-800.html', [ [], [] ]], //272
['Callej&oacute;n de Naturales', 'Callej&oacute;n de la Avenida 20 Oriente 1', '/2015/07/callejon-de-naturales-callejon-de-la.html', [ [], [] ]], //273
['Calle del Nav&iacute;o', 'Avenida 9 Oriente 400', '/2015/07/calle-del-navio-avenida-9-oriente-400.html', [ [], [] ]], //274
['Calle de Naz&aacute;bal', 'Avenida del Ayuntamiento 1600', '/2015/09/calle-de-nazabal-avenida-del.html', [ [], [] ]], //275
['Calle del Miguel Negrete', 'Calle 20 Norte 250-1200', '/2015/09/calle-de-miguel-negrete-calle-20-norte.html', [ [], [] ]], //276
['Calle del Nicho (Alto)', 'Av. 18 O 1800', '/2013/12/calle-del-nicho-alto-av-18-o-1800.html', [ [], [] ]], //277
['Calle del Nicho (Santa Ana)', 'Av. 24 Poniente 1100', '/2013/12/calle-del-nicho-santa-ana-av-24.html', [ [], [] ]], //278
['Calle del Nopalito', 'Avenida 8 Poniente 900', '/2015/07/calle-del-nopalito-avenida-8-poniente.html', [ [], [] ]], //279
['Calle del Noviciado', 'Calle 5 Sur 500', '/2015/07/calle-del-noviciado-calle-5-sur-500.html', [ [], [] ]], //280
	['Calle Nueva', 										'Avenida 20 Poniente 500', 		'2015/07/calle-nueva-avenida-20-poniente-500.html', 	[ [19.054452, -98.198635], [19.053661, -98.197170] ]], //281
['Calle de N&uacute;&ntilde;ez', 'Avenida 14 Poniente 900', '/2015/07/calle-de-nunez-avenida-14-poniente-900.html', [ [], [] ]], //282
['Calle de Oaxaquilla', 'Avenida 7 Poniente 900', '/2015/09/calle-de-oaxaquilla-avenida-7-poniente.html', [ [], [] ]], //283
['Calle del Obispado', 'Calle del 16 de Septiembre 500', '/2025/11/calle-del-obispado-calle-del-16-de.html', [ [], [] ]], //284
['Calle del Obraje', 'Avenida 16 Poniente 500', '/2015/09/calle-del-obraje-avenida-16-poniente-500.html', [ [], [] ]], //285
['Calle de Ocampo', 'Callej&oacute;n de la Av. 22 Poniente 100', '/2015/07/calle-de-ocampo-callejon-de-la-av-22.html', [ [], [] ]], //286
['Calle del Olvido', 'Avenida 12 Oriente 1600', '/2015/07/calle-del-olvido-avenida-12-oriente-1600.html', [ [], [] ]], //287
['Calle de Juli&aacute;n Ord&oacute;&ntilde;ez', 'Calle 9 Sur 500', '/2015/07/calle-de-julian-ordonez-calle-9-sur-500.html', [ [], [] ]], //288
['Avenida de Carlos Pacheco', 'Calle 11 Sur 1100-2100', '/2025/09/avenida-de-carlos-pacheco-calle-11-sur.html', [ [], [] ]], //289
['Calle de Carlos Pacheco', 'Avenida 7 Poniente 300', '/2015/07/calle-de-carlos-pacheco-avenida-7.html', [ [], [] ]], //290
['Calle del Padre &aacute;vila', 'Avenida 3 Poniente 900', '/2015/07/calle-del-padre-avila-avenida-3.html', [ [], [] ]], //291
['Calle del Padre Lascano', 'Calle 7 Norte 1400', '/2015/07/calle-del-padre-lascano-calle-7-norte.html', [ [], [] ]], //292
['Calle del Padre Pastor', 'Calle 14 Sur 700', '/2015/07/calle-del-padre-pastor-calle-14-sur-700.html', [ [], [] ]], //293
['Calle de Juan Padr&eacute;s', 'Calle 2 Norte 2200', '/2015/07/calle-de-juan-padres-calle-2-norte-2200.html', [ [], [] ]], //294
['Calle de Palafox y Mendoza', 'Avenida Reforma 1100-1900', '/2025/12/calle-de-palafox-y-mendoza-avenida.html', [ [], [] ]], //295
['Calle de la Palma', 'Calle 4 Sur 300', '/2015/11/calle-de-la-palma-calle-4-sur-300.html', [ [], [] ]], //296
['Calle del Palmar', 'Calle 8 Sur 700-900', '/2015/07/calle-del-palmar-calle-8-sur-700-900.html', [ [], [] ]], //297
	['Calle del Palomar', 									'Calle 5 Norte 1600', 			'2015/07/calle-del-palomar-calle-5-norte-1600.html', 	[ [19.052117, -98.198021], [19.052850, -98.197584] ]], //298
['Calle de los Palos', 'Calle 5 Sur 1300', '/2015/07/calle-de-los-palos-calle-5-sur-1300.html', [ [], [] ]], //299
['Calle del Pari&aacute;n (I)', 'Calle 6 Norte 200', '/2015/07/calle-del-parian-i-calle-6-norte-200.html', [ [], [] ]], //300
['Calle del Pari&aacute;n (II)', 'Avenida 4 Oriente 600', '/2015/07/calle-del-parian-ii-avenida-4-oriente.html', [ [], [] ]], //301
['Calle del Parral', 'Avenida 9 Poniente 900', '/2015/11/calle-del-parral-avenida-9-poniente-900.html', [ [], [] ]], //302
['Pasaje del Ayuntamiento', '', '/2015/11/pasaje-del-ayuntamiento.html', [ [], [] ]], //303
['Paseo Bravo', '', '/2015/11/paseo-bravo.html', [ [], [] ]], //304
['Paseo Hidalgo', 'Calle 10 Norte 1400-1800', '/2015/11/paseo-hidalgo-calle-10-norte-1400-1800.html', [ [], [] ]], //305
['Calle Pastrana', 'Avenida 14 Poniente 500', '/2015/07/calle-de-pastrana-avenida-14-poniente.html', [ [], [] ]], //306
['Avenida de la Paz', 'Avenida 7 Poniente 1300 y siguientes', '/2015/11/avenida-de-la-paz-avenida-7-poniente.html', [ [], [] ]], //307
['Calle del Pensador Mexicano', 'Avenida 11 Poniente 1300-1500', '/2015/07/calle-del-pensador-mexicano-avenida-11.html', [ [], [] ]], //308
['Calle de Pe&ntilde;as', 'Calle 3 Sur 300', '/2013/12/calle-de-penas-calle-3-sur-300.html', [ [], [] ]], //309
['Calle de &aacute;ngela Peralta', 'Calle 5 Norte 800', '/2013/12/calle-de-angela-peralta-calle-5-norte.html', [ [], [] ]], //310
['Calle de la Perita', 'Calle 12 Sur 900', '/2015/07/calle-de-la-perita-calle-12-sur-900.html', [ [], [] ]], //311
['Calle de las Piadosas', 'Calle 12 Norte 2200 y Avenida 22 Oriente 1200', '/2015/11/calle-de-las-piadosas-calle-12-norte.html', [ [], [] ]], //312
['Calle de la Pila Seca', 'Avenida 15 Poniente 1500-1700', '/2015/07/calle-de-la-pila-seca-avenida-15.html', [ [], [] ]], //313
['Calle de la Pilita', 'Avenida 10 Oriente 1200', '/2015/07/calle-de-la-pilita-avenida-10-oriente.html', [ [], [] ]], //314
['Calle de Pimentel', 'Avenida 6 Poniente 700', '/2015/07/calle-de-pimentel-avenida-6-poniente-700.html', [ [], [] ]], //315
['Calle del Piojo Seco', 'Calle 9 Norte 1200', '/2015/07/calle-del-piojo-seco-calle-9-norte-1200.html', [ [], [] ]], //316
['Calle de los Plateros', 'Calle 12 Norte 1800', '/2015/07/calle-de-los-plateros-calle-12-norte.html', [ [], [] ]], //317
['Calle de la Plaza de Toros', 'Avenida 7 Oriente 400', '/2025/07/calle-de-la-plaza-de-toros-avenida-7.html', [ [], [] ]], //318
['Calle de Pochas', 'Calle 14 Sur 500', '/2015/07/calle-de-pochas-calle-14-sur-500.html', [ [], [] ]], //319
['Portal de Hidalgo', 'Avenida del Ayuntamiento 1', '/2015/11/portal-de-hidalgo-avenida-del.html', [ [], [] ]], //320
['Palacio Municipal', '', '/2015/11/palacio-municipal.html', [ [], [] ]], //321
['Portal de Iturbide', 'Calle del 16 de Septiembre100', '/2015/11/portal-de-iturbide-calle-del-16-de.html', [ [], [] ]], //322
['Portal de Morelos', 'Calle 2 Sur 100', '/2015/11/portal-de-morelos-calle-2-sur-100.html', [ [], [] ]], //323
['Calle del Portalillo (De S. Francisco)', 'Calle 6 Norte 600', '/2015/07/callel-del-portalillo-de-s-francisco.html', [ [], [] ]], //324
['Calle de la Porter&iacute;a de Santa Catarina', 'Avenida 2 Poniente 300', '/2025/08/calle-de-la-porteria-de-santa-catarina.html', [ [], [] ]], //325
['Calle de la Porter&iacute;a de Santa Clara', 'Avenida 6 Oriente 200', '/2015/11/calle-de-la-porteria-de-santa-clara.html', [ [], [] ]], //326
['Calle de la Porter&iacute;a de Santa In&eacute;s', 'Avenida 9 Poniente 300', '/2015/11/calle-de-la-porteria-de-santa-ines.html', [ [], [] ]], //327
['Calle del Progreso', 'Avenida 10 Poniente 1100-1700', '/2015/11/calle-del-progreso-avenida-10-poniente.html', [ [], [] ]], //328
['Calle del Puente de Analco', 'Avenida 5 Oriente 600', '/2015/11/calle-del-puente-de-analco-avenida-5.html', [ [], [] ]], //329
['Calle del Puente de Azcu&eacute;', 'Calle 14 Norte 400', '/2015/11/calle-del-puente-de-azcue-calle-14.html', [ [], [] ]], //330
['Calle del Puente del cinco de Mayo', 'Avenida 10 Oriente 800', '/2015/11/calle-del-puente-del-cinco-de-mayo.html', [ [], [] ]], //331
['Calle del Puente de Motolin&iacute;a', 'Avenida 2 Oriente 600', '/2015/11/calle-del-puente-de-motolinia-avenida-2.html', [ [], [] ]], //332
['Calle del Puente de Nochebuena', 'Avenida 14 Oriente 1800', '/2015/11/calle-del-puente-de-nochebuena-avenida.html', [ [], [] ]], //333
['Calle del Puente de Ovando', 'Avenida 3 Oriente 600', '/2015/11/calle-del-puente-de-ovando-avenida-3.html', [ [], [] ]], //334
['Calle del Puente de Romero Vargas', 'Avenida del Ayuntamiento 600', '/2015/11/calle-del-puente-de-romero-vargas.html', [ [], [] ]], //335
['Calle de la Puerta Falsa de San Francisco', 'Calle 12 Norte 600-1000', '/2026/01/calle-de-la-puerta-falsa-de-san.html', [ [], [] ]], //336
['Calle de Quintanilla', 'Avenida 5 Poniente 900', '/2015/07/calle-de-quintanilla-avenida-5-poniente.html', [ [], [] ]], //337
['Calle de Raboso', 'Avenida 4 Oriente 400', '/2015/07/calle-de-raboso-avenida-4-oriente-400.html', [ [], [] ]], //338
['Calle de Juan Ram&iacute;rez', 'Calle 5 Sur 700', '/2024/02/calle-de-juan-ramirez-calle-5-sur-700.html', [ [], [] ]], //339
['Calle de Ramos Arizpe', 'Avenida 5 Poniente 300', '/2015/07/calle-de-ramos-arizpe-avenida-5.html', [ [], [] ]], //340
['Calle de las Ranas', 'Calle 9 Sur  700-1500', '/2015/07/calle-de-las-ranas-calle-9-sur-700-1500.html', [ [], [] ]], //341
['Calle del Ranchito', 'Calle 9 Norte 2200', '/2015/07/calle-del-ranchito-calle-9-norte-2200.html', [ [], [] ]], //342
['Calle del Rancho de la Cruz', 'Avenida 21 Poniente 1300-1500', '/2015/07/casa-del-rancho-de-la-cruz-avenida-21.html', [ [], [] ]], //343
['Calle del Rancho de Toledo', 'Calle 5 Sur 1700', '/2015/07/calle-del-rancho-de-toledo-calle-55-sur.html', [ [], [] ]], //344
['Calle del Rancho de Zapata', 'Avenida 28 Poniente 900', '/2015/07/calle-del-rancho-de-zapata-avenida-28.html', [ [], [] ]], //345
['Calle del Rastro', 'Avenida 2 Poniente 700', '/2015/11/calle-del-rastro-avenida-2-poniente-700.html', [ [], [] ]], //346
['Calle Real de Santa Ana', 'Avenida 28 Poniente 500', '/2015/11/calle-real-de-santa-ana-avenida-28.html', [ [], [] ]], //347
['Real de Xanenetla', 'Calle 4 Norte', '/2015/11/real-de-xanenetla-calle-4-norte.html', [ [], [] ]], //348
['Calle de las Recogidas', 'Calle 5 de Mayo 1800', '/2015/11/calle-de-las-recogidas-calle-del-5-de.html', [ [], [] ]], //349
['Callej&oacute;n de la Reforma', 'Avenida 6 Poniente 100', '/2015/07/callejon-de-la-reforma-avenida-6.html', [ [], [] ]], //350
['Calzada del Refugio', 'Avenida 28 Poniente 300', '/2015/07/calzada-del-refugio-avenida-28-poniente.html', [ [], [] ]], //351
['Plazuela del Refugio', 'Calle 5 Norte 2800', '/2015/11/plazuela-del-refugio-calle-5-norte-2800.html', [ [], [] ]], //352
['Rinconada de la Barranca', 'Avenida 3 Oriente 1000', '/2025/08/rinconada-de-la-barranca-avenida-3.html', [ [], [] ]], //353
['Calle de la Rinconada de San Antonio', 'Avenida 20 Poniente 100-300', '/2015/07/calle-de-la-rinconada-de-san-antonio.html', [ [], [] ]], //354
['Calle del R&iacute;o de la Madre', 'Avenida 4 Oriente 800-1000', '/2015/11/calle-del-rio-de-la-madre-avenida-4.html', [ [], [] ]], //355
['Calles 1a. y 2a. de Rom&aacute;n', 'Calle 20 Norte 1-200', '/2015/11/calles-1a-y-2a-de-roman-calle-20-norte.html', [ [], [] ]], //356
['Calle de Romero', 'Avenida 12 Oriente 200', '/2015/07/calle-de-romero-avenida-12-oriente-200.html', [ [], [] ]], //357
['Calle de los Roncos', 'Avenida 16 Poniente 300', '/2015/07/calle-de-los-roncos-avenida-16-poniente.html', [ [], [] ]], //358
['Calle de Juan Roque', 'Avenida 13 Poniente 300', '/2024/02/calle-de-juan-roque-avenida-13-poniente.html', [ [], [] ]], //359
['Calle de Joaqu&iacute;n Ru&iacute;z', 'Avenida 12 Poniente 700', '/2015/07/calle-de-joaquin-ruiz-avenida-12.html', [ [], [] ]], //360
['Calzada de la S&aacute;bana', 'Avenida 11 Oriente 800-1400', '/2015/11/calzada-de-la-sabana-avenida-11-oriente.html', [ [], [] ]], //361
['Calle del Sacrist&aacute;n', 'Avenida 28 Poniente 1100', '/2015/11/calle-del-sacristan-avenida-28-poniente.html', [ [], [] ]], //362
['Calle de la Sacrist&iacute;a', 'Avenida 7 Oriente 1200', '/2015/07/calle-de-la-sacristia-avenida-7-oriente.html', [ [], [] ]], //363
['Calle de la Sacrist&iacute;a de las Capuchinas', 'Avenida 9 Oriente 1', '/2015/07/calle-de-la-sacristia-de-las-capuchinas.html', [ [], [] ]], //364
['Calle de la Sacrist&iacute;a de la Concepci&oacute;n', 'Calle del 16 de Septiembre 700', '/2015/07/calle-de-la-sacristia-de-la-concepcion.html', [ [], [] ]], //365
	['Calle de la Sacrist&iacute;a de Santa M&oacute;nica',	'Avenida 18 Poniente 100', 		'2015/07/calle-de-la-sacristia-de-santa-monica.html', 	[ [19.052083, -98.196056], [19.051344, -98.194669] ]], //366
['Calle del Sagrario', 'Calle 2 Sur 300', '/2009/04/calle-del-sagrario.html', [ [], [] ]], //367
['Calle de San Antonio', 'Avenida 22 Poniente 1100', '/2015/07/calle-de-san-antonio-avenida-22.html', [ [], [] ]], //368
['Calle de San Crist&oacute;bal', 'Calle 4 Norte 600', '/2015/11/calle-de-san-cristobal-calle-4-norte-600.html', [ [], [] ]], //369
['Plazuela de San Francisco', 'Calle 6 y 8 Norte 800', '/2015/11/plazuela-de-san-francisco-calle-6-y-8.html', [ [], [] ]], //370
['Calle de San Jer&oacute;nimo', 'Avenida 7 Oriente 200', '/2015/11/calle-de-san-jeronimo-avenida-7-oriente.html', [ [], [] ]], //371
['Calle 1a.-4a- de San Jos&eacute;', 'Calle 2 Norte 1600-100', '/2015/11/calles-1a-4a-de-san-jose-calle-2-norte.html', [ [], [] ]], //372
['Plazuela de San Jos&eacute;', 'Avenida 18 Oriente 200', '/2015/11/plazuela-de-san-jose-avenida-18-oriente.html', [ [], [] ]], //373
['Calle de San Juan de Dios', 'Calle del 5 de Mayo 1400', '/2015/07/calle-de-san-juan-de-dios-calle-del-5.html', [ [], [] ]], //374
['Calle de San Juan de Letr&aacute;n', 'Calle 2 Sur 700', '/2015/11/calle-de-san-juan-de-letran-calle-2-sur.html', [ [], [] ]], //375
['Calle de San Juan de Letr&aacute;n', '', '/2009/04/calle-de-san-juan-de-letran.html', [ [], [] ]], //376
['Calle de San Juan del R&iacute;o', 'Calle 12 Norte 2000', '/2015/07/calle-de-san-juan-del-rio-calle-12.html', [ [], [] ]], //377
['Calle de Juaniquito', 'Avenida 22 Poniente 900', '/2015/07/calle-de-juaniquito-avenida-22-poniente.html', [ [], [] ]], //378
['Calle de San Judas', 'Calle 9 Sur 300', '/2015/07/calle-de-san-judas-calle-9-sur-300.html', [ [], [] ]], //379
['Calle de San Luis', 'Calle del 5 de Mayo 800', '/2015/09/calle-de-san-luis-calle-del-5-de-mayo.html', [ [], [] ]], //380
['Calle de San Marcos', 'Calle 9 Norte 1', '/2015/07/calle-de-san-marcos-calle-9-norte-1.html', [ [], [] ]], //381
['Calle de San Mart&iacute;n', 'Calle del 5 de Mayo 200', '/2015/07/calle-de-san-martin-calle-del-5-de-mayo.html', [ [], [] ]], //382
['Calle de San Mat&iacute;as', 'Calle 21 Norte 1-200', '/2015/07/calle-de-san-matias-calle-21-norte-1-200.html', [ [], [] ]], //383
['Calle de San Miguelito', 'Calle 3 Norte 1000', '/2015/07/calle-de-san-miguelito-calle-3-norte.html', [ [], [] ]], //384
['Calle de San Pablo de los Frailes', 'Avenida 18 Poniente 900', '/2015/09/calle-de-san-pablo-de-los-frailes.html', [ [], [] ]], //385
['Calle de San Pablo de los Naturales', 'Avenida 10 Poniente 900', '/2025/11/calle-de-san-pablo-de-los-naturales.html', [ [], [] ]], //386
['Calle de San Pedro', 'Calle 4 Norte 200', '/2015/07/calle-de-san-pedro-calle-4-norte-200.html', [ [], [] ]], //387
['Calle de San Ram&oacute;n', 'Calle 9 Norte 800', '/2015/07/calle-de-san-ramon-calle-9-norte-800.html', [ [], [] ]], //388
['Calle de San Roque', 'Calle 6 Norte 1', '/2015/11/calle-de-san-roque-calle-6-norte-1.html', [ [], [] ]], //389
['Calle de Santa Ana', 'Avenida 26 Poniente 1100', '/2015/11/calle-de-santa-ana-avenida-26-poniente.html', [ [], [] ]], //390
['Calzada de Santa B&aacute;rbara', 'Avenida del Ayuntamiento 1600 y siguientes', '/2015/11/calzada-de-santa-barbara-avenida-del.html', [ [], [] ]], //391
['Calzada de Santa Catarina', 'Calle 3 Norte 200', '/2015/11/calzada-de-santa-catarina-calle-3-norte.html', [ [], [] ]], //392
['Calle de Santa Clara', 'Calle 2 Norte 400', '/2015/07/calle-de-santa-clara-calle-2-norte-400.html', [ [], [] ]], //393
['Calzada de Gertrudis', 'Calle 9 Norte 600', '/2015/07/calzada-de-gertrudis-calle-9-norte-600.html', [ [], [] ]], //394
	['Calle de Santa M&oacute;nica', 						'Calle del 5 de Mayo 1600', 	'2015/11/calle-de-santa-monica-calle-del-5-de.html', 	[ [19.050569, -98.195077], [19.051317, -98.194658] ]]  //395
['Calle de Santa Rosa', 'Calle 3 de Norte 1200', '/2015/11/calle-de-santa-rosa-calle-3-de-norte.html', [ [], [] ]], //396
['Calle de Santa Teresa', 'Calles 2 Norte 600-800', '/2015/11/calle-de-santa-teresa-calle-2-norte-600.html', [ [], [] ]], //397
['Calles de Santiago', 'Avenida 17 Oriente 1 y 17 Poniente 100-1300', '/2015/11/calles-de-santiago-avenida-17-oriente-1.html', [ [], [] ]], //398
['Plazuela de Santiago', 'Calle 15 Sur 1700', '/2015/11/plazuela-de-santiago-calle-15-sur-1700.html', [ [], [] ]], //399
['Calles de Santo Domingo', 'Calle del 5 de Mayo 400-600', '/2015/11/calles-de-santo-domingo-calle-del-5-de.html', [ [], [] ]], //400
['Calle de Santo Tom&aacute;s', 'Avenida 5 Oriente 1000', '/2015/07/calle-de-santo-tomas-avenida-5-oriente.html', [ [], [] ]], //401
['Callej&oacute;n de los Sapos', 'Calle 6 Sur 300', '/2015/07/callejon-de-los-sapos-calle-6-sur-300.html', [ [], [] ]], //402
['Plazuela de los Sapos', 'Calle 6 Sur 500', '/2015/07/plazuela-de-los-sapos-calle-6-sur-500.html', [ [], [] ]], //403
['Calle del Secretario', 'Avenida 5 Oriente 1400', '/2015/07/calle-del-secretario-avenida-5-oriente.html', [ [], [] ]], //404
['Calle del Se&ntilde;or Eccehomo', 'Calle 14 Norte 600-800', '/2025/09/calle-del-senor-ecchomo-calle-14-norte.html', [ [], [] ]], //405
['Calle del Silencio', 'Avenida 23 Poniente 1500-1700', '/2015/07/calle-del-silencio-avenida-23-poniente.html', [ [], [] ]], //406
['Calle Sola', 'Avenida 9 Poniente 100', '/2015/07/calle-sola-avenida-9-poniente-100.html', [ [], [] ]], //407
['Calle del Solar de Castro', 'Avenida 8 Poniente 500', '/2015/07/calle-del-solar-de-castro-avenida-8.html', [ [], [] ]], //408
['Calle de la Soledad', 'Calle 2 Sur 900-1100', '/2025/09/calle-de-la-soledad-calle-2-sur-900-1100.html', [ [], [] ]], //409
['Calle de Sosa', 'Avenida 20 Oriente 1000', '/2015/07/calle-de-sosa-avenida-20-oriente-1000.html', [ [], [] ]], //410
['Calles del S&oacute;tano', 'Callej&oacute;n de la Calle Norte 200', '/2015/07/calles-del-sotano-callejon-de-la-calle.html', [ [], [] ]], //411
['Calle de Eduardo Tamariz', 'Avenida 4 Poniente 300', '/2015/07/calle-de-eduardo-tamariz-avenida-4.html', [ [], [] ]], //412
['Calle del Tamborcito', 'Avenida 22 Poniente 1300', '/2015/07/calle-del-tamborcito-avenida-22.html', [ [], [] ]], //413
['Calle del Tecajete', 'Avenida 13 Oriente 1', '/2009/04/calle-del-tecajete.html', [ [], [] ]], //414
['Calle de Tecali', 'Avenida 3 Poniente 700', '/2024/02/calle-de-tecali-avenida-3-poniente-700.html', [ [], [] ]], //415
['Calle del Tecomate', 'Texcoco', '/2015/11/calle-del-tecomate-texcoco.html', [ [], [] ]], //416
['Calle del Tepalcatillo', 'Calle 14 Sur 300', '/2015/11/calle-del-tepalcatillo-calle-14-sur-300.html', [ [], [] ]], //417
['Calle de Tepetlapa', 'Avenida 2 Oriente 1200', '/2015/11/calle-de-tepetlapa-avenida-2-oriente.html', [ [], [] ]], //418
['Calle de la Tesorera', 'Avenida 14 Poniente 700', '/2015/11/calle-de-la-tesorera-avenida-14.html', [ [], [] ]], //419
['Plazuela de Texcoco', "El nombre de este barrio aparece en las dos formas 'Tecozco' y 'Texcoco'", '/2015/11/plazuela-de-texcoco-el-nombre-de-este.html', [ [], [] ]], //420
['Calle de Tom&eacute;', 'Avenida 16 Oriente 1400', '/2015/11/calle-de-tome-avenida-16-oriente-1400.html', [ [], [] ]], //421
['Calle de Toquero', 'Calle 3 Norte 1800', '/2015/11/calle-de-toquero-calle-3-norte-1800.html', [ [], [] ]], //422
['Calle de los Tornos', 'Calle 8 Norte 400', '/2015/11/calle-de-los-tornos-calle-8-norte-400.html', [ [], [] ]], //423
['Calle de Torreblanca', 'Avenida 14 Poniente 100', '/2015/11/calle-de-torreblanca-avenida-14.html', [ [], [] ]], //424
['Calle de la Torrecilla', 'Avenida del Ayuntamiento 1000', '/2015/11/calle-de-la-torrecilla-avenida-del.html', [ [], [] ]], //425
['Calle de los Totopoxtleros', 'Avenida 24 Oriente 1400', '/2015/11/calle-de-los-totopoxtleros-avenida-24.html', [ [], [] ]], //426
['Calle de la Uni&oacute;n', 'Avenida 22 Poniente 500', '/2015/11/calle-de-la-union-avenida-22-poniente.html', [ [], [] ]], //427
['Calle de las Vacas', 'Avenida 9 Oriente 200', '/2015/11/calle-de-las-vacas-avenida-9-oriente-200.html', [ [], [] ]], //428
['Calle de Leandro Valle', 'Callej&oacute;n de la Avenida 18 Poniente 100', '/2015/11/calle-de-leandro-valle-callejon-de-la.html', [ [], [] ]], //429
['Calle de los Vaqueros', 'Avenida 16 Poniente 900', '/2015/11/calle-de-los-vaqueros-avenida-16.html', [ [], [] ]], //430
['Calle de Miguel Vargas', 'Calle 7 Sur 500', '/2015/11/calle-de-miguel-vargas-calle-7-sur-500.html', [ [], [] ]], //431
['Calle del Vel&oacute;dromo', 'Avenida 13 Poniente 500-900', '/2015/11/calle-del-velodromo-avenida-13-poniente.html', [ [], [] ]], //432
['Calle del Venado', 'Calle 5 Norte 400', '/2015/11/calle-del-venado-calle-5-norte-400.html', [ [], [] ]], //433
['Calle de las Ventanas', 'Avenida 12 Poniente 500', '/2015/11/calle-de-las-ventanas-avenida-12.html', [ [], [] ]], //434
['Calle de Leona Vicario', 'Calle 2 Sur 500', '/2009/04/calle-de-leona-vicario.html', [ [], [] ]], //435
['Calle Victoria', 'Avenida 3 Poniente 300', '/2015/07/calle-de-victoria-avenida-3-poniente-300.html', [ [], [] ]], //436
['Calle del Villareal', 'Calle 5 Sur 1 100', '/2015/07/calle-de-villareal-calle-5-sur-1-100.html', [ [], [] ]], //437
['Calle de la Violeta', 'Avenida 10 Oriente 2000', '/2015/07/calle-de-la-violeta-avenida-10-oriente.html', [ [], [] ]], //438
['Calle de Zambrano', 'Avenida 8 Poniente 300', '/2013/12/calle-de-zambrano-avenida-8-poniente-300.html', [ [], [] ]], //439
['Calle de los Zapateros', 'Calle 8 Norte 200', '/2015/11/calle-de-los-zapateros-calle-8-norte-200.html', [ [], [] ]], //440
['Calle de Zaragoza', 'Avenida de la Reforma 100', '/2015/11/calle-de-zaragoza-avenida-de-la-reforma.html', [ [], [] ]], //441
['Calle de Z&aacute;rate', 'Calle 3 Sur 500', '/2015/07/calle-del-zarate-calle-3-sur-500.html', [ [], [] ]], //442
['Calle de Zayas', 'Avenida 10 Poniente 700', '/2015/11/calle-de-zayas-avenida-10-poniente-700.html', [ [], [] ]], //443
['Z&oacute;calo', 'Avenida 3 Oriente 1', '/2015/11/zocalo-avenida-3-oriente-1.html', [ [], [] ]], //444
['Calles del Carmen', '', '/2009/04/calles-del-carmen.html', [ [], [] ]], //445
['Calles de Cuahutemoc', '', '/2009/04/calles-de-cuahutemoc.html' [ [], [] ]], //446
*/
]; 

var urlPrefix='https://porlascallesdepuebla.blogspot.com/';


const map = L.map('map').setView([19.044, -98.20], 5);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const grupo = L.featureGroup().addTo(map);
	
for (var i=0; i < data.length; i++) {
 	var colorActual = 'hsl(' + (i * 40) + ', 80%, 45%)';

    /*var polyline = L.polyline(data[i][3], {color: colorActual,weight:10, opacity: 0.5}).addTo(map).bindPopup(data[i][0]+'.<br />'+data[i][1]+'. <a href="'+urlPrefix+data[i][2]+'" target="_blank">Ir<\a>');*/
	L.polyline(data[i][3], {color: colorActual,weight:10, opacity: 0.5}).addTo(grupo).bindPopup(data[i][0]+'.<br />'+data[i][1]+'. <a href="'+urlPrefix+data[i][2]+'" target="_blank">Ir<\a>');
/*	map.fitBounds(polyline.getBounds());*/
}

map.fitBounds(grupo.getBounds(),  {
  padding: [20, 20]
});

	const popup = L.popup()
		.setLatLng([19.044, -98.20])
		.setContent('I am a standalone popup.')
		/* .openOn(map) */ ;
	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent(`You clicked the map at ${e.latlng.toString()}`)
			.openOn(map);
	} 

	//map.on('click', onMapClick);
