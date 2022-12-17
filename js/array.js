const productos = [
    {
        id:"1",
        nombre:"god of war" ,
        price: 1500 ,
        genero: "acción",
        img: "imagenes/gow.png",
        cant: 1,
        consola: "PlayStation4",
        bgImg: "imagenes/bgGow.jpg",
        description: "God of War es la vuelta de Kratos a los videojuegos tras la trilogía original. Esta nueva entrega para PlayStation 4, si bien mantendrá varios de los ingredientes indivisibles de su jugabilidad, apostará por un nuevo comienzo para el personaje y una ambientación nórdica, ofreciéndonos una perspectiva más madura y realista de la mitología de dioses y monstruos milenarios habitual en la serie de títulos. En God of War, Kratos será un guerrero más curtido y pasivo, pues tendrá que desempeñar el rol de padre en un frío y hostil escenario, al que parece haberse retirado para olvidar su pasado."
    },
    {
        id:"2",
        nombre:"need for speed payback",
        price: 1200,
        genero: "autos",
        img:"imagenes/nfs.jpg",
        cant: 1,
        consola: "PlayStation4",
        bgImg: "imagenes/bgNfsPayback.jpg",
        description: "Need for Speed Payback es un título de conducción arcade y desenfadada en un mundo abierto, que en esta ocasión, cuenta con un pretexto argumental y una historia que irá narrándose poco a poco a lo largo de una aventura con persecuciones, ladrones de coches y otros avatares propios del género y la serie de videojuegos."
    },
    {
        id:"3",
        nombre:"outlast" ,
        price: 800 ,
        genero: "survival",
        img:"imagenes/Outlast.jpg",
        cant: 1,
        consola: "PlayStation4",
        bgImg: "imagenes/bgOutlast.jpg",
        description: "En Outlast para PS4 nos ponemos en la piel de un periodista que, informado por un interno anónimo se embarca en una investigación para descubrir si, tal y cómo éste sugiere, una perturbada mente está conduciendo una serie de despiadados experimentos con humanos. Así, nos sumergimos en una nueva aventura de terror –mucho terror– en primera persona en la que tendremos que luchar por sobrevivir mientras, cámara en mano, documentamos todo lo que sucede en los claustrofóbicos entornos."
    },
    {
        id:"4",
        nombre:"resident evil4" ,
        price: 850 ,
        genero: "survival",
        img:"imagenes/re.jpg",
        cant: 1,
        consola: "PlayStation2",
        bgImg: "imagenes/bgRe4.jpg",
        description: "Resident Evil 4 es una de las entregas más aclamadas de toda la saga debido a su importancia argumental, por lo que ahora tendremos, por primera vez, la oportunidad de disfrutarlos en formato portátil. Este tipo de remasterizaciones se tratan de puestas al día a nivel gráfico, añadiendo más resolución y calidad a la imagen de estos survival horror con zombis, corporaciones farmacéuticas y sectas rurales. Dadas las particularidades de Nintendo Switch a nivel de control gracias a sus Joy-Con, estrenará características adaptadas."
    },    
    {
        id:"5",
        nombre:"resident evil 3",
        price: 1500,
        genero: "survival",
        img:"imagenes/re3.jpg",
        cant: 1,
        consola: "PlayStation4",
        bgImg: "imagenes/bgRe3.jpg",
        description: "Resident Evil 3 Remake es la reinterpretación del clásico de Capcom, Resident Evil 3: Nemesis, la tercera parte de la trilogía original de survival horror. Siguiendo con las pasos de la segunda parte, y con un aspecto jugable y gráfico renovado en base a las actuales plataformas, nos contará la historia de Jill Valentine y su huida de la ciudad de Raccoon City infestada por el virus T. Incluirá el modo multijugador Resident Evil Resistance."
    },
    {
        id:"6",
        nombre:"forza horizon4" ,
        price: 1850,
        genero: "autos",
        img:"imagenes/forza.jpg",
        cant: 1,
        consola: "PlayStation4",
        bgImg: "imagenes/bgFH.jpg",
        description: "Forza Horizon 5 es la nueva entrega de la saga de conducción en mundo abierto de Microsoft. El título, que llegará a Xbox One, Xbox Series X/S y PC, se ambientará en México y contará con un sistema de condiciones meteorológicas que incluirá desde leves tormentas de polvo, hasta tormentas tropicales más fuertes y otro tipo de eventos climáticos grandes y masivos. Además de la nueva información aportada a nivel de jugabilidad, los modos The Eliminator y Super 7 estarán de regreso. Forza Horizon 5 también contará con un conjunto de herramientas que permitirán crear nuestras propias carreras, modos de juego y experiencias. Todo será personalizable, hasta las reglas fundamentales, convirtiendo esta nueva entrega de la saga en la más divertida, accesible y variada."
    },
    {
        id:"7",
        nombre: "horizon zero dawn",
        price: 1650,
        genero: "ación",
        img:"imagenes/horizon.jpg",
        bgImg: "imagenes/bgHorizon.jpg",
        cant: 1,
        consola: "PlayStation4",
        bgImg: "imagenes/bgHorizon.jpg",
        description: "Horizon: Zero Dawn es un juego de aventuras en mundo abierto, con dosis acción y exploración en tercera persona a cargo de Guerrilla Games, responsables de Killzone. Ambientado en un futuro apocalíptico distante, los seres humanos han experimentado una regresión tecnológica que los ha devuelto a la edad de piedra y dividido en tribus. Encarnando a Aloy, una hábil cazadora, deberemos descubrir secretos del pasado, así como sobrevivir en un nuevo mundo plagado de criaturas robóticas inteligentes, hostiles y muy peligrosas."
    },
    {
        id:"8",
        nombre:"uncharted 4" ,
        price: 1000,
        genero: "acción",
        img:"imagenes/uncharted.jpg",
        cant: 1,
        consola: "PlayStation4",
        bgImg: "imagenes/bgUncharted.jpg",
        description: "Uncharted 4: El Desenlace del Ladrón es la llegada de Nathan Drake a la nueva generación de videojuegos, en una cuarta parte de la serie desarrollada por Naughty Dog que nos llevará de nuevo a vivir aventuras en los lugares más recónditos del mundo."
    },
    {
        id:"9",
        nombre: "metal gear solid V",
        price: 950,
        genero:"acción",
        img:"imagenes/mgs.jpg",
        cant: 1,
        consola: "PlayStation4",
        bgImg: "imagenes/bgMgs5.jpg",
        description: "Metal Gear Solid continúa en PS3 con una nueva entrega posterior a Metal Gear Solid: Peace Walker y anterior a los sucesos de los dos primeros Metal Gear y toda la subsaga Solid posterior. Big Boss, el 'padre' de Solid Snake, se despierta nueve años después de los sucesos de Ground Zeroes y tendrá que acabar con sus enemigos en Afganistán y África, con un enorme mundo abierto a nuestros pies."
    },
    {
        id:"10",
        nombre: "dragonball fighters Z",
        price: 750,
        genero:"acción",
        img:"imagenes/dbz.jpg",
        cant: 1,
        consola: "PlayStation4",
        bgImg: "imagenes/bgFz.jpg",
        description: "Dragon Ball fighterZ es un videojuego de peleas arcade en 2D desarrollado por el estudio Arc System Works y distribuido por Namco Bandai para las plataformas de PC y Xbox One.El juego ofrecerá combates con sabor clásico pero muy espectaculares, ya que incluye elementos en 3D como los ataques finales, movimientos especiales y distintas animaciones para imitar al máximo posible el estilo de animación del anime."
    },
    {
        id:"11",
        nombre:"fifa 2022" ,
        price: 2100,
        genero: "deporte",
        img:"imagenes/fifa2022.jpg",
        cant: 1,
        consola: "PlayStation4",
        bgImg: "imagenes/bgFifa22.png",
        description: "FIFA 22 es un videojuego desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch."
    },
    {
        id:"12",
        nombre:"pes" ,
        price: 2000 ,
        genero: "deporte",
        img:"imagenes/pes2020.jpg",
        cant: 1,
        consola: "PlayStation4",
        bgImg: "imagenes/bgPes22.jpg",
        description: "Ya está aquí una nueva era del fútbol virtual: PES evoluciona para convertirse en eFootball. Disfruta ya de un nuevo capítulo en los juegos de fútbol con eFootball con este título gratuito actualizado a la nueva temporada 22/23, con mejoras gráficas y plantillas al día."
    }
]


