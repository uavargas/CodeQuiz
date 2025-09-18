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
    },
    {
      pregunta: "¿Qué estructura se usa para tomar decisiones en programación?",
      opciones: ["Bucle for", "Condicional if", "Función", "Arreglo"],
      correcta: 1,
      dificultad: "facil",
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
    },
    {
      pregunta: "¿Qué hace el operador '==' en programación?",
      opciones: ["Asignación", "Comparación de igualdad", "Suma", "División"],
      correcta: 1,
      dificultad: "facil",
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
    },
    {
      pregunta: "¿Qué es un operador lógico?",
      opciones: ["&&", "+", "=", "/"],
      correcta: 0,
      dificultad: "facil",
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
    },
    {
      pregunta: `Analiza el siguiente fragmento de código Java y responde: ¿Qué valor imprime en consola la línea marcada?
            
            <pre><code>public class TestScope {
                public static void main(String[] args) {
                    int x = 5;
                    {
                        int x = 10; // ← línea marcada
                        System.out.println(x);
                    }
                    System.out.println(x);
                }
            }
            </code></pre>`,
      opciones: [
        "10 seguido de 5",
        "5 seguido de 10",
        "10 seguido de 10",
        "Error de compilación por redeclarar la variable x",
      ],
      correcta: 3,
      dificultad: "intermedia",
    },
    {
      pregunta: "¿Cuál es la extensión de un archivo compilado en Java?",
      opciones: [".java", ".class", ".exe", ".jar"],
      correcta: 1,
      dificultad: "facil",
    },
    {
      pregunta: "¿Qué palabra clave se usa para definir una clase en Java?",
      opciones: ["function", "define", "class", "object"],
      correcta: 2,
      dificultad: "facil",
    },
    {
      pregunta: "¿Qué método es el punto de entrada de un programa Java?",
      opciones: ["start()", "main()", "run()", "init()"],
      correcta: 1,
      dificultad: "facil",
    },
  ],
  git: [],
  aws: [
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
      correcta: 3,
      dificultad: "Medio",
    },
    {
      pregunta:
        "Una empresa tiene una aplicacion que se ejecuta en una intancia EC2 y utiliza una base de datos de Amazon Aurora. Las instancias EC2 se conectan a la base de datos mediante nombres de usuario y contraseñas " +
        "que se almacenan localmente en un archivo. La empresa quiere minimizar la sobrecarga operativa de la administracion de credenciales. ¿Que debe hacer un arquitecto de soluciones para lograr este objetivo?",
      opciones: [
        "Utilice AWS Secrets Manager. Active la rotación automática.",
        "Utilice el almacén de parámetros de AWS Systems Manager. Active la rotación automática.",
        "Cree un bucket de Amazon S3 para almacenar objetos cifrados con una clave de cifrado de AWS Key Management Service (AWS KMS). Migre el archivo de credenciales al bucket de S3. Apunte la aplicación al bucket de S3.",
        "Cree un volumen cifrado de Amazon Elastic Block Store (Amazon EBS) para cada instancia EC2. Adjunte el nuevo volumen de EBS a cada instancia EC2. Migre el archivo de credenciales al nuevo volumen de EBS. Apunte la aplicación al nuevo volumen de EBS.",
      ],
      correcta: 0,
      dificultad: "Medio",
    },
    
  ],
  javascript: [],
  desarrollo_web: [],
  python: [],
  basesDeDatos: [],
};

// Variables de estado
let temaActual = "";
let preguntaActual = 0;
let puntaje = 0;
let nombreParticipante = "";

// Función para cargar un tema
function cargarTema(tema) {
  const temasEnDesarrollo = [
    "git",
    "javascript",
    "desarrollo-web",
    "python",
    "basesDeDatos",
  ];

  if (temasEnDesarrollo.includes(tema)) {
    alert(
      "🚧 Desafío en desarrollo. ¡Próximamente más preguntas! Esté Atento!!!"
    );
    return;
  }

  temaActual = tema;
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
  preguntaActual = 0;
  puntaje = 0;
  mostrarPregunta();
}

// Función para mostrar la pregunta actual
function mostrarPregunta() {
  const quizContainer = document.getElementById("quiz-container");
  const pregunta = preguntas[temaActual][preguntaActual];

  quizContainer.innerHTML = `
        <div class="quiz-card">
            <h2>${pregunta.pregunta}</h2>
            <div class="opciones-container">
                ${pregunta.opciones
                  .map(
                    (opcion, index) => `
                    <button class="opcion" onclick="seleccionarRespuesta(${index})">
                        ${opcion}
                    </button>
                `
                  )
                  .join("")}
            </div>
            <div class="quiz-progress">
                Pregunta ${preguntaActual + 1} de ${
    preguntas[temaActual].length
  }
            </div>
            <div class="volver-inicio">
                <button onclick="volverAInicio()" class="btn-volver">⬅️ Volver al inicio</button>
            </div>
        </div>
    `;
}

// Función para seleccionar una respuesta
function seleccionarRespuesta(opcionIndex) {
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

  setTimeout(siguientePregunta, 1500);
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
  document.getElementById("quiz-container").classList.add("hidden");
  document.querySelector(".temas-container").classList.remove("hidden");
}

// Función para volver a los temas
function volverATemas() {
  document.getElementById("resultadosModal").classList.add("hidden");
  document.querySelector(".temas-container").classList.remove("hidden");
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Cerrar modal al hacer clic en la X
  document
    .querySelector(".close-modal")
    .addEventListener("click", ocultarModal);

  // Cerrar modal al hacer clic fuera del contenido
  document
    .getElementById("participanteModal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        ocultarModal();
      }
    });

  // Manejar envío del formulario
  document
    .getElementById("nombreForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      iniciarQuiz();
    });
});
