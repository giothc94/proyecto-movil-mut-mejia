import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurismoService {

  lugaresTuristicos = [
    {
      uid:'uyumbicho',
      nombreLugar: 'uyumbicho',
      img:'../../assets/lugaresTuristicos/uyumbicho.jpg',
      listaLugares: [
        { 
          nombre: 'Quinta Isidro Ayora' ,
          descripcion:'Ups ! aun no tenemos la descripcion de este lugar'
        },
        { 
          nombre: 'Parque Ecológico Isidro Ayora' ,
          descripcion:'Ups ! aun no tenemos la descripcion de este lugar'
        },
        { 
          nombre: 'Iglesia Nuestra Señora del Rosario' ,
          descripcion:'El sacerdote lazarista Pedro Brunning, fue quien hizo posible la construcción de esta iglesia, misma que conserva elementos y formas clásicas europeas. En el retablo mayor decorado con pan de oro, se encuentra la imagen de la Virgen del Rosario, San Antonio de Padua, San Francisco y San Cristóbal patrono de esta parroquia.'
        },
        { 
          nombre: 'Refugio de Vida Silvestre Pasochoa' ,
          descripcion:'Para ingresar al área protegida desde Mejía debe tomar la Panamericana Sur en dirección a la comuna El Ejido de Amaguaña, luego se debe tomar el camino empedrado que se encuentra junto a la Iglesia por 6 km aproximadamente, pasando la comunidad de San Pedro de Pilopata hasta el parqueadero.'
        },
        { 
          nombre: 'Volcán Pasochoa',
          descripcion:'Tiene forma de un gran hemiciclo en cuyas paredes y fondo crece el bosque andino que es protegido por el refugio, entre las quebradas Santa Ana y Sambache.'
         }
      ]
    },
    {
      uid:'tambillo',
      nombreLugar: 'tambillo',
      img:'../../assets/lugaresTuristicos/tambillo.jpg',
      listaLugares: [
        { 
          nombre: 'Estación del Tren de Tambillo' ,
          descripcion:'La parroquia de Tambillo al igual que en el pasado, es un punto estratégico, es así que en esta parroquia encontramos una Estación del Tren, misma que conserva la arquitectura colonial y es uno de los puntos turísticos en la ruta del Tren que va desde Quitumbe hasta la provincia de Cotopaxi.'
        },
        { 
          nombre: 'Estación del Tren de Tambillo:Bosque Protector Sierra Alisos',
          descripcion:'Esta reserva protege parte del bosque montano húmedo, el mismo que es un ecosistema rico en ­ora (Alisos, Pumamaquis, Quishuares, Colcas, Sacha-capulíes, Arrayanes, etc.) y fauna (mamíferos, aves, an‑bios, insectos, etc.). El bosque regula un micro-clima que mantiene temperaturas e índices de humedad, eso permite observar condiciones de bosques de alturas inferiores, el caso de plantas epifitas y aéreas como bromelias y orquídeas, como también líquenes y musgos.'
         }
      ]
    },
    {
      uid:'tandapi',
      nombreLugar: 'tandapi',
      img:'../../assets/lugaresTuristicos/tandapi.jpg',
      listaLugares: [
        { 
          nombre: 'Volcán Ninahuilca' ,
          descripcion:'El Ninahuilca forma parte del Complejo Volcánico Atacazo-Ninahuilca, este volcán es el más jóven del complejo y está ubicado en la parroquia Manual Cornejo Astorga (Tandapi), la cumbre de este volcán se encuentra a 3.830 m.s.n.m.'
        },
        { 
          nombre: 'Cascadas de Canchacoto' ,
          descripcion:'recogiendo las aguas que nacen en la cordillera de los Andes por la cordillera occidental bajan aguas cristalinas que en sus caídas forman hermosas cascadas rodeadas de vegetación propia del bosque nubla'
        },
        { 
          nombre: 'Cascada del Amor' ,
          descripcion:'en el centro poblado de la parroquia Manuel Cornejo Astorga junto a la embotelladora de agua La Quebrada, se ubica una caída de agua de 20 metros de altura, una fina y hermosa caída, la cual los habitantes la bautizaron como Cascada del Amor.'
        },
        { 
          nombre: 'El Poder Brutal' ,
          descripcion:'en el camino entre Alóag y Santo Domingo, pasando Tandapi, en medio de la vía y el bosque, se encuentra ubicado un monumento muy particular, puesto que a primera vista se aprecia la representación del mal, una cara del diablo.'
        },
        { 
          nombre: 'Complejo Hidroeléctrico Toachi Pilatón' ,
          descripcion:'Ubicado en las estribaciones del bosque nublado occidental, este proyecto comprende dos aprovechamientos en cascada: Pilatón-Sarapullo, componiendo un paisaje sin igual. Se accede por el recinto la Palma por caminos de segundo y tercer orden.'
        },
        { 
          nombre: 'Cascada Nápac:' ,
          descripcion:'El río del mismo nombre nace en las cumbres de la Cordillera Occidental gracias a la nubosidad que viajan desde la costa hacia las montañas, chocan en la cordillera y descienden como lluvia. Luego de cruzar bosques y quebradas, la cascada se encuentra para vista y deleite de los turistas.'
        },
        { 
          nombre: 'Estación Biológica la Hesperia',
          descripcion:'Este mágico lugar tiene una super­cie de 800 Has. De bosque nublado destinado a la conservación de la vida silvestre. Es un espacio lleno naturaleza pura, vida y emociones extremas.'
         }
      ]
    },
    {
      uid:'elchaupi',
      nombreLugar: 'el chaupi',
      img:'../../assets/lugaresTuristicos/chaupi.jpg',
      listaLugares: [
        { 
          nombre: 'Volcán Los Ilinizas' ,
          descripcion:'Al venir a Mejía descubrirás uno de los volcanes más singulares del mundo, al tener su caldera dividida en dos, parecen dos agujas, las cuales resguardan una pequeña laguna. Para quienes practican ascenso de montaña es una cumbre que permite aclimatarse y prepararse para alta montaña. Hay un refugio rústico ubicado entre los picos norte y sur. Se puede llegar a través de un viaje de 40 minutos en camioneta desde El Chaupi, seguido de una ascensión de tres horas aproximadamente. Se ubica a 23 km al suroeste de Machachi.'
        },
        { 
          nombre: 'Reserva Ecológica Los Ilinizas',
          descripcion:'Para ingresar al área protegida desde Mejía, se debe tomar la Panamericana Sur y por la vía asfaltada se llega a la parroquia El Chaupi; de aquí por una vía de segundo orden se llega al sector de La Virgen. La altitud que alcanzan la cumbre de Los Illinizas permite la existencia de dos zonas bien marcadas: hacia el occidente, se trata de suelos y vegetación más húmedos, mientras que en las estribaciones que dan hacia el callejón interandino los suelos son más arenosos y con poca agua. En la reserva se puede observar ­ora y fauna, Los Illinizas, El  Corazón, llamado así por su forma de corazón invertido.'
         }
      ]
    },
    {
      uid:'cutuglagua',
      nombreLugar: 'Cutuglagua',
      img:'../../assets/lugaresTuristicos/cutuglagua.jpg',
      listaLugares: [
        { 
          nombre: 'Volcán Atacazo',
          descripcion:'El Atacazo tiene una caldera de 6 km de diámetro y cuyo cono erosionado es prueba de la acción hace 2.300 años. Admira su gran belleza en invierno cuando, luego de una tormenta, se cubre de nieve. La caminata de ascenso a la cumbre se considera de dificultad media.'
         }
      ]
    },
    {
      uid:'aloag',
      nombreLugar: 'Alóag',
      img:'../../assets/lugaresTuristicos/aloag.jpg',
      listaLugares: [
        { 
          nombre: 'Cerro La Viudita' ,
          descripcion:'Después del peaje de la Vía Alóag-Santo Domingo, recorre el camino empedrado y el sendero de tierra para descubrir un sitio histórico donde se llevaron a cabo enfrentamientos por su ubicación estratégica, La Viudita (3.783 m.s.n.m.) fue testigo de la lucha de las tropas españolas que debían evitar la llegada de las fuerzas libertadoras a Quito y es el escenario de la Batalla de Pichincha, el 24 de Mayo de 1822.'
        },
        { 
          nombre: 'Reserva Natural Bombolí' ,
          descripcion:'El ingreso al Bosque Hacienda Bombolí se encuentra en el km 20 de la vía Aloag -Santo Domingo, de ahí debe avanzar 6 km. Este atractivo está emplazado en el borde costero de la cordillera occidental, entre 2.700 y 3.450 metros sobre el nivel del mar (m.s.n.m.), con una temperatura promedio de 13ºC en invierno y 25 en verano. En el bosque se puede observar ­ora (aliso, pumamaqui, podocarpus, etc.)'
        },
        { 
          nombre: 'Popular del Señor de Casanto',
          descripcion:'Esta es una escultura tallada en un árbol de Casanto y según varias versiones tiene más de 250 años de antigüedad. Se encuentra resguardada en el atrio de la Iglesia Nuestra Señora de Asunción de Alóag.'
         }
      ]
    },
    {
      uid:'aloasi',
      nombreLugar: 'Aloasí',
      img:'../../assets/lugaresTuristicos/aloasi.jpg',
      listaLugares: [
        { 
          nombre: 'Estación del Tren de Aloasí' ,
          descripcion:'La Estación, lugar antiguamente conocido como Huasinillo, se ubica en la parroquia de Aloasí, y es un punto de parada estratégica para las personas que se dirigen desde Chimbacalle.'
        },
        { 
          nombre: 'Santuario de la Virgen de los Dolores' ,
          descripcion:'Es una edi­ficación religiosa construida en 1942, se encuentra catalogada como uno de los bienes patrimoniales. La ­esta principal se celebra el 15 de septiembre en honor de Nuestra Señora de los Dolores. Otra ­esta que, por tradición, se celebra en honor a la Virgen es el Viernes de Concilio, anterior al domingo de Ramos.'
        },
        { 
          nombre: 'El Corazón' ,
          descripcion:'Sorpréndete con el cráter de este volcán inactivo al suroccidente de Machachi que se ha convertido en un profundo barranco que forma el río Negro. En las faldas del volcán se encuentra un pequeño cerro denominado la Moya.'
        },
      ]
    },
    {
      uid:'machachi',
      nombreLugar: 'Machachi',
      img:'../../assets/lugaresTuristicos/machachi.jpg',
      listaLugares: [
        { 
          nombre: 'Volcán Cotopaxi' ,
          descripcion:'El ingreso desde Machachi se encuentra en zona segura. Con la actividad que el volcán ha presentado en este último año, es posible apreciar su belleza escénica desde los alrededores sin realizar ascenso, disfrutando de actividades como caminata, bicicleta, cabalgata y acampada.'
        },
        { 
          nombre: 'Parque Nacional Cotopaxi' ,
          descripcion:'Desde Machachi es posible ingresar al área protegida, dirigiéndose al Barrio Santa Ana de El Pedregal, recorriendo entre haciendas y disfrutando de paisaje rural por aprox. 14 km, esta zona se encuentra defi­nida como segura. Al interior del parque desde el control norte que es el más cercano hacia los atractivos en zona segura se puede visitar la laguna de Limpiopungo y parte del Rumiñahui realizando actividades como caminata, cabalgatas, bicicleta y acampada.'
        },
        { 
          nombre: 'Volcán Sincholagua' ,
          descripcion:'Este volcán apagado y erosionado se encuentra en 4.919 m.s.n.m.. Este representa un refugio de venados y morada de cóndores, además de albergar un segmento del camino del Inca.'
        },
        { 
          nombre: 'Cascada San Miguel del Pedregal' ,
          descripcion:'Con una imponente caída de agua en un remanente de bosque andino donde predominan yaguales, pumamaquis, quishuares, entre otros y con una variedad de aves, encontramos la Cascada de San Miguel de El Pedregal, misma a la que se puede acceder desde Machachi, tomando la vía al control norte del Parque Nacional Cotopaxi aproximadamente a 8 kilómetros en el ingreso al barrio San Miguel del Pedregal al pie del Pasochoa.'
        },
        { 
          nombre: 'Cultura Chagra' ,
          descripcion:'Las huarmis y los caris chagras, son símbolo del mestizaje que sufrieron nuestros antepasados con la cultura española; con costumbres y tradiciones que han prevalecido durante cientos de años y que han sido transmitidas de generación en generación como la habilidad para montar a caballo, manejar el ganado bravo y dedicar sus jornadas al cuidado de la tierra.'
        },
        { 
          nombre: 'Iglesia Matriz Machachi' ,
          descripcion:'Muestra una mezcla de varios estilos como el barroco y la simetría dórica. Su historia nace a ­nales del Siglo XVII, cuando los misioneros franciscanos empezaron la construcción del primer templo, hecho en adobe y cubierta de paja. Con los años se levantó la nueva iglesia, el convento (1810 a 1827) y una capilla adjunta para el Patrono Santiago Apóstol.'
        },
        { 
          nombre: 'Volcán Rumiñahui' ,
          descripcion:'Esta montaña es un balcón privilegiado para observar otras elevaciones: Cotopaxi, Illinizas, Pasochoa, Sincholagua, entre otros. La caminata en el Volcán Rumiñahui se considera como de di­ficultad media.'
        },
        { 
          nombre: 'Feria Dominical:' ,
          descripcion:'Saludables verduras y hortalizas, variedades de tubérculos, vistosos granos y frutas de diferentes lugares del país, forman un arcoíris en la Feria Dominical de Machachi ubicada en centro de la ciudad y donde los visitantes adquieren sus productos para preparar alimentos.'
        },
        { 
          nombre: 'Feria de Barros' ,
          descripcion:'Ollitas de barro con cuchara de palo ponen la sazón tradicional en la preparación de la comida tradicional ecuatoriana. Estos utensilios los encontramos en la feria tradicional de barros que se desarrolla en el mes de noviembre durante el feriado de difuntos en las principales calles de Machachi.'
        },
        { 
          nombre: 'Tesalia' ,
          descripcion:'A 4.4 km de Machachi, se encuentran las fuentes de Tesalia, aguas que contienen sales minerales provenientes de nevados y volcanes que son los protagonistas de este fenómeno de la naturaleza. Cuenta con un balneario de dos piscinas e instalaciones deportivas.'
        },
        { 
          nombre: 'La Calera',
          descripcion:'Se ubica a 2.5 km del Obelisco de Alóag y por un camino empedrado se puede acceder a este hermoso lugar para observar la cascada de San Luis, misma que tiene una caída de 25 metros, junto a esta la antigua Central Hidroeléctrica La Calera misma que hasta la fecha provee de energía eléctrica al sistema nacional.'
         }
      ]
    }
  ]

  constructor() { }

  obtenerLugares() {
    return this.lugaresTuristicos
  }
}
