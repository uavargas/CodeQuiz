// Base de datos de preguntas
const preguntas = {
  logica: [
    {
      pregunta: "¿Qué es una variable?",
      opciones: [
        "Un espacio en la memoria del computador",
        "Un objeto",
        "Función",
        "Un Loop",
      ],
      correcta: 0,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué estructura se usa para tomar decisiones en programación?",
      opciones: ["Bucle for", "Condicional if", "Función", "Arreglo"],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "Selecciona los tipos de datos numéricos en programación:",
      opciones: ["int", "float", "string", "boolean", "double"],
      correcta: [0, 1, 4],
      dificultad: "medio",
      tipo: "multiple",
    },
    {
      pregunta: "¿Qué es un bucle?",
      opciones: [
        "Una función",
        "Una estructura que repite código",
        "Un tipo de dato",
        "Un operador",
      ],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "Selecciona las estructuras de control de flujo:",
      opciones: ["if-else", "for", "variable", "while", "constante"],
      correcta: [0, 1, 3],
      dificultad: "medio",
      tipo: "multiple",
    },
    {
      pregunta: "¿Qué es un algoritmo?",
      opciones: [
        "Un lenguaje de programación",
        "Un conjunto de pasos para resolver un problema",
        "Una base de datos",
        "Un tipo de variable",
      ],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es un arreglo (array)?",
      opciones: [
        "Una colección de elementos del mismo tipo",
        "Un tipo de función",
        "Un operador lógico",
        "Una condición",
      ],
      correcta: 0,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué hace el operador '==' en programación?",
      opciones: ["Asignación", "Comparación de igualdad", "Suma", "División"],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es una función?",
      opciones: [
        "Un tipo de dato",
        "Un bloque de código reutilizable",
        "Un error en el código",
        "Una variable global",
      ],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta:
        "¿Qué tipo de bucle se ejecuta mientras una condición sea verdadera?",
      opciones: [
        "Bucle for",
        "Bucle while",
        "Bucle do-while",
        "Bucle infinito",
      ],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es un operador lógico?",
      opciones: ["&&", "+", "=", "/"],
      correcta: 0,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es un comentario en programación?",
      opciones: [
        "Un error en el código",
        "Texto ignorado por el compilador",
        "Una función",
        "Una variable",
      ],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué hace el operador '%' en programación?",
      opciones: [
        "Multiplicación",
        "División",
        "Módulo (residuo de la división)",
        "Suma",
      ],
      correcta: 2,
      dificultad: "medio",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es la recursividad?",
      opciones: [
        "Un tipo de bucle",
        "Una función que se llama a sí misma",
        "Un error de sintaxis",
        "Una estructura de datos",
      ],
      correcta: 1,
      dificultad: "medio",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es un parámetro en una función?",
      opciones: [
        "Un valor que la función recibe",
        "Un valor que la función retorna",
        "Un tipo de bucle",
        "Un operador",
      ],
      correcta: 0,
      dificultad: "medio",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es un bucle 'do-while'?",
      opciones: [
        "Un bucle que se ejecuta al menos una vez",
        "Un bucle que no se ejecuta nunca",
        "Un bucle infinito",
        "Un bucle que solo funciona con números",
      ],
      correcta: 0,
      dificultad: "medio",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué es un operador ternario?",
      opciones: [
        "Un operador que toma tres operandos",
        "Un operador lógico",
        "Un tipo de bucle",
        "Una función",
      ],
      correcta: 0,
      dificultad: "medio",
      tipo: "simple",
    },
  ],
  java: [
    {
      pregunta: "¿Qué es Java?",
      opciones: [
        "Un sistema operativo",
        "Un lenguaje de programación orientado a objetos",
        "Un navegador web",
        "Una base de datos",
      ],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "Selecciona las características de Java:",
      opciones: [
        "Orientado a objetos",
        "Compilado e interpretado",
        "Débilmente tipado",
        "Multiplataforma",
        "Solo para web",
      ],
      correcta: [0, 1, 3],
      dificultad: "intermedia",
      tipo: "multiple",
    },
    {
      pregunta: "¿Cuál es la extensión de un archivo compilado en Java?",
      opciones: [".java", ".class", ".exe", ".jar"],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué palabra clave se usa para definir una clase en Java?",
      opciones: ["function", "define", "class", "object"],
      correcta: 2,
      dificultad: "facil",
      tipo: "simple",
    },
    {
      pregunta: "¿Qué método es el punto de entrada de un programa Java?",
      opciones: ["start()", "main()", "run()", "init()"],
      correcta: 1,
      dificultad: "facil",
      tipo: "simple",
    },
  ],
  // AWS Questions
  aws: [
    /* Pregunta 1*/

    {
      pregunta:
        "Una aplicación se ejecuta en una instancia de EC2 en una VPC. La aplicación procesa los registros almacenados en un bucket S3. " +
        "La instancia EC2 necesita acceder al bucket S3 sin conexión a internet. ¿Qué solución proporcionará conectividad de red privada a Amazon S3?",
      opciones: [
        "Cree un punto de enlace de VPC de puerta de enlace para el bucket de S3.",
        "Transmita los registros a Amazon CloudWatch Logs. Exporte los registros al bucket de S3.",
        "Cree un perfil de instancia en Amazon EC2 para permitir el acceso a S3.",
        "Cree una API de Amazon API Gateway con un enlace privado para acceder al punto de enlace de S3.",
      ],
      correcta: 0,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 2*/
    {
      pregunta:
        "Una empresa tiene una aplicacion que se ejecuta en una instancia EC2 y utiliza una base de datos de Amazon Aurora. Las instancias EC2 se conectan a la base de datos mediante nombres de usuario y contraseñas " +
        "que se almacenan localmente en un archivo. La empresa quiere minimizar la sobrecarga operativa de la administracion de credenciales. ¿Que debe hacer un arquitecto de soluciones para lograr este objetivo?",
      opciones: [
        "Utilice AWS Secrets Manager. Active la rotación automática.",
        "Utilice el almacén de parámetros de AWS Systems Manager. Active la rotación automática.",
        "Cree un bucket de Amazon S3 para almacenar objetos cifrados con una clave de cifrado de AWS Key Management Service (AWS KMS). Migre el archivo de credenciales al bucket de S3. Apunte la aplicación al bucket de S3.",
        "Cree un volumen cifrado de Amazon Elastic Block Store (Amazon EBS) para cada instancia EC2. Adjunte el nuevo volumen de EBS a cada instancia EC2. Migre el archivo de credenciales al nuevo volumen de EBS. Apunte la aplicación al nuevo volumen de EBS.",
      ],
      correcta: 0,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 3*/
    {
      pregunta:
        "Una empresa está lanzando una nueva aplicación y mostrará las métricas de la aplicación en un panel de Amazon CloudWatch. El gerente de producto de la empresa necesita acceder a este tablero periódicamente. El gerente de producto no tiene una cuenta de AWS. Un arquitecto de soluciones debe proporcionar acceso al gerente de producto siguiendo el principio de privilegios mínimos.",
      opciones: [
        "Comparta el panel desde la consola de CloudWatch. Ingrese la dirección de correo electrónico del gerente de producto y complete los pasos para compartir. Proporcione un vínculo para compartir para el panel al gerente de producto.",
        "Cree un usuario de IAM específicamente para el gerente de producto. Adjunte la política administrada de AWS CloudWatchReadOnlyAccess al usuario. Comparta las nuevas credenciales de inicio de sesión con el gerente de producto. Comparta la URL del navegador del panel correcto con el gerente de producto.",
        "Cree un usuario de IAM para los empleados de la empresa. Adjunte la política administrada de AWS ViewOnlyAccess al usuario de IAM. Comparta las nuevas credenciales de inicio de sesión con el gerente de producto. Pida al administrador de productos que vaya a la consola de CloudWatch y localice el panel por su nombre en la sección Paneles",
        "Implemente un servidor bastión en una subred pública. Cuando el gerente de producto requiera acceso al panel, inicie el servidor y comparta las credenciales RDP. En el servidor bastión, asegúrese de que el navegador esté configurado para abrir la URL del panel con credenciales de AWS almacenadas en caché que tengan los permisos adecuados para ver el panel.",
      ],
      correcta: 0,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 4*/
    {
      pregunta:
        "Una empresa está migrando aplicaciones a AWS. Las aplicaciones se implementan en diferentes cuentas. La empresa administra las cuentas de forma centralizada mediante AWS Organizations. El equipo de seguridad de la empresa necesita una solución de inicio de sesión único (SSO) en todas las cuentas de la empresa. La empresa debe seguir administrando los usuarios y grupos en su Microsoft Active Directory autoadministrado local." +
        "¿Qué solución cumplirá estos requisitos?",
      opciones: [
        "Habilite AWS Single Sign-On (AWS SSO) desde la consola de AWS SSO. Cree una confianza de bosque unidireccional o una confianza de dominio unidireccional para conectar Microsoft Active Directory autoadministrado de la empresa con AWS SSO mediante AWS Directory Service para Microsoft Active Directory.",
        "Habilite AWS Single Sign-On (AWS SSO) desde la consola de AWS SSO. Cree una confianza de bosque bidireccional para conectar Microsoft Active Directory autoadministrado de la empresa con AWS SSO mediante AWS Directory Service para Microsoft Active Directory.",
        "Utilice AWS Directory Service. Cree una relación de confianza bidireccional con el Microsoft Active Directory autoadministrado de la empresa.",
        "Implemente un proveedor de identidades (IdP) local. Habilite AWS Single Sign-On (AWS SSO) desde la consola de AWS SSO.",
      ],
      correcta: 1,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 5*/

    {
      pregunta:
        "Una empresa necesita almacenar sus registros contables en Amazon S3. Los registros deben ser accesibles de inmediato durante 1 año y luego deben archivarse durante 9 años adicionales. Nadie en la empresa, incluidos los usuarios administrativos y los usuarios raíz, puede eliminar los registros durante todo el período de 10 años. Los registros deben almacenarse con la máxima resistencia." +
        "¿Qué solución cumplirá estos requisitos?",
      opciones: [
        "Almacene los registros en S3 Glacier durante todo el período de 10 años. Utilice una directiva de control de acceso para denegar la eliminación de los registros durante un período de 10 años.",
        "Almacene los registros mediante S3 Intelligent-Tiering. Utilice una política de IAM para denegar la eliminación de los registros. Después de 10 años, cambie la política de IAM para permitir la eliminación.",
        "Utilice una política de ciclo de vida de S3 para realizar la transición de los registros de S3 Standard a S3 Glacier Deep Archive después de 1 año. Utilice S3 Object Lock en modo de cumplimiento durante un período de 10 años",
        "Utilice una política de ciclo de vida de S3 para realizar la transición de los registros de S3 Standard a S3 One Zone-Infrequent Access (S3 One Zone-IA) después de 1 año. Utilice S3 Object Lock en modo de gobernanza durante un período de 10 años",
      ],
      correcta: 2,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 6*/
    {
      pregunta:
        "La aplicación HTTP de una empresa está detrás de un equilibrador de carga de red (NLB). El grupo de destino del NLB está configurado para utilizar un grupo de Amazon EC2 Auto Scaling con varias instancias EC2 que ejecutan el servicio web." +
        "La compañía nota que el NLB no detecta errores HTTP para la aplicación. Estos errores requieren un reinicio manual de las instancias EC2 que ejecutan el servicio web. La empresa necesita mejorar la disponibilidad de la aplicación sin escribir scripts o código personalizados." +
        "¿Qué debe hacer un arquitecto de soluciones para cumplir con estos requisitos?",
      opciones: [
        "Habilite las comprobaciones de estado HTTP en el NLB, proporcionando la URL de la aplicación de la empresa.",
        "Agregue un trabajo cron a las instancias EC2 para comprobar los registros de la aplicación local una vez por minuto. Si se detectan errores HTTP. La aplicación se reiniciará.",
        "Reemplace el NLB por un equilibrador de carga de aplicaciones. Habilite las comprobaciones de estado HTTP proporcionando la URL de la aplicación de la empresa. Configure una acción de Auto Scaling para reemplazar las instancias en mal estado.",
        "Cree una alarma de Amazon Cloud Watch que monitoree la métrica UnhealthyHostCount para el NLB. Configure una acción de Auto Scaling para reemplazar las instancias incorrectas cuando la alarma esté en estado ALARM.",
      ],
      correcta: 2,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 7*/
    {
      pregunta:
        "Una empresa recibe 10 TB de datos de instrumentación cada día de varias máquinas ubicadas en una sola fábrica. Los datos consisten en archivos JSON almacenados en una red de área de almacenamiento (SAN) en un centro de datos local ubicado dentro de la fábrica. La compañía quiere enviar estos datos a Amazon S3, donde se puede acceder a ellos mediante varios sistemas adicionales que proporcionan análisis críticos casi en tiempo real. Una transferencia segura es importante porque los datos se consideran confidenciales." +
        "¿Qué solución ofrece la transferencia de datos MÁS fiable?",
      opciones: [
        "AWS DataSync a través de Internet pública",
        "AWS DataSync a través de AWS Direct Connect.",
        "AWS Database Migration Service (AWS DMS) a través de Internet pública.",
        "AWS Database Migration Service (AWS DMS) a través de AWS Direct Connect.",
      ],
      correcta: 1,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 8*/
    {
      pregunta:
        "Una empresa utiliza una base de datos SQL para almacenar datos de películas a los que se puede acceder públicamente. La base de datos se ejecuta en una instancia de base de datos Single-AZ de Amazon RDS. Un script ejecuta consultas a intervalos aleatorios cada día para registrar el número de películas nuevas que se han agregado a la base de datos. El script debe informar un total final durante el horario comercial." +
        "El equipo de desarrollo de la empresa observa que el rendimiento de la base de datos es inadecuado para las tareas de desarrollo cuando se ejecuta el script. Un arquitecto de soluciones debe recomendar una solución para resolver este problema." +
        "¿Qué solución cumplirá este requisito con la MENOR sobrecarga operativa?",
      opciones: [
        "Modifique la instancia de base de datos para que sea una implementación Multi-AZ.",
        "Cree una réplica de lectura de la base de datos. Configure el script para consultar solo la réplica de lectura.",
        "Indique al equipo de desarrollo que exporte manualmente las entradas en la base de datos al final de cada día.",
        "Utilice Amazon ElastiCache para almacenar en caché las consultas comunes que el script ejecuta en la base de datos.",
      ],
      correcta: 1,
      dificultad: "Medio",
      tipo: "simple",
    },
    /* Pregunta 9*/
    {
      pregunta:
        "Una empresa almacena información confidencial de los usuarios en un bucket de Amazon S3. La empresa quiere proporcionar acceso seguro a este bucket desde el nivel de aplicación que se ejecuta en instancias de Amazon EC2 dentro de una VPC." +
        "¿Qué combinación de pasos debe tomar un arquitecto de soluciones para lograr esto? (Elija dos).",
      opciones: [
        "Configure un punto de enlace de puerta de enlace de VPC para Amazon S3 dentro de la VPC.",
        "Cree una política de bucket para hacer públicos los objetos del bucket de S3.",
        "Cree una política de bucket que limite el acceso solo al nivel de aplicación que se ejecuta en la VPC.",
        "Cree un usuario de IAM con una política de acceso de S3 y copie las credenciales de IAM en la instancia EC2.",
        "Cree un rol de IAM con una política de acceso de S3 y asigne el rol a la instancia EC2.",
        "Cree una instancia NAT y haga que las instancias EC2 utilicen la instancia NAT para acceder al bucket de S3.",
      ],
      correcta: [0, 2], // Índices de las respuestas correctas
      dificultad: "Medio",
      tipo: "multiple",
    },
    /* Pregunta 10*/
    {
      pregunta:
        "Un arquitecto de soluciones debe ayudar a una empresa a optimizar el costo de ejecutar una aplicación en AWS. La aplicación utilizará instancias de Amazon EC2, AWS Fargate y AWS Lambda para la computación dentro de la arquitectura." +
        "Las instancias EC2 ejecutarán la capa de ingesta de datos de la aplicación. El uso de EC2 será esporádico e impredecible. Las cargas de trabajo que se ejecutan en instancias EC2 se pueden interrumpir en cualquier momento. El front-end de la aplicación se ejecutará en Fargate y Lambda servirá a la capa de API. La utilización del front-end y la utilización de la capa de API serán predecibles en el transcurso del próximo año." +
        "¿Qué combinación de opciones de compra proporcionará la solución MÁS rentable para alojar esta aplicación? (Elija dos).",
      opciones: [
        "Uso de instancias de spot para la capa de ingesta de datos",
        "Uso de instancias bajo demanda para la capa de ingesta de datos",
        "Compre un plan de ahorro de cómputo de 1 año para el front-end y la capa de API.",
        "Compre instancias reservadas con pago inicial de 1 año para la capa de ingesta de datos.",
        "Compre un plan de ahorro de instancias EC2 de 1 año para el front-end y la capa de API.",
      ],
      correcta: [0, 2],
      dificultad: "Medio",
      tipo: "multiple",
    },
  ],

  // Oracle Questions
  oracle: [
    {
      // Pregunta 1
      pregunta:
        "Tiene objetos almacenados en un depósito de almacenamiento de objetos OCI que desea compartir con una empresa asociada. Usted decide utilizar solicitudes preautenticadas para otorgar acceso a los objetos. ¿Qué afirmación es cierta sobre las solicitudes preautenticadas?",
      opciones: [
        "A. Las solicitudes preautenticadas se pueden utilizar para eliminar depósitos u objetos.",
        "B. Debe proporcionar sus credenciales OCI a la empresa asociada.",
        "C. Eliminar una solicitud preautenticada no revoca el acceso al depósito u objeto asociado.",
        "D. No puedes editar una solicitud preautenticada",
      ],
      correcta: 3,
      dificultad: "Medio",
      tipo: "simple",
    },
  ],

  git: [],
  desarrollo_web: [],
  python: [],
  basesDeDatos: [],
};

// Variables de estado
let temaActual = "";
let preguntaActual = 0;
let puntaje = 0;
let nombreParticipante = "";
let selecciones = []; // Para almacenar las selecciones en preguntas múltiples
let timeoutId = null; // Para manejar el timeout de transición automática

// Función para cargar un tema
function cargarTema(tema) {
  const temasEnDesarrollo = ["git", "desarrollo_web", "python", "basesDeDatos"];

  if (temasEnDesarrollo.includes(tema)) {
    alert(
      "🚧 Desafío en desarrollo. ¡Próximamente más preguntas! Esté Atento!!!"
    );
    return;
  }

  // Limpiar timeout existente si hay uno
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  // Reiniciar estado del quiz
  temaActual = tema;
  preguntaActual = 0;
  puntaje = 0;
  selecciones = [];

  mostrarModal();
}

// Función para mostrar el modal de nombre
function mostrarModal() {
  document.getElementById("participanteModal").classList.remove("hidden");
}

// Función para ocultar el modal de nombre
function ocultarModal() {
  document.getElementById("participanteModal").classList.add("hidden");
}

// Función para iniciar el quiz
function iniciarQuiz() {
  nombreParticipante = document
    .getElementById("nombreParticipante")
    .value.trim();

  if (!nombreParticipante) {
    alert("Por favor ingresa tu nombre");
    return;
  }

  ocultarModal();
  document.querySelector(".temas-container").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  mostrarPregunta();
}

// Función para mostrar la pregunta actual
function mostrarPregunta() {
  const quizContainer = document.getElementById("quiz-container");
  const pregunta = preguntas[temaActual][preguntaActual];

  // Reiniciar selecciones para la nueva pregunta
  selecciones = [];

  let opcionesHTML = "";

  if (pregunta.tipo === "multiple") {
    // Para preguntas múltiples, usar checkboxes con transición automática
    opcionesHTML = `
      <p class="multiple-note">Selecciona todas las opciones correctas:</p>
      <div class="opciones-container">
        ${pregunta.opciones
          .map(
            (opcion, index) => `
          <label class="opcion checkbox-option">
            <input type="checkbox" value="${index}" onchange="toggleSeleccion(${index})">
            <span>${opcion}</span>
          </label>
        `
          )
          .join("")}
      </div>
    `;
  } else {
    // Para preguntas simples, usar botones como antes
    opcionesHTML = `
      <div class="opciones-container">
        ${pregunta.opciones
          .map(
            (opcion, index) => `
          <button class="opcion" onclick="seleccionarRespuestaSimple(${index})">
            ${opcion}
          </button>
        `
          )
          .join("")}
      </div>
    `;
  }

  quizContainer.innerHTML = `
    <div class="quiz-card">
      <h2>${pregunta.pregunta}</h2>
      ${opcionesHTML}
      <div class="quiz-progress">
        Pregunta ${preguntaActual + 1} de ${preguntas[temaActual].length}
      </div>
      <div class="volver-inicio">
        <button onclick="volverAInicio()" class="btn-volver">⬅️ Volver al inicio</button>
      </div>
    </div>
  `;
}

// Función para manejar la selección en preguntas múltiples (CORREGIDA)
function toggleSeleccion(index) {
  const pregunta = preguntas[temaActual][preguntaActual];
  const pos = selecciones.indexOf(index);

  if (pos === -1) {
    selecciones.push(index);
  } else {
    selecciones.splice(pos, 1);
  }

  // Solo verificar si tenemos la misma cantidad de selecciones que respuestas correctas
  if (selecciones.length === pregunta.correcta.length) {
    // Verificar si la respuesta es correcta
    const esCorrecta = arraysIguales(selecciones, pregunta.correcta);

    // Deshabilitar todos los checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((cb) => (cb.disabled = true));

    // Mostrar retroalimentación visual
    checkboxes.forEach((checkbox, i) => {
      const label = checkbox.closest("label");
      if (pregunta.correcta.includes(i)) {
        label.classList.add("correcta");
      } else if (selecciones.includes(i) && !pregunta.correcta.includes(i)) {
        label.classList.add("incorrecta");
      }
    });

    // Sumar puntaje si es correcta
    if (esCorrecta) {
      puntaje++;
    }

    // Transición automática después de 1.5 segundos
    timeoutId = setTimeout(siguientePregunta, 1500);
  }
}

// Función para seleccionar una respuesta simple
function seleccionarRespuestaSimple(opcionIndex) {
  const opciones = document.querySelectorAll(".opcion");
  const pregunta = preguntas[temaActual][preguntaActual];

  opciones.forEach((btn) => (btn.disabled = true));

  if (opcionIndex === pregunta.correcta) {
    opciones[opcionIndex].classList.add("correcta");
    puntaje++;
  } else {
    opciones[opcionIndex].classList.add("incorrecta");
    opciones[pregunta.correcta].classList.add("correcta");
  }

  timeoutId = setTimeout(siguientePregunta, 1500);
}

// Función para comparar dos arrays (para preguntas múltiples)
function arraysIguales(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((value, index) => value === sortedB[index]);
}

// Función para pasar a la siguiente pregunta
function siguientePregunta() {
  preguntaActual++;
  if (preguntaActual < preguntas[temaActual].length) {
    mostrarPregunta();
  } else {
    mostrarResultados();
  }
}

// Función para mostrar los resultados finales
function mostrarResultados() {
  const total = preguntas[temaActual].length;
  const porcentaje = (puntaje / total) * 100;

  document.getElementById("quiz-container").classList.add("hidden");

  // Mostrar modal de resultados
  const resultadoModal = document.getElementById("resultadosModal");
  document.getElementById(
    "resultadoTitulo"
  ).textContent = `¡Felicidades ${nombreParticipante}!`;
  document.getElementById(
    "resultadoPuntaje"
  ).textContent = `Obtuviste ${puntaje} de ${total} respuestas correctas (${porcentaje.toFixed(
    1
  )}%)`;
  document.getElementById("resultadoFeedback").textContent =
    obtenerFeedback(porcentaje);

  resultadoModal.classList.remove("hidden");
}

// Función para obtener feedback según el porcentaje
function obtenerFeedback(porcentaje) {
  if (porcentaje >= 90) return "¡Excelente trabajo! Dominas este tema 💪";
  if (porcentaje >= 70) return "¡Buen resultado! Sigue practicando 😊";
  if (porcentaje >= 50) return "¡No está mal! Repasa los conceptos 📚";
  return "¡Sigue practicando! El conocimiento se construye paso a paso 💡";
}

// Función para volver al inicio
function volverAInicio() {
  // Limpiar timeout si existe
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }

  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("resultadosModal").classList.add("hidden");
  document.querySelector(".temas-container").classList.remove("hidden");
}

// Función para volver a los temas desde los resultados
function volverATemas() {
  document.getElementById("resultadosModal").classList.add("hidden");
  document.querySelector(".temas-container").classList.remove("hidden");
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Cerrar modal al hacer clic en la X
  const closeModal = document.querySelector(".close-modal");
  if (closeModal) {
    closeModal.addEventListener("click", ocultarModal);
  }

  // Cerrar modal al hacer clic fuera del contenido
  const participanteModal = document.getElementById("participanteModal");
  if (participanteModal) {
    participanteModal.addEventListener("click", function (e) {
      if (e.target === this) {
        ocultarModal();
      }
    });
  }

  // Manejar envío del formulario
  const nombreForm = document.getElementById("nombreForm");
  if (nombreForm) {
    nombreForm.addEventListener("submit", function (e) {
      e.preventDefault();
      iniciarQuiz();
    });
  }

  // Manejar enter en el campo de nombre
  const nombreParticipanteInput = document.getElementById("nombreParticipante");
  if (nombreParticipanteInput) {
    nombreParticipanteInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        iniciarQuiz();
      }
    });
  }
});
