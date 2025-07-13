// app.js

const preguntas = {
  logica: [
    {
      pregunta: "¿Qué es una variable?",
      opciones: ["Un espacio en la memoria del computador", "Un objeto", "Función", "Un Loop"],
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

    // Nivel medio
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
    {
      pregunta: "¿Qué es un 'switch' en programación?",
      opciones: [
        "Un tipo de bucle",
        "Una estructura de control para múltiples condiciones",
        "Un operador matemático",
        "Una función",
      ],
      correcta: 1,
      dificultad: "medio",
    },
    {
      pregunta: "¿Qué es un 'string'?",
      opciones: [
        "Un número",
        "Una cadena de caracteres",
        "Un tipo de bucle",
        "Un operador",
      ],
      correcta: 1,
      dificultad: "medio",
    },
    {
      pregunta: "¿Qué es un 'integer'?",
      opciones: [
        "Un número entero",
        "Una cadena de texto",
        "Un tipo de bucle",
        "Un operador lógico",
      ],
      correcta: 0,
      dificultad: "medio",
    },
    {
      pregunta: "¿Qué es un 'float'?",
      opciones: [
        "Un número entero",
        "Un número decimal",
        "Un tipo de bucle",
        "Un operador",
      ],
      correcta: 1,
      dificultad: "medio",
    },
    {
      pregunta: "¿Qué es un 'boolean'?",
      opciones: [
        "Un valor verdadero o falso",
        "Un número",
        "Un tipo de bucle",
        "Un operador",
      ],
      correcta: 0,
      dificultad: "medio",
    },

    // Nivel difícil
    {
      pregunta: "¿Qué es la complejidad algorítmica?",
      opciones: [
        "El número de líneas de código",
        "La eficiencia de un algoritmo en tiempo y espacio",
        "El tipo de datos que usa un algoritmo",
        "La cantidad de variables en un algoritmo",
      ],
      correcta: 1,
      dificultad: "dificil",
    },
    {
      pregunta: "¿Qué es un 'stack overflow'?",
      opciones: [
        "Un error por desbordamiento de pila",
        "Un tipo de bucle",
        "Un operador",
        "Una función",
      ],
      correcta: 0,
      dificultad: "dificil",
    },
    {
      pregunta: "¿Qué es la programación orientada a objetos (POO)?",
      opciones: [
        "Un paradigma de programación basado en objetos",
        "Un tipo de bucle",
        "Un lenguaje de programación",
        "Un operador",
      ],
      correcta: 0,
      dificultad: "dificil",
    },
    {
      pregunta: "¿Qué es un 'puntero' en programación?",
      opciones: [
        "Una variable que almacena una dirección de memoria",
        "Un tipo de bucle",
        "Un operador",
        "Una función",
      ],
      correcta: 0,
      dificultad: "dificil",
    },
    {
      pregunta: "¿Qué es la 'memoria dinámica'?",
      opciones: [
        "Memoria que se asigna en tiempo de ejecución",
        "Memoria fija en el código",
        "Un tipo de bucle",
        "Un operador",
      ],
      correcta: 0,
      dificultad: "dificil",
    
  }
  ],
  java: [
    // Nivel fácil
    {
      pregunta: "¿Qué es Java?",
      opciones: [
        "Un sistema operativo",
        "Un lenguaje de programación orientado a objetos",
        "Un navegador web",
        "Una base de datos"
      ],
      correcta: 1,
      dificultad: "facil"
    },
    {
      pregunta: "¿Cuál es la extensión de un archivo compilado en Java?",
      opciones: [".java", ".class", ".exe", ".jar"],
      correcta: 1,
      dificultad: "facil"
    },
    {
      pregunta: "¿Qué palabra clave se usa para definir una clase en Java?",
      opciones: ["function", "define", "class", "object"],
      correcta: 2,
      dificultad: "facil"
    },
    {
      pregunta: "¿Qué método es el punto de entrada de un programa Java?",
      opciones: [
        "start()",
        "main()",
        "run()",
        "init()"
      ],
      correcta: 1,
      dificultad: "facil"
    },
    {
      pregunta: "¿Cuál es el tipo de dato correcto para almacenar texto en Java?",
      opciones: ["int", "String", "char", "float"],
      correcta: 1,
      dificultad: "facil"
    },
  
    // Nivel medio
    {
      pregunta: "¿Qué es la JVM?",
      opciones: [
        "Java Virtual Machine",
        "Java Version Manager",
        "Java Value Method",
        "Java View Model"
      ],
      correcta: 0,
      dificultad: "medio"
    },
    {
      pregunta: "¿Qué estructura de control permite ejecutar diferentes bloques según un valor?",
      opciones: ["if", "loop", "switch", "try"],
      correcta: 2,
      dificultad: "medio"
    },
    {
      pregunta: "¿Qué palabra clave se usa para heredar una clase en Java?",
      opciones: ["implements", "inherits", "extends", "super"],
      correcta: 2,
      dificultad: "medio"
    },
    {
      pregunta: "¿Qué es el polimorfismo en Java?",
      opciones: [
        "Crear múltiples constructores",
        "Tener varias clases con el mismo nombre",
        "Capacidad de un objeto de adoptar múltiples formas",
        "Ninguna de las anteriores"
      ],
      correcta: 2,
      dificultad: "medio"
    },
    {
      pregunta: "¿Qué interfaz se implementa para crear hilos (threads) en Java?",
      opciones: ["Runnable", "Threadable", "Concurrency", "Executor"],
      correcta: 0,
      dificultad: "medio"
    },
  
    // Nivel difícil
    {
      pregunta: "¿Cuál es el propósito del recolector de basura (Garbage Collector) en Java?",
      opciones: [
        "Eliminar archivos temporales",
        "Limpiar el código fuente",
        "Liberar memoria de objetos no utilizados",
        "Reducir errores de sintaxis"
      ],
      correcta: 2,
      dificultad: "dificil"
    },
    {
      pregunta: "¿Qué es una excepción Checked en Java?",
      opciones: [
        "Una excepción que puede ser ignorada",
        "Una excepción que el compilador obliga a manejar",
        "Una excepción en tiempo de ejecución",
        "Una excepción lógica"
      ],
      correcta: 1,
      dificultad: "dificil"
    },
    {
      pregunta: "¿Qué hace la palabra clave `final` en una variable?",
      opciones: [
        "Permite que se pueda cambiar después",
        "Hace que solo sea accesible dentro de un método",
        "Impide que se modifique su valor una vez asignado",
        "La convierte en una constante global"
      ],
      correcta: 2,
      dificultad: "dificil"
    },
    {
      pregunta: "¿Qué es una clase abstracta?",
      opciones: [
        "Una clase sin métodos",
        "Una clase que no se puede extender",
        "Una clase que no puede ser instanciada directamente",
        "Una clase sin atributos"
      ],
      correcta: 2,
      dificultad: "dificil"
    },
    {
      pregunta: "¿Qué anotación se utiliza para indicar que un método sobrescribe otro en Java?",
      opciones: [
        "@Override",
        "@Overload",
        "@Rewrite",
        "@Implement"
      ],
      correcta: 0,
      dificultad: "dificil"
    }
  ],
  git: [],
  aws: [],
  javascript: [],
  desarrolloWeb: [],
  python: [],
  basesDeDatos: [],
};

let temaActual = "";
let preguntaActual = 0;
let puntaje = 0;

// 🚀 Iniciar el tema seleccionado
function cargarTema(tema) {
  const temasEnDesarrollo = [
    "git", "aws", "javascript", "desarrollo-web", "python", "basesDeDatos"
  ];

  if (temasEnDesarrollo.includes(tema)) {
    alert("🚧 Desafío en desarrollo. ¡Próximamente más preguntas! Esté Atento!!!");
    return;
  }

  temaActual = tema;
  document.querySelector(".temas-container").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  iniciarQuiz();
}

// 🔄 Iniciar preguntas
function iniciarQuiz() {
  puntaje = 0;
  preguntaActual = 0;
  mostrarPregunta();
}

// 🧠 Mostrar pregunta actual
function mostrarPregunta() {
  const quizContainer = document.getElementById("quiz-container");
  const pregunta = preguntas[temaActual][preguntaActual];

  quizContainer.innerHTML = `
    <div class="quiz-card">
      <h2>${pregunta.pregunta}</h2>

      <div class="opciones-container">
        ${pregunta.opciones.map(
          (opcion, index) => `
          <button class="opcion" onclick="seleccionarRespuesta(${index})">
            ${opcion}
          </button>
        `).join("")}
      </div>

      <div class="quiz-progress">
        Pregunta ${preguntaActual + 1} de ${preguntas[temaActual].length}
      </div>

      <div class="volver-inicio">
        <button onclick="volverAInicio()" class="btn-volver">⬅️ Volver al inicio</button>
      </div>
    </div>
  `;
}

// ✅ Permitir volver al inicio desde pregunta
function volverAInicio() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.querySelector(".temas-container").classList.remove("hidden");
}

// ✔️ Evaluar respuesta del usuario
function seleccionarRespuesta(opcionIndex) {
  const opciones = document.querySelectorAll(".opcion");
  const pregunta = preguntas[temaActual][preguntaActual];

  opciones.forEach(btn => btn.disabled = true);

  if (opcionIndex === pregunta.correcta) {
    opciones[opcionIndex].classList.add("correcta");
    puntaje++;
  } else {
    opciones[opcionIndex].classList.add("incorrecta");
    opciones[pregunta.correcta].classList.add("correcta");
  }

  setTimeout(siguientePregunta, 1500);
}

// ⏭️ Pasar a la siguiente pregunta
function siguientePregunta() {
  preguntaActual++;
  if (preguntaActual < preguntas[temaActual].length) {
    mostrarPregunta();
  } else {
    mostrarResultados();
  }
}

// 📊 Mostrar resultados finales
function mostrarResultados() {
  const quizContainer = document.getElementById("quiz-container");
  const total = preguntas[temaActual].length;
  const porcentaje = (puntaje / total) * 100;

  quizContainer.innerHTML = `
    <div class="resultados-card">
      <h2>Resultados Finales</h2>
      <p class="puntaje">${puntaje} / ${total}</p>
      <p class="porcentaje">${porcentaje.toFixed(1)}% de respuestas correctas</p>
      <p>${obtenerFeedback(porcentaje)}</p>
      <button onclick="volverATemas()" class="btn-reiniciar">Volver a evaluar Temas</button>
    </div>
  `;
}

// 💬 Feedback según puntaje
function obtenerFeedback(porcentaje) {
  if (porcentaje >= 90) return "¡Excelente trabajo! Dominas este tema 💪";
  if (porcentaje >= 70) return "¡Buen resultado! Sigue practicando 😊";
  if (porcentaje >= 50) return "¡No está mal! Repasa los conceptos 📚";
  return "¡Sigue practicando! El conocimiento se construye paso a paso 💡";
}

// 🔁 Volver al menú principal
function volverATemas() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.querySelector(".temas-container").classList.remove("hidden");
}
